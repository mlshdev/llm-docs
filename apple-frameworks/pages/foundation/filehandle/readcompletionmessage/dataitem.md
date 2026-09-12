> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readcompletionmessage/dataitem](https://developer.apple.com/documentation/foundation/filehandle/readcompletionmessage/dataitem)

# dataItem

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A result instance containing either the data read from the file or connection, or else an error.

## Declaration

```swift
var dataItem: Result<Data, POSIXError>
```
