> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopgetmain()](https://developer.apple.com/documentation/corefoundation/cfrunloopgetmain())

# CFRunLoopGetMain() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the main CFRunLoop object.

## Declaration

```swift
func CFRunLoopGetMain() -> CFRunLoop!
```

<a id="return-value"></a>

## Return Value

The main run loop. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting a Run Loop

- [CFRunLoopGetCurrent()](cfrunloopgetcurrent%28%29.md): Returns the CFRunLoop object for the current thread.

# CFRunLoopGetMain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the main CFRunLoop object.

## Declaration

```objectivec
extern CFRunLoopRefCFRunLoopGetMain();
```

<a id="return-value"></a>

## Return Value

The main run loop. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting a Run Loop

- [CFRunLoopGetCurrent](cfrunloopgetcurrent%28%29.md): Returns the CFRunLoop object for the current thread.
