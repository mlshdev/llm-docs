> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/cancontainfragments](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/cancontainfragments)

# canContainFragments

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether you can extend the asset by fragments.

## Declaration

```swift
static var canContainFragments: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if an `mvex` box is present in the `moov` box. For those types, the `mvex` box signals the possible presence of later `moof` boxes.

## See Also

### Loading fragment support

- [containsFragments](containsfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](overalldurationhint.md): Conforms when `Root` inherits `AVAsset`. A hint to the total duration of fragments that currently exist or may exist in the future.
