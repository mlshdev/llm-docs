> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/pipe()](https://developer.apple.com/documentation/system/filedescriptor/pipe())

# pipe()

**Framework:** System  
**Kind:** Type Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Creates a unidirectional data channel, which can be used for interprocess communication.

## Declaration

```swift
static func pipe() throws -> (readEnd: FileDescriptor, writeEnd: FileDescriptor)
```

<a id="return-value"></a>

## Return Value

The pair of file descriptors.

<a id="discussion"></a>

## Discussion

The corresponding C function is `pipe`.
