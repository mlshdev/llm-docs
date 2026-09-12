> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/response](https://developer.apple.com/documentation/foundation/urlsessiontask/response)

# response (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The server’s response to the currently active request.

## Declaration

```swift
@NSCopying var response: URLResponse? { get }
```

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)

<a id="Discussion"></a>

## Discussion

This object provides information about the request as provided by the server. This information always includes the original URL. It may also include an expected length, MIME type information, encoding information, a suggested filename, or a combination of these.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.

# response (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The server’s response to the currently active request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLResponse * response;
```

## Mentioned In

- [Downloading files from websites](../downloading-files-from-websites.md)

<a id="Discussion"></a>

## Discussion

This object provides information about the request as provided by the server. This information always includes the original URL. It may also include an expected length, MIME type information, encoding information, a suggested filename, or a combination of these.

## See Also

### Obtaining general task information

- [currentRequest](currentrequest.md): The URL request object currently being handled by the task.
- [originalRequest](originalrequest.md): The original request object passed when the task was created.
- [taskDescription](taskdescription.md): An app-provided string value for the current task.
- [taskIdentifier](taskidentifier.md): An identifier uniquely identifying the task within a given session.
- [error](error.md): An error object that indicates why the task failed.
