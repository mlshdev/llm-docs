> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfreadstreamclientcallback

# CFReadStreamClientCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when certain types of activity takes place on a readable stream.

## Declaration

```swift
typealias CFReadStreamClientCallBack = (CFReadStream?, CFStreamEventType, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `stream`: The stream that experienced the event `eventType`.
- `eventType`: The event that caused the callback to be called. The possible events are listed in [CFStreamEventType](cfstreameventtype.md).
- `clientCallBackInfo`: The `info` member of the [CFStreamClientContext](cfstreamclientcontext.md) structure that was used when setting the client for `stream`.

<a id="Discussion"></a>

## Discussion

This callback is called only for the events requested when setting the client with [CFReadStreamSetClient(\_:\_:\_:\_:)](cfreadstreamsetclient%28________%29.md).

# CFReadStreamClientCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when certain types of activity takes place on a readable stream.

## Declaration

```objectivec
typedef void (*)(struct __CFReadStream *, enum CFStreamEventType, void *) CFReadStreamClientCallBack;
```

## Parameters

- `stream`: The stream that experienced the event `eventType`.
- `eventType`: The event that caused the callback to be called. The possible events are listed in [CFStreamEventType](cfstreameventtype.md).
- `clientCallBackInfo`: The `info` member of the [CFStreamClientContext](cfstreamclientcontext.md) structure that was used when setting the client for `stream`.

<a id="Discussion"></a>

## Discussion

This callback is called only for the events requested when setting the client with [CFReadStreamSetClient](cfreadstreamsetclient%28________%29.md).
