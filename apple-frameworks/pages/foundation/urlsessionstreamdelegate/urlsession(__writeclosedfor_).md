> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamdelegate/urlsession(_:writeclosedfor:)](https://developer.apple.com/documentation/foundation/urlsessionstreamdelegate/urlsession(_:writeclosedfor:))

# urlSession(\_:writeClosedFor:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the write side of the underlying socket has been closed.

## Declaration

```swift
optional func urlSession(_ session: URLSession, writeClosedFor streamTask: URLSessionStreamTask)
```

## Parameters

- `session`: The session containing the stream task that closed writes.
- `streamTask`: The stream task that closed writes.

<a id="Discussion"></a>

## Discussion

This method may be called even if no writes are currently in progress.

## See Also

### Handling closing events

- [urlSession(\_:readClosedFor:)](urlsession%28__readclosedfor_%29.md): Tells the delegate that the read side of the underlying socket has been closed.

# URLSession:writeClosedForStreamTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the write side of the underlying socket has been closed.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session writeClosedForStreamTask:(NSURLSessionStreamTask *) streamTask;
```

## Parameters

- `session`: The session containing the stream task that closed writes.
- `streamTask`: The stream task that closed writes.

<a id="Discussion"></a>

## Discussion

This method may be called even if no writes are currently in progress.

## See Also

### Handling closing events

- [URLSession:readClosedForStreamTask:](urlsession%28__readclosedfor_%29.md): Tells the delegate that the read side of the underlying socket has been closed.
