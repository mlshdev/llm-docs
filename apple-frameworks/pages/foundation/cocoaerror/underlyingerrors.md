> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cocoaerror/underlyingerrors](https://developer.apple.com/documentation/foundation/cocoaerror/underlyingerrors)

# underlyingErrors

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A list of underlying errors, if any. It includes the values of both NSUnderlyingErrorKey and NSMultipleUnderlyingErrorsKey. If there are no underlying errors, returns an empty array.

## Declaration

```swift
var underlyingErrors: [any Error] { get }
```
