> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamerror](https://developer.apple.com/documentation/screencapturekit/scstreamerror)

# SCStreamError

**Framework:** ScreenCaptureKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance representing a ScreenCaptureKit framework error.

## Declaration

```swift
struct SCStreamError
```

<a id="overview"></a>

## Overview

> **Important**

>  When a user cancels a stream, the system calls an observer’s [stream(\_:didStopWithError:)](scstreamdelegate/stream%28__didstopwitherror_%29.md) method with [SCStreamError.Code.userStopped](scstreamerror/code/userstopped.md). Rather than treating this event as an error, handle it as an intentional user request.

## Topics

### Error inspection

- [Error Constants](error-constants.md): Error code constants for framework operations.
- [SCStreamError.Code](scstreamerror/code.md): Codes for user cancellation events and errors that can occur in ScreenCaptureKit.
- [errorDomain](scstreamerror/errordomain.md)

### Type Properties

- [insufficientStorage](scstreamerror/insufficientstorage.md)
- [missingBackgroundMode](scstreamerror/missingbackgroundmode.md)
- [notSupported](scstreamerror/notsupported.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Stream errors (Swift)

- [SCStreamErrorDomain](scstreamerrordomain.md): A string representation of the error domain.
