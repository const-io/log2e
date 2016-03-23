'use strict';

// MODULES //

var tape = require( 'tape' );
var ln = require( 'math-ln' );
var abs = require( 'math-abs' );
var E = require( 'const-e' );
var EPS = require( 'const-eps-float64' );
var LOG2E = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof LOG2E, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 1.4426950408889634', function test( t ) {
	t.equal( LOG2E, 1.4426950408889634, 'equals 1.4426950408889634' );
	t.end();
});

tape( 'export equals log2(e)', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( E ) / ln( 2 );

	delta = abs( v - LOG2E );
	tol = EPS * LOG2E;

	t.ok( delta <= tol, 'equals log2(e) within tolerance '+tol );

	t.end();
});
