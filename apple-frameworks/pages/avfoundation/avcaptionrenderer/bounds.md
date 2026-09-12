> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/bounds](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/bounds)

# bounds (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The drawing bounds of caption scenes.

## Declaration

```swift
var bounds: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property value before drawing. The renderer uses the value in each call to [render(in:for:)](render%28in_for_%29.md), until you change it to a new value.

## See Also

### Configuring the renderer

- [captions](captions.md): The captions to render.

# bounds (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The drawing bounds of caption scenes.

## Declaration

```objectivec
@property (nonatomic) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

Set this property value before drawing. The renderer uses the value in each call to [renderInContext:forTime:](render%28in_for_%29.md), until you change it to a new value.

## See Also

### Configuring the renderer

- [captions](captions.md): The captions to render.
