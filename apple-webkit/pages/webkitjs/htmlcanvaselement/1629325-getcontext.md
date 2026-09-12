> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlcanvaselement/1629325-getcontext](https://developer.apple.com/documentation/webkitjs/htmlcanvaselement/1629325-getcontext)

# getContext

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

Returns the drawing context for the canvas.

## Declaration

```
RenderingContext? getContext(
    DOMString contextId, 
    any ... arguments
);
```

## Parameters

- `contextId`: The identifier for the context. Currently, only the identifier `"2d"` is supported.

<a id="return_value"></a>

## Return Value

The context object. Currently, always a `CanvasRenderingContext2D` object.

<a id="discussion"></a>

## Discussion

 Use the `getContext` method to obtain a drawing context for the canvas. All drawing on the canvas is done using the methods and properties of the context.
