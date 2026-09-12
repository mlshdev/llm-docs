> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/overalldurationhint](https://developer.apple.com/documentation/avfoundation/avcomposition/overalldurationhint)

# overallDurationHint

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

The total duration of fragments that currently exist, or may exist in the future.

## Declaration

```swift
var overallDurationHint: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the asset retrieves this value from the `mehd` box of the `mvex` box, if present. If no total fragment duration hint is available, the value of this property is [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Determining fragment support

- [canContainFragments](cancontainfragments.md): A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](containsfragments.md): A Boolean value that indicates whether at least one movie fragment extends the asset.
