> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportcreaterunloopsource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportcreaterunloopsource(_:_:_:))

# CFMessagePortCreateRunLoopSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object for a CFMessagePort object.

## Declaration

```swift
func CFMessagePortCreateRunLoopSource(_ allocator: CFAllocator!, _ local: CFMessagePort!, _ order: CFIndex) -> CFRunLoopSource!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `local`: The message port for which to create a run loop source.
- `order`: A priority index indicating the order in which run loop sources are processed. `order` is currently ignored by CFMessagePort object run loop sources. Pass `0` for this value.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object for `ms`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. To add the source to a run loop, use [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

This method is not available on iOS 7 and later—it will return `NULL` and log a sandbox violation in `syslog`. See [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091) for possible replacement technologies.

## See Also

### Configuring a CFMessagePort Object

- [CFMessagePortSetInvalidationCallBack(\_:\_:)](cfmessageportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMessagePort object is invalidated.
- [CFMessagePortSetName(\_:\_:)](cfmessageportsetname%28____%29.md): Sets the name of a local CFMessagePort object.

# CFMessagePortCreateRunLoopSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object for a CFMessagePort object.

## Declaration

```objectivec
extern CFRunLoopSourceRefCFMessagePortCreateRunLoopSource(CFAllocatorRef allocator, CFMessagePortRef local, CFIndex order);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `local`: The message port for which to create a run loop source.
- `order`: A priority index indicating the order in which run loop sources are processed. `order` is currently ignored by CFMessagePort object run loop sources. Pass `0` for this value.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object for `ms`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. To add the source to a run loop, use [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

This method is not available on iOS 7 and later—it will return `NULL` and log a sandbox violation in `syslog`. See [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091) for possible replacement technologies.

## See Also

### Configuring a CFMessagePort Object

- [CFMessagePortSetInvalidationCallBack](cfmessageportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMessagePort object is invalidated.
- [CFMessagePortSetName](cfmessageportsetname%28____%29.md): Sets the name of a local CFMessagePort object.
