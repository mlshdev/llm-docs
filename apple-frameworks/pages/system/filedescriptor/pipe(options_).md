> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filedescriptor/pipe(options:)

# pipe(options:)

**Framework:** System  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a unidirectional data channel, which can be used for interprocess communication.

## Declaration

```swift
static func pipe(options: FileDescriptor.PipeOptions) throws(Errno) -> (readEnd: FileDescriptor, writeEnd: FileDescriptor)
```

## Parameters

- `options`: The behavior for creating the pipe.

<a id="return-value"></a>

## Return Value

The pair of file descriptors.

<a id="discussion"></a>

## Discussion

The corresponding C function is `pipe2`.
