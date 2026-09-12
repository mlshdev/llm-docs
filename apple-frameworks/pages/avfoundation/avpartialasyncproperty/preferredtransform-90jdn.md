> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/preferredtransform-90jdn](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/preferredtransform-90jdn)

# preferredTransform

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The track’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```swift
static var preferredTransform: AVAsyncProperty<Root, CGAffineTransform> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading visual characteristics

- [naturalSize](naturalsize.md): Conforms when `Root` inherits `AVAssetTrack`. The natural dimensions of the media data that the track references.
