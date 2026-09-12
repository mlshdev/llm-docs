> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/containsfragments](https://developer.apple.com/documentation/avfoundation/avmutablemovie/containsfragments)

# containsFragments

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates whether at least one movie fragment extends the asset.

## Declaration

```swift
var containsFragments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if [canContainFragments](../avasset/cancontainfragments.md) is [true](https://developer.apple.com/documentation/swift/true) and at least one `moof` box is present after the `moov` box.

## See Also

### Determining fragment support

- [canContainFragments](cancontainfragments.md): A Boolean value that indicates whether you can extend the asset by fragments.
- [overallDurationHint](overalldurationhint.md): The total duration of fragments that currently exist, or may exist in the future.
