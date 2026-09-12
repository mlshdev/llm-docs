> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/error](https://developer.apple.com/documentation/foundation/urlsessiontask/error)

# error (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error object that indicates why the task failed.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the task is still active or if the transfer completed successfully.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.

# error (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error object that indicates why the task failed.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the task is still active or if the transfer completed successfully.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
