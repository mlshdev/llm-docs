> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/seek(tooffset:)](https://developer.apple.com/documentation/foundation/filehandle/seek(tooffset:))

# seek(toOffset:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Moves the file pointer to the specified offset within the file.

## Declaration

```swift
func seek(toOffset offset: UInt64) throws
```

## Parameters

- `offset`: The offset to seek to.

<a id="discussion"></a>

## Discussion

> **Throws**

> Throws an error if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if any other error occurs while seeking.

## See Also

### Seeking within a file

- [offset()](offset%28%29.md): Gets the position of the file pointer within the file.
- [seekToEnd()](seektoend%28%29.md): Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.

# seekToOffset:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Moves the file pointer to the specified offset within the file.

## Declaration

```objectivec
- (BOOL) seekToOffset:(unsigned long long) offset error:(NSError **) error;
```

## Parameters

- `offset`: The offset to seek to.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if any other error occurs while seeking.

<a id="discussion"></a>

## Discussion

> **Throws**

> Throws an error if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if any other error occurs while seeking.

## See Also

### Seeking within a file

- [getOffset:error:](../nsfilehandle/getoffset_error_.md): Get the current position of the file pointer within the file.
- [seekToEndReturningOffset:error:](../nsfilehandle/seektoendreturningoffset_error_.md): Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
