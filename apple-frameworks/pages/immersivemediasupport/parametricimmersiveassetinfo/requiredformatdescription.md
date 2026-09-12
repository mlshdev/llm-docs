> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/parametricimmersiveassetinfo/requiredformatdescription](https://developer.apple.com/documentation/immersivemediasupport/parametricimmersiveassetinfo/requiredformatdescription)

# requiredFormatDescription

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A result format descriptor for overriding a mutable video track that’s used to convert the asset to parametric immersive asset. Use `replaceFormatDescription` to replace the format description on the `AVMutableMovieTrack`.

## Declaration

```swift
var requiredFormatDescription: CMFormatDescription? { get }
```
