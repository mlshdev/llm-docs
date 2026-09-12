> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopgetcurrent()](https://developer.apple.com/documentation/corefoundation/cfrunloopgetcurrent())

# CFRunLoopGetCurrent() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the CFRunLoop object for the current thread.

## Declaration

```swift
func CFRunLoopGetCurrent() -> CFRunLoop!
```

<a id="return-value"></a>

## Return Value

Current thread’s run loop. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Each thread has exactly one run loop associated with it.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091)

### Getting a Run Loop

- [CFRunLoopGetMain()](cfrunloopgetmain%28%29.md): Returns the main CFRunLoop object.

# CFRunLoopGetCurrent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the CFRunLoop object for the current thread.

## Declaration

```objectivec
extern CFRunLoopRefCFRunLoopGetCurrent();
```

<a id="return-value"></a>

## Return Value

Current thread’s run loop. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Each thread has exactly one run loop associated with it.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091)

### Getting a Run Loop

- [CFRunLoopGetMain](cfrunloopgetmain%28%29.md): Returns the main CFRunLoop object.
