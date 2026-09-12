> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhoststream](https://developer.apple.com/documentation/iousbhost/iousbhoststream)

# IOUSBHostStream (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class responsible for sending stream data for function drivers.

## Declaration

```swift
class IOUSBHostStream
```

<a id="overview"></a>

## Overview

The [copyStream(withStreamID:)](iousbhostpipe/copystream%28withstreamid_%29.md) method creates stream objects.

## Topics

### Sending I/O

- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequest(with:completionHandler:)](iousbhoststream/enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [abort(with:)](iousbhoststream/abort%28with_%29.md): Aborts pending input/output requests.
- [abort()](iousbhoststream/abort%28%29.md): Aborts pending input/output requests synchronously.

### Getting the Pipe Object

- [hostPipe](iousbhoststream/hostpipe.md): The pipe that creates the stream.

### Getting the Stream ID

- [streamID](iousbhoststream/streamid.md): The ID for the stream.

## Relationships

### Inherits From

- [IOUSBHostIOSource](iousbhostiosource.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Function Drivers

- [IOUSBHostInterface](iousbhostinterface.md): The class for accessing USB-related services.
- [IOUSBHostPipe](iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.

# IOUSBHostStream (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class responsible for sending stream data for function drivers.

## Declaration

```objectivec
@interface IOUSBHostStream : IOUSBHostIOSource
```

<a id="overview"></a>

## Overview

The [copyStreamWithStreamID:error:](iousbhostpipe/copystream%28withstreamid_%29.md) method creates stream objects.

## Topics

### Sending I/O

- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequestWithData:error:completionHandler:](iousbhoststream/enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [sendIORequestWithData:bytesTransferred:error:](iousbhoststream/sendiorequestwithdata_bytestransferred_error_.md): Sends an input/output request on the stream.
- [abortWithOption:error:](iousbhoststream/abort%28with_%29.md): Aborts pending input/output requests.
- [abortWithError:](iousbhoststream/abort%28%29.md): Aborts pending input/output requests synchronously.

### Getting the Pipe Object

- [hostPipe](iousbhoststream/hostpipe.md): The pipe that creates the stream.

### Getting the Stream ID

- [streamID](iousbhoststream/streamid.md): The ID for the stream.

## Relationships

### Inherits From

- [IOUSBHostIOSource](iousbhostiosource.md)

## See Also

### Function Drivers

- [IOUSBHostInterface](iousbhostinterface.md): The class for accessing USB-related services.
- [IOUSBHostPipe](iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
