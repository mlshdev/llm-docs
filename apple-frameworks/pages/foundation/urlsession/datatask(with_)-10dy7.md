> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/datatask(with:)-10dy7](https://developer.apple.com/documentation/foundation/urlsession/datatask(with:)-10dy7)

# dataTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that retrieves the contents of the specified URL.

## Declaration

```swift
func dataTask(with url: URL) -> URLSessionDataTask
```

## Parameters

- `url`: The URL to be retrieved.

<a id="return-value"></a>

## Return Value

The new session data task.

## Mentioned In

- [Fetching website data into memory](../fetching-website-data-into-memory.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method. The task calls methods on the session’s delegate to provide you with the response metadata, response data, and so on.

## See Also

### Adding data tasks to a session

- [dataTask(with:completionHandler:)](datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTask(with:)](datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTask(with:completionHandler:)](datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [URLSessionDataTask](../urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
- [URLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# dataTaskWithURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that retrieves the contents of the specified URL.

## Declaration

```objectivec
- (NSURLSessionDataTask *) dataTaskWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to be retrieved.

<a id="return-value"></a>

## Return Value

The new session data task.

## Mentioned In

- [Fetching website data into memory](../fetching-website-data-into-memory.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method. The task calls methods on the session’s delegate to provide you with the response metadata, response data, and so on.

## See Also

### Adding data tasks to a session

- [dataTaskWithURL:completionHandler:](datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTaskWithRequest:](datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTaskWithRequest:completionHandler:](datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [NSURLSessionDataTask](../urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
- [NSURLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
