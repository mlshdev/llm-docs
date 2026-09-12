> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/estimateddatarate](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/estimateddatarate)

# estimatedDataRate

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The estimated data rate, in bits per second, of the media that the track references.

## Declaration

```swift
static var estimatedDataRate: AVAsyncProperty<Root, Float> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading temporal information

- [timeRange](timerange.md): Conforms when `Root` inherits `AVAssetTrack`. The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](naturaltimescale.md): Conforms when `Root` inherits `AVAssetTrack`. The natural time scale of the media that a track references.
