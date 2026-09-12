> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/cancontainfragments](https://developer.apple.com/documentation/avfoundation/avmutablemovie/cancontainfragments)

# canContainFragments

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates whether you can extend the asset by fragments.

## Declaration

```swift
var canContainFragments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if an `mvex` box is present in the `moov` box. For those types, the `mvex` box signals the possible presence of later `moof` boxes.

## See Also

### Determining fragment support

- [containsFragments](containsfragments.md): A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](overalldurationhint.md): The total duration of fragments that currently exist, or may exist in the future.
