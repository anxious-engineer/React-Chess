// TODO : Better Import
import bb from './img/bb.png';
import bk from './img/bk.png';
import bn from './img/bn.png';
import bp from './img/bp.png';
import bq from './img/bq.png';
import br from './img/br.png';
import wb from './img/wb.png';
import wk from './img/wk.png';
import wn from './img/wn.png';
import wp from './img/wp.png';
import wq from './img/wq.png';
import wr from './img/wr.png';

class Board{

  constructor(){
    this.pieces = this.buildBoard();
  }

  buildBoard(){
    let newPieces = [];
    newPieces.push([br, bb, bn, bk, bq, bn, bb, br]);
    newPieces.push(Array(8).fill(bp));
    newPieces.push(Array(8).fill(null));
    newPieces.push(Array(8).fill(null));
    newPieces.push(Array(8).fill(null));
    newPieces.push(Array(8).fill(null));
    newPieces.push(Array(8).fill(wp));
    newPieces.push([wr, wb, wn, wk, wq, wn, wb, wr]);
    return newPieces;
  }

}

class GameEngine{

  constructor(){
    this.board = new Board();
    this.pieces = this.board.pieces;
    // Instance Methods
    this.movePiece = this.movePiece.bind(this);
  }

  movePiece(move){
    console.log("Moving => ");
    console.log(move);
    let tmpPiece = this.pieces[move.src.row][move.src.col];
    this.pieces[move.src.row][move.src.col] = this.pieces[move.dest.row][move.dest.col];
    this.pieces[move.dest.row][move.dest.col] = tmpPiece;
  }

}


export {GameEngine};
