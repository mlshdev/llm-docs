> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/multipasscontroller/passdescriptions](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/multipasscontroller/passdescriptions)

# passDescriptions

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An async sequence of pass descriptions to iterate over if multi-pass is supported. This property is nil when multi-pass is not supported.

## Declaration

```swift
var passDescriptions: (some AsyncSequence<AVAssetWriterInputPassDescription, Never>)? { get }
```
