> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/synchronize()](https://developer.apple.com/documentation/foundation/filehandle/synchronize())

# synchronize() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.

## Declaration

```swift
func synchronize() throws
```

<a id="Discussion"></a>

## Discussion

Programs that require the file to always be in a known state should call this method. An invocation of this method doesn’t return until memory is flushed.

## See Also

### Operating on a file

- [close()](close%28%29.md): Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [truncate(atOffset:)](truncate%28atoffset_%29.md): Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

# synchronizeAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.

## Declaration

```objectivec
- (BOOL) synchronizeAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Programs that require the file to always be in a known state should call this method. An invocation of this method doesn’t return until memory is flushed.

## See Also

### Operating on a file

- [closeAndReturnError:](close%28%29.md): Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [truncateAtOffset:error:](truncate%28atoffset_%29.md): Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
