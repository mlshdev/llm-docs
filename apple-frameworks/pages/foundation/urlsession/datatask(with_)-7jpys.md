> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/datatask(with:)-7jpys](https://developer.apple.com/documentation/foundation/urlsession/datatask(with:)-7jpys)

# dataTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that retrieves the contents of a URL based on the specified URL request object.

## Declaration

```swift
func dataTask(with request: URLRequest) -> URLSessionDataTask
```

## Parameters

- `request`: A URL request object that provides request-specific information such as the URL, cache policy, request type, and body data or body stream.

<a id="return-value"></a>

## Return Value

The new session data task.

<a id="Discussion"></a>

## Discussion

By creating a task based on a request object, you can tune various aspects of the task’s behavior, including the cache policy and timeout interval.

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding data tasks to a session

- [dataTask(with:)](datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTask(with:completionHandler:)](datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTask(with:completionHandler:)](datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [URLSessionDataTask](../urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
- [URLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# dataTaskWithRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that retrieves the contents of a URL based on the specified URL request object.

## Declaration

```objectivec
- (NSURLSessionDataTask *) dataTaskWithRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: A URL request object that provides request-specific information such as the URL, cache policy, request type, and body data or body stream.

<a id="return-value"></a>

## Return Value

The new session data task.

<a id="Discussion"></a>

## Discussion

By creating a task based on a request object, you can tune various aspects of the task’s behavior, including the cache policy and timeout interval.

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

## See Also

### Adding data tasks to a session

- [dataTaskWithURL:](datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTaskWithURL:completionHandler:](datatask%28with_completionhandler_%29-52wk8.md): Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.
- [dataTaskWithRequest:completionHandler:](datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [NSURLSessionDataTask](../urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
- [NSURLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
