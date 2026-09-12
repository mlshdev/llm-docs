> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorgetdefault()](https://developer.apple.com/documentation/corefoundation/cfallocatorgetdefault())

# CFAllocatorGetDefault() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the default allocator object for the current thread.

## Declaration

```swift
func CFAllocatorGetDefault() -> Unmanaged<CFAllocator>!
```

<a id="return-value"></a>

## Return Value

A reference to the default allocator for the current thread. If none has been explicitly set, returns the generic system allocator, [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md). Ownership follows [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

See the discussion for [CFAllocatorSetDefault(\_:)](cfallocatorsetdefault%28__%29.md) for more detail on the default allocator and for advice on how and when to set a custom allocator as the default.

## See Also

### Getting and Setting the Default Allocator

- [CFAllocatorSetDefault(\_:)](cfallocatorsetdefault%28__%29.md): Sets the given allocator as the default for the current thread.

# CFAllocatorGetDefault (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the default allocator object for the current thread.

## Declaration

```objectivec
extern CFAllocatorRefCFAllocatorGetDefault();
```

<a id="return-value"></a>

## Return Value

A reference to the default allocator for the current thread. If none has been explicitly set, returns the generic system allocator, [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md). Ownership follows [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

See the discussion for [CFAllocatorSetDefault](cfallocatorsetdefault%28__%29.md) for more detail on the default allocator and for advice on how and when to set a custom allocator as the default.

## See Also

### Getting and Setting the Default Allocator

- [CFAllocatorSetDefault](cfallocatorsetdefault%28__%29.md): Sets the given allocator as the default for the current thread.
