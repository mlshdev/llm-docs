> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/ismultithreaded()](https://developer.apple.com/documentation/foundation/thread/ismultithreaded())

# isMultiThreaded() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the application is multithreaded.

## Declaration

```swift
class func isMultiThreaded() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application is multithreaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An application is considered multithreaded if a thread was ever detached from the main thread using either [detachNewThreadSelector(\_:toTarget:with:)](detachnewthreadselector%28__totarget_with_%29.md) or [start()](start%28%29.md). If you detached a thread in your application using a non-Cocoa API, such as the POSIX or Multiprocessing Services APIs, this method could still return [false](https://developer.apple.com/documentation/swift/false). The detached thread does not have to be currently running for the application to be considered multithreaded—this method only indicates whether a single thread has been spawned.

## See Also

### Querying the Environment

- [current](current.md): Returns the thread object representing the current thread of execution.
- [callStackReturnAddresses](callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
- [callStackSymbols](callstacksymbols.md): Returns an array containing the call stack symbols.

# isMultiThreaded (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the application is multithreaded.

## Declaration

```objectivec
+ (BOOL) isMultiThreaded;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application is multithreaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An application is considered multithreaded if a thread was ever detached from the main thread using either [detachNewThreadSelector:toTarget:withObject:](detachnewthreadselector%28__totarget_with_%29.md) or [start](start%28%29.md). If you detached a thread in your application using a non-Cocoa API, such as the POSIX or Multiprocessing Services APIs, this method could still return [false](https://developer.apple.com/documentation/swift/false). The detached thread does not have to be currently running for the application to be considered multithreaded—this method only indicates whether a single thread has been spawned.

## See Also

### Querying the Environment

- [currentThread](current.md): Returns the thread object representing the current thread of execution.
- [callStackReturnAddresses](callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
- [callStackSymbols](callstacksymbols.md): Returns an array containing the call stack symbols.
