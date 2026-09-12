> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/originalrequest](https://developer.apple.com/documentation/foundation/urlsessiontask/originalrequest)

# originalRequest (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The original request object passed when the task was created.

## Declaration

```swift
var originalRequest: URLRequest? { get }
```

<a id="Discussion"></a>

## Discussion

This value is typically the same as the currently active request ([currentRequest](currentrequest.md)) except when the server has responded to the initial request with a redirect to a different URL.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.

# originalRequest (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The original request object passed when the task was created.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLRequest * originalRequest;
```

<a id="Discussion"></a>

## Discussion

This value is typically the same as the currently active request ([currentRequest](currentrequest.md)) except when the server has responded to the initial request with a redirect to a different URL.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.
