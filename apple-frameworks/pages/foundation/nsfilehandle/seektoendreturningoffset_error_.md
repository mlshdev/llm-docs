> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilehandle/seektoendreturningoffset:error:](https://developer.apple.com/documentation/foundation/nsfilehandle/seektoendreturningoffset:error:)

# seekToEndReturningOffset:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.

## Declaration

```objectivec
- (BOOL) seekToEndReturningOffset:(unsigned long long *) offsetInFile error:(NSError **) error;
```

## Parameters

- `offsetInFile`: When the return value is [true](https://developer.apple.com/documentation/swift/true), this provides the file pointer’s offset at the end of the file. This should therefore equal to the size of the file.
- `error`: When the return value is [false](https://developer.apple.com/documentation/swift/false), this provides an [NSError](../nserror.md) indicating why the operation failed.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) when there was an error. Otherwise, returns  [true](https://developer.apple.com/documentation/swift/true) and sets the `offsetInFile` parameter’s pointee to the current position of the file pointer within the file.

<a id="Discussion"></a>

## Discussion

Returns [false](https://developer.apple.com/documentation/swift/false) if called on a file handle representing a pipe or socket, or if the file descriptor is closed.

## See Also

### Seeking within a file

- [getOffset:error:](getoffset_error_.md): Get the current position of the file pointer within the file.
- [seekToOffset:error:](../filehandle/seek%28tooffset_%29.md): Moves the file pointer to the specified offset within the file.
