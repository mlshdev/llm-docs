> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamclientcallback](https://developer.apple.com/documentation/corefoundation/cfwritestreamclientcallback)

# CFWriteStreamClientCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when certain types of activity takes place on a writable stream.

## Declaration

```swift
typealias CFWriteStreamClientCallBack = (CFWriteStream?, CFStreamEventType, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `stream`: The stream that experienced the event `eventType`.
- `eventType`: The event that caused the callback to be called. The possible events are listed in [CFStreamEventType](cfstreameventtype.md).
- `clientCallBackInfo`: The `info` member of the [CFStreamClientContext](cfstreamclientcontext.md) structure that was used when setting the client for `stream`.

<a id="Discussion"></a>

## Discussion

This callback is called only for the events requested when setting the client with [CFWriteStreamSetClient(\_:\_:\_:\_:)](cfwritestreamsetclient%28________%29.md).

# CFWriteStreamClientCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when certain types of activity takes place on a writable stream.

## Declaration

```objectivec
typedef void (*)(struct __CFWriteStream *, enum CFStreamEventType, void *) CFWriteStreamClientCallBack;
```

## Parameters

- `stream`: The stream that experienced the event `eventType`.
- `eventType`: The event that caused the callback to be called. The possible events are listed in [CFStreamEventType](cfstreameventtype.md).
- `clientCallBackInfo`: The `info` member of the [CFStreamClientContext](cfstreamclientcontext.md) structure that was used when setting the client for `stream`.

<a id="Discussion"></a>

## Discussion

This callback is called only for the events requested when setting the client with [CFWriteStreamSetClient](cfwritestreamsetclient%28________%29.md).
