> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcomposition/trackgroups

# trackGroups

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The track groups an asset contains.

## Declaration

```swift
var trackGroups: [AVAssetTrackGroup] { get }
```

<a id="Discussion"></a>

## Discussion

This value is an empty array if the composition has no track groups.
