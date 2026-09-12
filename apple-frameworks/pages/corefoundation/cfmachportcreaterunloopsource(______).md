> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportcreaterunloopsource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfmachportcreaterunloopsource(_:_:_:))

# CFMachPortCreateRunLoopSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object for a CFMachPort object.

## Declaration

```swift
func CFMachPortCreateRunLoopSource(_ allocator: CFAllocator!, _ port: CFMachPort!, _ order: CFIndex) -> CFRunLoopSource!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `port`: The Mach port for which to create a CFRunLoopSource object.
- `order`: A priority index indicating the order in which run loop sources are processed. `order` is currently ignored by CFMachPort run loop sources. Pass `0` for this value.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object for `port`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. To add the source to a run loop, use [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md).

## See Also

### Configuring a CFMachPort Object

- [CFMachPortInvalidate(\_:)](cfmachportinvalidate%28__%29.md): Invalidates a CFMachPort object, stopping it from receiving any more messages.
- [CFMachPortSetInvalidationCallBack(\_:\_:)](cfmachportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMachPort object is invalidated.

# CFMachPortCreateRunLoopSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object for a CFMachPort object.

## Declaration

```objectivec
extern CFRunLoopSourceRefCFMachPortCreateRunLoopSource(CFAllocatorRef allocator, CFMachPortRef port, CFIndex order);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `port`: The Mach port for which to create a CFRunLoopSource object.
- `order`: A priority index indicating the order in which run loop sources are processed. `order` is currently ignored by CFMachPort run loop sources. Pass `0` for this value.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object for `port`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. To add the source to a run loop, use [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md).

## See Also

### Configuring a CFMachPort Object

- [CFMachPortInvalidate](cfmachportinvalidate%28__%29.md): Invalidates a CFMachPort object, stopping it from receiving any more messages.
- [CFMachPortSetInvalidationCallBack](cfmachportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMachPort object is invalidated.
