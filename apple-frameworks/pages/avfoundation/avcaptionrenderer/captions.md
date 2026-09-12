> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/captions](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/captions)

# captions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The captions to render.

## Declaration

```swift
var captions: [AVCaption] { get set }
```

<a id="Discussion"></a>

## Discussion

This property value is an empty array if there are no captions for the system to render.

## See Also

### Configuring the renderer

- [bounds](bounds.md): The drawing bounds of caption scenes.

# captions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The captions to render.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVCaption *> * captions;
```

<a id="Discussion"></a>

## Discussion

This property value is an empty array if there are no captions for the system to render.

## See Also

### Configuring the renderer

- [bounds](bounds.md): The drawing bounds of caption scenes.
