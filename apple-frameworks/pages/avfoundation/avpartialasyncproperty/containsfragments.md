> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/containsfragments](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/containsfragments)

# containsFragments

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether at least one movie fragment extends the asset.

## Declaration

```swift
static var containsFragments: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

For QuickTime movie files and MPEG-4 files, the value of this property is [true](https://developer.apple.com/documentation/swift/true) if [canContainFragments](../avasset/cancontainfragments.md) is [true](https://developer.apple.com/documentation/swift/true) and at least one `moof` box is present after the `moov` box.

## See Also

### Loading fragment support

- [canContainFragments](cancontainfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extend the asset by fragments.
- [overallDurationHint](overalldurationhint.md): Conforms when `Root` inherits `AVAsset`. A hint to the total duration of fragments that currently exist or may exist in the future.
