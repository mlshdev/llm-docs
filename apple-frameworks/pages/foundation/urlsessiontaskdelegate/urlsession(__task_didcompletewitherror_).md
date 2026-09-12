> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:didcompletewitherror:)](https://developer.apple.com/documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:didcompletewitherror:))

# urlSession(\_:task:didCompleteWithError:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the task finished transferring data.

## Declaration

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, didCompleteWithError error: (any Error)?)
```

## Parameters

- `session`: The session containing the task that has finished transferring data.
- `task`: The task that has finished transferring data.
- `error`: If an error occurred, an error object indicating how the transfer failed, otherwise `NULL`.

## Mentioned In

- [Pausing and resuming downloads](../pausing-and-resuming-downloads.md)
- [Downloading files from websites](../downloading-files-from-websites.md)
- [Fetching website data into memory](../fetching-website-data-into-memory.md)
- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

<a id="Discussion"></a>

## Discussion

The only errors your delegate receives through the `error` parameter are client-side errors, such as being unable to resolve the hostname or connect to the host. To check for server-side errors, inspect the [response](../urlsessiontask/response.md) property of the `task` parameter received by this callback.

# URLSession:task:didCompleteWithError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the task finished transferring data.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session task:(NSURLSessionTask *) task didCompleteWithError:(NSError *) error;
```

## Parameters

- `session`: The session containing the task that has finished transferring data.
- `task`: The task that has finished transferring data.
- `error`: If an error occurred, an error object indicating how the transfer failed, otherwise `NULL`.

## Mentioned In

- [Pausing and resuming downloads](../pausing-and-resuming-downloads.md)
- [Downloading files from websites](../downloading-files-from-websites.md)
- [Fetching website data into memory](../fetching-website-data-into-memory.md)
- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

<a id="Discussion"></a>

## Discussion

The only errors your delegate receives through the `error` parameter are client-side errors, such as being unable to resolve the hostname or connect to the host. To check for server-side errors, inspect the [response](../urlsessiontask/response.md) property of the `task` parameter received by this callback.
