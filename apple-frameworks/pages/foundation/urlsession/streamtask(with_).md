> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/streamtask(with:)](https://developer.apple.com/documentation/foundation/urlsession/streamtask(with:))

# streamTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.

> Use nw_connection_t in Network framework instead

## Declaration

```swift
func streamTask(with service: NetService) -> URLSessionStreamTask
```

## Parameters

- `service`: A [NetService](../netservice.md) object used to determine the endpoint of the TCP/IP connection. This network service is resolved before any data is read or written to the resulting stream task.

<a id="return-value"></a>

## Return Value

The new session stream task.

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding stream tasks to a session

- [streamTask(withHostName:port:)](streamtask%28withhostname_port_%29.md): Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.
- [URLSessionStreamTask](../urlsessionstreamtask.md): A URL session task that is stream-based.
- [URLSessionStreamDelegate](../urlsessionstreamdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.

# streamTaskWithNetService: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.

> Use nw_connection_t in Network framework instead

## Declaration

```objectivec
- (NSURLSessionStreamTask *) streamTaskWithNetService:(NSNetService *) service;
```

## Parameters

- `service`: A [NSNetService](../netservice.md) object used to determine the endpoint of the TCP/IP connection. This network service is resolved before any data is read or written to the resulting stream task.

<a id="return-value"></a>

## Return Value

The new session stream task.

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding stream tasks to a session

- [streamTaskWithHostName:port:](streamtask%28withhostname_port_%29.md): Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.
- [NSURLSessionStreamTask](../urlsessionstreamtask.md): A URL session task that is stream-based.
- [NSURLSessionStreamDelegate](../urlsessionstreamdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.
