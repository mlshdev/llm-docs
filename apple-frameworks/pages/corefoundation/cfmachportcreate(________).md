> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportcreate(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfmachportcreate(_:_:_:_:))

# CFMachPortCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFMachPort object with a new Mach port.

## Declaration

```swift
func CFMachPortCreate(_ allocator: CFAllocator!, _ callout: CFMachPortCallBack!, _ context: UnsafeMutablePointer<CFMachPortContext>!, _ shouldFreeInfo: UnsafeMutablePointer<DarwinBoolean>!) -> CFMachPort!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `callout`: The callback function invoked when a message is received on the new Mach port.
- `context`: A structure holding contextual information for the new Mach port. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call.
- `shouldFreeInfo`: A flag set by the function to indicate whether the `info` member of `context` should be freed. The flag is set to `true` on failure, `false` otherwise. `shouldFreeInfo` can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFMachPort object or `NULL` on failure. The CFMachPort object has both send and receive rights. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFMachPort Object

- [CFMachPortCreateWithPort(\_:\_:\_:\_:\_:)](cfmachportcreatewithport%28__________%29.md): Creates a CFMachPort object for a pre-existing native Mach port.

# CFMachPortCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFMachPort object with a new Mach port.

## Declaration

```objectivec
extern CFMachPortRefCFMachPortCreate(CFAllocatorRef allocator, CFMachPortCallBack callout, CFMachPortContext *context, Boolean *shouldFreeInfo);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `callout`: The callback function invoked when a message is received on the new Mach port.
- `context`: A structure holding contextual information for the new Mach port. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call.
- `shouldFreeInfo`: A flag set by the function to indicate whether the `info` member of `context` should be freed. The flag is set to `true` on failure, `false` otherwise. `shouldFreeInfo` can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFMachPort object or `NULL` on failure. The CFMachPort object has both send and receive rights. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFMachPort Object

- [CFMachPortCreateWithPort](cfmachportcreatewithport%28__________%29.md): Creates a CFMachPort object for a pre-existing native Mach port.
