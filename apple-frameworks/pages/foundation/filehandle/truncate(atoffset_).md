> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/truncate(atoffset:)](https://developer.apple.com/documentation/foundation/filehandle/truncate(atoffset:))

# truncate(atOffset:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

## Declaration

```swift
func truncate(atOffset offset: UInt64) throws
```

## Parameters

- `offset`: The offset within the file that marks the new end of the file.

<a id="Discussion"></a>

## Discussion

If the file is extended (if `offset` is beyond the current end of file), the added characters are null bytes.

## See Also

### Operating on a file

- [close()](close%28%29.md): Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronize()](synchronize%28%29.md): Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.

# truncateAtOffset:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

## Declaration

```objectivec
- (BOOL) truncateAtOffset:(unsigned long long) offset error:(NSError **) error;
```

## Parameters

- `offset`: The offset within the file that marks the new end of the file.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

If the file is extended (if `offset` is beyond the current end of file), the added characters are null bytes.

## See Also

### Operating on a file

- [closeAndReturnError:](close%28%29.md): Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeAndReturnError:](synchronize%28%29.md): Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.
