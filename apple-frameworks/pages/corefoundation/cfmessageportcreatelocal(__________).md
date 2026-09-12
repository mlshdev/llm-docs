> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportcreatelocal(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportcreatelocal(_:_:_:_:_:))

# CFMessagePortCreateLocal(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a local CFMessagePort object.

## Declaration

```swift
func CFMessagePortCreateLocal(_ allocator: CFAllocator!, _ name: CFString!, _ callout: CFMessagePortCallBack!, _ context: UnsafeMutablePointer<CFMessagePortContext>!, _ shouldFreeInfo: UnsafeMutablePointer<DarwinBoolean>!) -> CFMessagePort!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `name`: The name with which to register the port. `name` can be `NULL`.
- `callout`: The callback function invoked when a message is received on the message port.
- `context`: A structure holding contextual information for the message port. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call.
- `shouldFreeInfo`: A flag set by the function to indicate whether the `info` member of `context` should be freed. The flag is set to `true` on failure or if a local port named `name` already exists, `false` otherwise. `shouldFreeInfo` can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFMessagePort object, or `NULL` on failure. If a local port is already named `name`, the function returns that port instead of creating a new object; the `context` and `callout` parameters are ignored in this case. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This method is not available on iOS 7 and later—it will return `NULL` and log a sandbox violation in `syslog`. See [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091) for possible replacement technologies.

## See Also

### Creating a CFMessagePort Object

- [CFMessagePortCreateRemote(\_:\_:)](cfmessageportcreateremote%28____%29.md): Returns a CFMessagePort object connected to a remote port.

# CFMessagePortCreateLocal (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a local CFMessagePort object.

## Declaration

```objectivec
extern CFMessagePortRefCFMessagePortCreateLocal(CFAllocatorRef allocator, CFStringRef name, CFMessagePortCallBack callout, CFMessagePortContext *context, Boolean *shouldFreeInfo);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `name`: The name with which to register the port. `name` can be `NULL`.
- `callout`: The callback function invoked when a message is received on the message port.
- `context`: A structure holding contextual information for the message port. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call.
- `shouldFreeInfo`: A flag set by the function to indicate whether the `info` member of `context` should be freed. The flag is set to `true` on failure or if a local port named `name` already exists, `false` otherwise. `shouldFreeInfo` can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFMessagePort object, or `NULL` on failure. If a local port is already named `name`, the function returns that port instead of creating a new object; the `context` and `callout` parameters are ignored in this case. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This method is not available on iOS 7 and later—it will return `NULL` and log a sandbox violation in `syslog`. See [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091) for possible replacement technologies.

## See Also

### Creating a CFMessagePort Object

- [CFMessagePortCreateRemote](cfmessageportcreateremote%28____%29.md): Returns a CFMessagePort object connected to a remote port.
