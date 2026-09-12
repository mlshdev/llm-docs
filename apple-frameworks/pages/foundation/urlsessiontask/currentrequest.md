> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/currentrequest](https://developer.apple.com/documentation/foundation/urlsessiontask/currentrequest)

# currentRequest (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL request object currently being handled by the task.

## Declaration

```swift
var currentRequest: URLRequest? { get }
```

<a id="Discussion"></a>

## Discussion

This value is typically the same as the initial request ([originalRequest](originalrequest.md)) except when the server has responded to the initial request with a redirect to a different URL.

## See Also

### Obtaining general task information

- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.

# currentRequest (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL request object currently being handled by the task.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLRequest * currentRequest;
```

<a id="Discussion"></a>

## Discussion

This value is typically the same as the initial request ([originalRequest](originalrequest.md)) except when the server has responded to the initial request with a redirect to a different URL.

## See Also

### Obtaining general task information

- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.
