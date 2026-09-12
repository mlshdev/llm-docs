> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamdelegate/urlsession(_:streamtask:didbecome:outputstream:)](https://developer.apple.com/documentation/foundation/urlsessionstreamdelegate/urlsession(_:streamtask:didbecome:outputstream:))

# urlSession(\_:streamTask:didBecome:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the stream task has been completed as a result of the stream task calling the [captureStreams()](../urlsessionstreamtask/capturestreams%28%29.md) method.

## Declaration

```swift
optional func urlSession(_ session: URLSession, streamTask: URLSessionStreamTask, didBecome inputStream: InputStream, outputStream: OutputStream)
```

## Parameters

- `session`: The session of the stream task that has been completed.
- `streamTask`: The stream task that has been completed.
- `inputStream`: The created input stream. This [InputStream](../inputstream.md) object is unopened.
- `outputStream`: The created output stream. This [OutputStream](../outputstream.md) object is unopened

<a id="Discussion"></a>

## Discussion

This delegate method will only be called after all enqueued reads and writes for the stream task have been completed.

# URLSession:streamTask:didBecomeInputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the stream task has been completed as a result of the stream task calling the [captureStreams](../urlsessionstreamtask/capturestreams%28%29.md) method.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session streamTask:(NSURLSessionStreamTask *) streamTask didBecomeInputStream:(NSInputStream *) inputStream outputStream:(NSOutputStream *) outputStream;
```

## Parameters

- `session`: The session of the stream task that has been completed.
- `streamTask`: The stream task that has been completed.
- `inputStream`: The created input stream. This [NSInputStream](../inputstream.md) object is unopened.
- `outputStream`: The created output stream. This [NSOutputStream](../outputstream.md) object is unopened

<a id="Discussion"></a>

## Discussion

This delegate method will only be called after all enqueued reads and writes for the stream task have been completed.
