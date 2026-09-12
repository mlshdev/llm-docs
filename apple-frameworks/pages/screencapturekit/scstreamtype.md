> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamtype](https://developer.apple.com/documentation/screencapturekit/scstreamtype)

# SCStreamType (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ (deprecated in 18.2) · macOS 14.0+ (deprecated in 15.0)

The display type of the presented stream.

> Use SCShareableContentStyle instead

## Declaration

```swift
enum SCStreamType
```

## Topics

### Client presentation

- [SCStreamType.display](scstreamtype/display.md): Deprecated. The stream is currently on a complete display.
- [SCStreamType.window](scstreamtype/window.md): Deprecated. The stream is currently presented as a window.

### Initializers

- [init(rawValue:)](scstreamtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filter properties

- [contentRect](sccontentfilter/contentrect.md): The size and location of the content to filter, in screen points.
- [pointPixelScale](sccontentfilter/pointpixelscale.md): The scaling factor used to translate screen points into pixels.
- [streamType](sccontentfilter/streamtype.md): Deprecated. The type of the streaming content.
- [style](sccontentfilter/style.md): The display style of the sharable content.

# SCStreamType (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ (deprecated in 18.2) · macOS 14.0+ (deprecated in 15.0)

The display type of the presented stream.

> Use SCShareableContentStyle instead

## Declaration

```objectivec
enum SCStreamType : NSInteger;
```

## Topics

### Client presentation

- [SCStreamTypeDisplay](scstreamtype/display.md): Deprecated. The stream is currently on a complete display.
- [SCStreamTypeWindow](scstreamtype/window.md): Deprecated. The stream is currently presented as a window.

## See Also

### Filter properties

- [contentRect](sccontentfilter/contentrect.md): The size and location of the content to filter, in screen points.
- [pointPixelScale](sccontentfilter/pointpixelscale.md): The scaling factor used to translate screen points into pixels.
- [streamType](sccontentfilter/streamtype.md): Deprecated. The type of the streaming content.
- [style](sccontentfilter/style.md): The display style of the sharable content.
