> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlcanvaselement](https://developer.apple.com/documentation/webkitjs/htmlcanvaselement)

# HTMLCanvasElement

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Class  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 1.0+

A canvas is an HTML element that defines a runtime drawing region within your web content. You can access the canvas as a JavaScript object and obtain a drawing context from it, in the form of a `CanvasRenderingContext2D` object. You draw on the canvas by using the JavaScript methods of the [CanvasRenderingContext2D](canvasrenderingcontext2d.md) class.

## Declaration

```
interface HTMLCanvasElement
```

<a id="overview"></a>

## Overview

> **Note**

> For usage examples and conceptual guidance, see [Safari HTML5 Canvas Guide](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010542).

## Topics

### Setting Canvas Dimensions

- [width](htmlcanvaselement/1632871-width.md): An integer containing the width of the canvas in CSS pixels.
- [height](htmlcanvaselement/1634228-height.md): An integer containing the height of the canvas in CSS pixels.

### Obtaining a Context

- [getContext](htmlcanvaselement/1629325-getcontext.md): Returns the drawing context for the canvas.

### Getting an Image

- [toDataURL](htmlcanvaselement/1630000-todataurl.md): Returns a data URL containing an image of the canvas.

## Relationships

### Inherits From

- [HTMLElement](htmlelement.md)
