> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/caninit(with:)-18gbo](https://developer.apple.com/documentation/foundation/urlprotocol/caninit(with:)-18gbo)

# canInit(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the protocol subclass can handle the specified task.

## Declaration

```swift
class func canInit(with task: URLSessionTask) -> Bool
```

## Parameters

- `task`: A URL session task containing the request to be handled.

<a id="Discussion"></a>

## Discussion

A subclass should inspect the task’s request and determine whether or not the implementation can perform a load with that task.

This is an abstract method and subclasses must provide an implementation.

## See Also

### Determining If a subclass can handle a request

- [canInit(with:)](caninit%28with_%29-76brg.md): Determines whether the protocol subclass can handle the specified request.

# canInitWithTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the protocol subclass can handle the specified task.

## Declaration

```objectivec
+ (BOOL) canInitWithTask:(NSURLSessionTask *) task;
```

## Parameters

- `task`: A URL session task containing the request to be handled.

<a id="Discussion"></a>

## Discussion

A subclass should inspect the task’s request and determine whether or not the implementation can perform a load with that task.

This is an abstract method and subclasses must provide an implementation.

## See Also

### Determining If a subclass can handle a request

- [canInitWithRequest:](caninit%28with_%29-76brg.md): Determines whether the protocol subclass can handle the specified request.
