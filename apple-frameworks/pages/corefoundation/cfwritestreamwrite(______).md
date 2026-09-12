> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamwrite(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamwrite(_:_:_:))

# CFWriteStreamWrite(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Writes data to a writable stream.

## Declaration

```swift
func CFWriteStreamWrite(_ stream: CFWriteStream!, _ buffer: UnsafePointer<UInt8>!, _ bufferLength: CFIndex) -> CFIndex
```

## Parameters

- `stream`: The stream to which to write.
- `buffer`: The buffer holding the data to write.
- `bufferLength`: The number of bytes from `buffer` to write.

<a id="return-value"></a>

## Return Value

The number of bytes successfully written, `0` if the stream has been filled to capacity (for fixed-length streams), or `-1` if either the stream is not open or an error occurs.

<a id="Discussion"></a>

## Discussion

If `stream` is in the process of opening, this function waits until it has completed. If the stream is not full, this call blocks until at least one byte is written; it does not block until all the bytes in `buffer` is written. To avoid blocking, call this function only if [CFWriteStreamCanAcceptBytes(\_:)](cfwritestreamcanacceptbytes%28__%29.md) returns `true` or after the stream’s client (set with [CFWriteStreamSetClient(\_:\_:\_:\_:)](cfwritestreamsetclient%28________%29.md)) is notified of a [canAcceptBytes](cfstreameventtype/canacceptbytes.md) event.

# CFWriteStreamWrite (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Writes data to a writable stream.

## Declaration

```objectivec
extern CFIndex CFWriteStreamWrite(CFWriteStreamRef stream, const UInt8 *buffer, CFIndex bufferLength);
```

## Parameters

- `stream`: The stream to which to write.
- `buffer`: The buffer holding the data to write.
- `bufferLength`: The number of bytes from `buffer` to write.

<a id="return-value"></a>

## Return Value

The number of bytes successfully written, `0` if the stream has been filled to capacity (for fixed-length streams), or `-1` if either the stream is not open or an error occurs.

<a id="Discussion"></a>

## Discussion

If `stream` is in the process of opening, this function waits until it has completed. If the stream is not full, this call blocks until at least one byte is written; it does not block until all the bytes in `buffer` is written. To avoid blocking, call this function only if [CFWriteStreamCanAcceptBytes](cfwritestreamcanacceptbytes%28__%29.md) returns `true` or after the stream’s client (set with [CFWriteStreamSetClient](cfwritestreamsetclient%28________%29.md)) is notified of a [kCFStreamEventCanAcceptBytes](cfstreameventtype/canacceptbytes.md) event.
