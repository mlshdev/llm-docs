> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/taskdescription](https://developer.apple.com/documentation/foundation/urlsessiontask/taskdescription)

# taskDescription (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An app-provided string value for the current task.

## Declaration

```swift
var taskDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system doesn’t interpret this value; use it for whatever purpose you see fit. For example, you could store a description of the task for debugging purposes, or a key to track the task in your own data structures.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.

# taskDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An app-provided string value for the current task.

## Declaration

```objectivec
@property (copy, nullable) NSString * taskDescription;
```

<a id="Discussion"></a>

## Discussion

The system doesn’t interpret this value; use it for whatever purpose you see fit. For example, you could store a description of the task for debugging purposes, or a key to track the task in your own data structures.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [response](response.md): The server’s response to the currently active request.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.
