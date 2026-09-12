> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/origin](https://developer.apple.com/documentation/avfoundation/avcaptionregion/origin)

# origin (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The region’s top-left position.

## Declaration

```swift
var origin: AVCaptionPoint { get }
```

<a id="Discussion"></a>

## Discussion

The caption’s origin may not provide undefined [x](../avcaptionpoint/x.md) and [y](../avcaptionpoint/y.md) values, which indicates the region doesn’t have positioning information for that dimension.

## See Also

### Accessing the location

- [AVCaptionPoint](../avcaptionpoint.md): A structure that defines the origin point for a caption.

# origin (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The region’s top-left position.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptionPoint origin;
```

<a id="Discussion"></a>

## Discussion

The caption’s origin may not provide undefined [x](../avcaptionpoint/x.md) and [y](../avcaptionpoint/y.md) values, which indicates the region doesn’t have positioning information for that dimension.

## See Also

### Accessing the location

- [AVCaptionPoint](../avcaptionpoint.md): A structure that defines the origin point for a caption.
- [AVCaptionPointMake](../avcaptionpointmake.md): Creates a caption point with the specified x and y positions.
