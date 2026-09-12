> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/streamtask(withhostname:port:)](https://developer.apple.com/documentation/foundation/urlsession/streamtask(withhostname:port:))

# streamTask(withHostName:port:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.

## Declaration

```swift
func streamTask(withHostName hostname: String, port: Int) -> URLSessionStreamTask
```

## Parameters

- `hostname`: The hostname of the connection endpoint.
- `port`: The port of the connection endpoint.

<a id="return-value"></a>

## Return Value

The new session stream task.

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding stream tasks to a session

- [streamTask(with:)](streamtask%28with_%29.md): Deprecated. Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.
- [URLSessionStreamTask](../urlsessionstreamtask.md): A URL session task that is stream-based.
- [URLSessionStreamDelegate](../urlsessionstreamdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.

# streamTaskWithHostName:port: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.

## Declaration

```objectivec
- (NSURLSessionStreamTask *) streamTaskWithHostName:(NSString *) hostname port:(NSInteger) port;
```

## Parameters

- `hostname`: The hostname of the connection endpoint.
- `port`: The port of the connection endpoint.

<a id="return-value"></a>

## Return Value

The new session stream task.

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding stream tasks to a session

- [streamTaskWithNetService:](streamtask%28with_%29.md): Deprecated. Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.
- [NSURLSessionStreamTask](../urlsessionstreamtask.md): A URL session task that is stream-based.
- [NSURLSessionStreamDelegate](../urlsessionstreamdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.
