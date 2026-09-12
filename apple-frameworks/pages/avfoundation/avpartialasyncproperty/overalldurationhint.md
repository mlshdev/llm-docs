> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/overalldurationhint](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/overalldurationhint)

# overallDurationHint

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A hint to the total duration of fragments that currently exist or may exist in the future.

## Declaration

```swift
static var overallDurationHint: AVAsyncProperty<Root, CMTime> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

For QuickTime movie files and MPEG-4 files, the system obtains the value of this property from the `mehd` box of the `mvex` box, if present. If no total fragment duration hint is available, the value of this property is [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Loading fragment support

- [canContainFragments](cancontainfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](containsfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether at least one movie fragment extends the asset.
