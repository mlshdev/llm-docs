> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/naturalsize](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/naturalsize)

# naturalSize

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The natural dimensions of the media data that the track references.

## Declaration

```swift
static var naturalSize: AVAsyncProperty<Root, CGSize> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

For visual tracks, like video or subtitle tracks, this property value is the natural size of the media. For nonvisual tracks, like audio or chapter tracks, the value is [zero](../../corefoundation/cgsize/zero.md).

## See Also

### Loading visual characteristics

- [preferredTransform](preferredtransform-90jdn.md): Conforms when `Root` inherits `AVAssetTrack`. The track’s transform preference to apply to its visual content during presentation or processing.
