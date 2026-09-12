> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/current](https://developer.apple.com/documentation/foundation/thread/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the thread object representing the current thread of execution.

## Declaration

```swift
class var current: Thread { get }
```

<a id="return-value"></a>

## Return Value

A thread object representing the current thread of execution.

## See Also

### Related Documentation

- [detachNewThreadSelector(\_:toTarget:with:)](detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.

### Querying the Environment

- [isMultiThreaded()](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [callStackReturnAddresses](callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
- [callStackSymbols](callstacksymbols.md): Returns an array containing the call stack symbols.

# currentThread (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the thread object representing the current thread of execution.

## Declaration

```objectivec
@property (class, strong, readonly) NSThread * currentThread;
```

<a id="return-value"></a>

## Return Value

A thread object representing the current thread of execution.

## See Also

### Related Documentation

- [detachNewThreadSelector:toTarget:withObject:](detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.

### Querying the Environment

- [isMultiThreaded](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [callStackReturnAddresses](callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
- [callStackSymbols](callstacksymbols.md): Returns an array containing the call stack symbols.
