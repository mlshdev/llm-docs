> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/startsecureconnection()](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/startsecureconnection())

# startSecureConnection() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any enqueued reads and writes, and establishes a secure connection.

## Declaration

```swift
func startSecureConnection()
```

<a id="Discussion"></a>

## Discussion

Authentication callbacks are sent to the session’s delegate using the [urlSession(\_:task:didReceive:completionHandler:)](../urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md) method.

## See Also

### Starting and stopping secure connections

- [stopSecureConnection()](stopsecureconnection%28%29.md): Deprecated. Completes any enqueued reads and writes, and closes the secure connection.

# startSecureConnection (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any enqueued reads and writes, and establishes a secure connection.

## Declaration

```objectivec
- (void) startSecureConnection;
```

<a id="Discussion"></a>

## Discussion

Authentication callbacks are sent to the session’s delegate using the [URLSession:task:didReceiveChallenge:completionHandler:](../urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md) method.

## See Also

### Starting and stopping secure connections

- [stopSecureConnection](stopsecureconnection%28%29.md): Deprecated. Completes any enqueued reads and writes, and closes the secure connection.
