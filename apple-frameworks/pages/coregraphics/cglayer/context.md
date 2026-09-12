> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglayer/context](https://developer.apple.com/documentation/coregraphics/cglayer/context)

# context (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the graphics context associated with a layer object.

## Declaration

```swift
var context: CGContext? { get }
```

<a id="Discussion"></a>

## Discussion

The context that’s returned is the context for the layer itself, not the context that you specified when you created the layer.

## See Also

### Examining a Layer

- [size](size.md): Returns the width and height of a layer object.

# CGLayerGetContext (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the graphics context associated with a layer object.

## Declaration

```objectivec
extern CGContextRefCGLayerGetContext(CGLayerRef layer);
```

## Parameters

- `layer`: The layer whose graphics context you want to obtain.

<a id="return-value"></a>

## Return Value

The graphics context associated with the layer.

<a id="Discussion"></a>

## Discussion

The context that’s returned is the context for the layer itself, not the context that you specified when you created the layer.

## See Also

### Examining a Layer

- [CGLayerGetSize](size.md): Returns the width and height of a layer object.
