> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamdelegate/urlsession(_:readclosedfor:)](https://developer.apple.com/documentation/foundation/urlsessionstreamdelegate/urlsession(_:readclosedfor:))

# urlSession(\_:readClosedFor:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the read side of the underlying socket has been closed.

## Declaration

```swift
optional func urlSession(_ session: URLSession, readClosedFor streamTask: URLSessionStreamTask)
```

## Parameters

- `session`: The session containing the stream task that closed reads.
- `streamTask`: The stream task that closed reads.

<a id="Discussion"></a>

## Discussion

This method may be called even if no reads are currently in progress. This method does not indicate that the stream reached end-of-file (EOF), such that no more data can be read.

## See Also

### Handling closing events

- [urlSession(\_:writeClosedFor:)](urlsession%28__writeclosedfor_%29.md): Tells the delegate that the write side of the underlying socket has been closed.

# URLSession:readClosedForStreamTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the read side of the underlying socket has been closed.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session readClosedForStreamTask:(NSURLSessionStreamTask *) streamTask;
```

## Parameters

- `session`: The session containing the stream task that closed reads.
- `streamTask`: The stream task that closed reads.

<a id="Discussion"></a>

## Discussion

This method may be called even if no reads are currently in progress. This method does not indicate that the stream reached end-of-file (EOF), such that no more data can be read.

## See Also

### Handling closing events

- [URLSession:writeClosedForStreamTask:](urlsession%28__writeclosedfor_%29.md): Tells the delegate that the write side of the underlying socket has been closed.
