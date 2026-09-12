> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglayer/size](https://developer.apple.com/documentation/coregraphics/cglayer/size)

# size (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the width and height of a layer object.

## Declaration

```swift
var size: CGSize { get }
```

## See Also

### Examining a Layer

- [context](context.md): Returns the graphics context associated with a layer object.

# CGLayerGetSize (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the width and height of a layer object.

## Declaration

```objectivec
extern CGSize CGLayerGetSize(CGLayerRef layer);
```

## Parameters

- `layer`: The layer whose width and height you want to obtain.

<a id="return-value"></a>

## Return Value

The width and height of the layer, in default user space coordinates.

## See Also

### Examining a Layer

- [CGLayerGetContext](context.md): Returns the graphics context associated with a layer object.
