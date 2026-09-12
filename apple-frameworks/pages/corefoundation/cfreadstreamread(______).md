> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamread(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamread(_:_:_:))

# CFReadStreamRead(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reads data from a readable stream.

## Declaration

```swift
func CFReadStreamRead(_ stream: CFReadStream!, _ buffer: UnsafeMutablePointer<UInt8>!, _ bufferLength: CFIndex) -> CFIndex
```

## Parameters

- `stream`: The stream from which to read.
- `buffer`: The buffer into which to place the data.
- `bufferLength`: The size of `buffer` and the maximum number of bytes to read.

<a id="return-value"></a>

## Return Value

The number of bytes read; `0` if the stream has reached its end; or `-1` if either the stream is not open or an error occurs.

<a id="Discussion"></a>

## Discussion

If `stream` is in the process of opening, this function waits until it has completed. This function blocks until at least one byte is available; it does not block until `buffer` is filled. To avoid blocking, call this function only if [CFReadStreamHasBytesAvailable(\_:)](cfreadstreamhasbytesavailable%28__%29.md) returns `TRUE` or after the stream’s client (set with [CFReadStreamSetClient(\_:\_:\_:\_:)](cfreadstreamsetclient%28________%29.md)) is notified of a [hasBytesAvailable](cfstreameventtype/hasbytesavailable.md) event.

# CFReadStreamRead (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reads data from a readable stream.

## Declaration

```objectivec
extern CFIndex CFReadStreamRead(CFReadStreamRef stream, UInt8 *buffer, CFIndex bufferLength);
```

## Parameters

- `stream`: The stream from which to read.
- `buffer`: The buffer into which to place the data.
- `bufferLength`: The size of `buffer` and the maximum number of bytes to read.

<a id="return-value"></a>

## Return Value

The number of bytes read; `0` if the stream has reached its end; or `-1` if either the stream is not open or an error occurs.

<a id="Discussion"></a>

## Discussion

If `stream` is in the process of opening, this function waits until it has completed. This function blocks until at least one byte is available; it does not block until `buffer` is filled. To avoid blocking, call this function only if [CFReadStreamHasBytesAvailable](cfreadstreamhasbytesavailable%28__%29.md) returns `TRUE` or after the stream’s client (set with [CFReadStreamSetClient](cfreadstreamsetclient%28________%29.md)) is notified of a [kCFStreamEventHasBytesAvailable](cfstreameventtype/hasbytesavailable.md) event.
