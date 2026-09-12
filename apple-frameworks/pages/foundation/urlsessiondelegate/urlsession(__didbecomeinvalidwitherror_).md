> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondelegate/urlsession(_:didbecomeinvalidwitherror:)](https://developer.apple.com/documentation/foundation/urlsessiondelegate/urlsession(_:didbecomeinvalidwitherror:))

# urlSession(\_:didBecomeInvalidWithError:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the URL session that the session has been invalidated.

## Declaration

```swift
optional func urlSession(_ session: URLSession, didBecomeInvalidWithError error: (any Error)?)
```

## Parameters

- `session`: The session object that was invalidated.
- `error`: The error that caused invalidation, or `nil` if the invalidation was explicit.

<a id="Discussion"></a>

## Discussion

If you invalidate a session by calling its [finishTasksAndInvalidate()](../urlsession/finishtasksandinvalidate%28%29.md) method, the session waits until after the final task in the session finishes or fails before calling this delegate method. If you call the [invalidateAndCancel()](../urlsession/invalidateandcancel%28%29.md) method, the session calls this delegate method immediately.

## See Also

### Handling session life cycle changes

- [urlSessionDidFinishEvents(forBackgroundURLSession:)](urlsessiondidfinishevents%28forbackgroundurlsession_%29.md): Tells the delegate that all messages enqueued for a session have been delivered.

# URLSession:didBecomeInvalidWithError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the URL session that the session has been invalidated.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session didBecomeInvalidWithError:(NSError *) error;
```

## Parameters

- `session`: The session object that was invalidated.
- `error`: The error that caused invalidation, or `nil` if the invalidation was explicit.

<a id="Discussion"></a>

## Discussion

If you invalidate a session by calling its [finishTasksAndInvalidate](../urlsession/finishtasksandinvalidate%28%29.md) method, the session waits until after the final task in the session finishes or fails before calling this delegate method. If you call the [invalidateAndCancel](../urlsession/invalidateandcancel%28%29.md) method, the session calls this delegate method immediately.

## See Also

### Handling session life cycle changes

- [URLSessionDidFinishEventsForBackgroundURLSession:](urlsessiondidfinishevents%28forbackgroundurlsession_%29.md): Tells the delegate that all messages enqueued for a session have been delivered.
