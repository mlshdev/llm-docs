> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readcompletionmessage/init(dataitem:)](https://developer.apple.com/documentation/foundation/filehandle/readcompletionmessage/init(dataitem:))

# init(dataItem:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a message that indicates a file handle read data.

## Declaration

```swift
init(dataItem: Result<Data, POSIXError>)
```

## Parameters

- `dataItem`: A result instance that contains either the data read or an error.
