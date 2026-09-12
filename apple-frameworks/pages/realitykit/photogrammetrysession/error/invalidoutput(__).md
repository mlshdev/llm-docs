> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/error/invalidoutput(_:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/error/invalidoutput(_:))

# PhotogrammetrySession.Error.invalidOutput(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An error that represents an invalid output location.

## Declaration

```swift
case invalidOutput(URL)
```

<a id="discussion"></a>

## Discussion

This error occurs in two cases:

1. The URL points to a directory that is not empty.
2. The URL points to a file ending in ‘.usdz’ that already exists.
