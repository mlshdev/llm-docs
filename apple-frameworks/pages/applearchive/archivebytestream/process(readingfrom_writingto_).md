> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/process(readingfrom:writingto:)](https://developer.apple.com/documentation/applearchive/archivebytestream/process(readingfrom:writingto:))

# process(readingFrom:writingTo:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Processes data between two byte streams.

## Declaration

```swift
static func process(readingFrom input: ArchiveByteStream, writingTo output: ArchiveByteStream) throws -> Int64
```

## Parameters

- `input`: The input stream.
- `output`: The output stream.

<a id="return-value"></a>

## Return Value

The number of processed bytes.

<a id="Discussion"></a>

## Discussion

This function reads data from `input` and writes it to `output` until it reaches end-of-file (EOF).
