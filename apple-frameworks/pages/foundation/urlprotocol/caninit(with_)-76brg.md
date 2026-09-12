> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/caninit(with:)-76brg](https://developer.apple.com/documentation/foundation/urlprotocol/caninit(with:)-76brg)

# canInit(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the protocol subclass can handle the specified request.

## Declaration

```swift
class func canInit(with request: URLRequest) -> Bool
```

## Parameters

- `request`: The request to be handled.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the protocol subclass can handle `request`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A subclass should inspect `request` and determine whether or not the implementation can perform a load with that request.

This is an abstract method and subclasses must provide an implementation.

## See Also

### Determining If a subclass can handle a request

- [canInit(with:)](caninit%28with_%29-18gbo.md): Determines whether the protocol subclass can handle the specified task.

# canInitWithRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the protocol subclass can handle the specified request.

## Declaration

```objectivec
+ (BOOL) canInitWithRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: The request to be handled.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the protocol subclass can handle `request`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A subclass should inspect `request` and determine whether or not the implementation can perform a load with that request.

This is an abstract method and subclasses must provide an implementation.

## See Also

### Determining If a subclass can handle a request

- [canInitWithTask:](caninit%28with_%29-18gbo.md): Determines whether the protocol subclass can handle the specified task.
