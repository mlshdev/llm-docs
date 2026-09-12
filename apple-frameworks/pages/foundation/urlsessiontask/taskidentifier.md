> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/taskidentifier](https://developer.apple.com/documentation/foundation/urlsessiontask/taskidentifier)

# taskIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An identifier uniquely identifying the task within a given session.

## Declaration

```swift
var taskIdentifier: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value is unique only within the context of a single session; tasks in other sessions may have the same [taskIdentifier](taskidentifier.md) value.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [error](error.md): An error object that indicates why the task failed.

# taskIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An identifier uniquely identifying the task within a given session.

## Declaration

```objectivec
@property (readonly) NSUInteger taskIdentifier;
```

<a id="Discussion"></a>

## Discussion

This value is unique only within the context of a single session; tasks in other sessions may have the same [taskIdentifier](taskidentifier.md) value.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [error](error.md): An error object that indicates why the task failed.
