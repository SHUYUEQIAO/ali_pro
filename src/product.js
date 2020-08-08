import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
	<div>
  		<table class="table">
            <tr class="table_header">
              <td>
                ID
              </td>
              <td>
                名称
              </td>
              <td>
                负责人
              </td>
              <td>
                简介
              </td>
              <td>
                创建时间
              </td>
            </tr>
            <tr class="row1">
              <td>
                1
              </td>
              <td>
                zhangshan
              </td>
              <td>
                20000
              </td>
              <td>
                20
              </td>
              <td>
                <a href="emplist.html">删除</a>&nbsp;<a href="update.html">修改</a>&nbsp;<a href="add.html">增加</a>
              </td>
            </tr>
            <tr class="row2">
              <td>
                2
              </td>
              <td>
                lishi
              </td>
              <td>
                20000
              </td>
              <td>
                20
              </td>
              <td>
                <a href="emplist.html">删除</a>&nbsp;<a href="update.html">修改</a>&nbsp;<a href="add.html">增加</a>
              </td>
            </tr>
          </table>
     </div>,
   document.getElementById("protable")
);