// Copyright 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

traceur.define('syntax.trees', function() {
  'use strict';

  var ParseTree = traceur.syntax.trees.ParseTree;
  var ParseTreeType = traceur.syntax.trees.ParseTreeType;

  /**
   * @param {traceur.util.SourceRange} location
   * @param {ParseTree} operand
   * @param {traceur.syntax.trees.ArgumentListTree} arguments  
   * @constructor
   * @extends {ParseTree}
   */
  function NewExpressionTree(location, operand, args) {
    ParseTree.call(this, ParseTreeType.NEW_EXPRESSION, location);
    this.operand = operand;
    this.args = args;
  }

  NewExpressionTree.prototype = {
    __proto__: ParseTree.prototype
  };

  return {
    NewExpressionTree: NewExpressionTree
  };
});
