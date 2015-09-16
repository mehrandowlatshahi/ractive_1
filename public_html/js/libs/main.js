/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    
    var ractive1 = new Ractive({
      // The `el` option can be a node, an ID, or a CSS selector.
      el: '#container',

      // We could pass in a string, but for the sake of convenience
      // we're passing the ID of the <script> tag above.
      template: '#template',

      // Here, we're passing in some initial data
      data: { 
          name: 'world',
          progress: 40,
          pgbarmax:"100",
          pgbarmin:"0",
          wa:[50,40,30],
          barstyles:['progress-bar-info', 'progress-bar-info', 'progress-bar-info'],
          target_pgbar_id:0
      }
    });
    
     $.updPrgBar = function(d){
        var wa_ = ractive1.get('wa');
        var tid = ractive1.get('target_pgbar_id');
        var bstyles = ractive1.get('barstyles');
        
        wa_[tid] +=d;
        if ( wa_[tid] <0){
            wa_[tid] =0;
        }
        
        ractive1.set('wa', wa_);
        if (wa_[tid] > 100){
            bstyles[tid]="progress-bar-danger";
        }else{
            bstyles[tid]="progress-bar-info";
        }

        ractive1.set('barstyles', bstyles);
      
        
    };
    $("#prgbarlist").change(function(){
        var v = $("#prgbarlist option:selected").text();
        var ds = v.split(" ")[2];
        var selbarid = parseInt(ds.trim())-1;
        if (selbarid <0){
            selbarid = 0;
        }
        ractive1.set('target_pgbar_id', selbarid);
        
    });
    
    });