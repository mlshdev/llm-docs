> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cferrorcreatewithuserinfokeysandvalues(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cferrorcreatewithuserinfokeysandvalues(_:_:_:_:_:_:))

# CFErrorCreateWithUserInfoKeysAndValues(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFError object using given keys and values to create the user info dictionary.

## Declaration

```swift
func CFErrorCreateWithUserInfoKeysAndValues(_ allocator: CFAllocator!, _ domain: CFErrorDomain!, _ code: CFIndex, _ userInfoKeys: UnsafePointer<UnsafeRawPointer?>!, _ userInfoValues: UnsafePointer<UnsafeRawPointer?>!, _ numUserInfoValues: CFIndex) -> CFError!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `domain`: A CFString that identifies the error domain. If this reference is `NULL` or is otherwise not a valid CFString, the behavior is undefined.
- `code`: A CFIndex that identifies the error code. The code is interpreted within the context of the error domain.
- `userInfoKeys`: An array of `numUserInfoValues` CFStrings used as keys in creating the userInfo dictionary. The value of this parameter can be `NULL` if `numUserInfoValues` is `0`.
- `userInfoValues`: An array of `numUserInfoValues` CF types used as values in creating the userInfo dictionary.  The value of this parameter can be `NULL` if `numUserInfoValues` is `0`.
- `numUserInfoValues`: The number of keys and values in the `userInfoKeys` and `userInfoValues` arrays.

<a id="return-value"></a>

## Return Value

A new CFError object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFError

- [CFErrorCreate(\_:\_:\_:\_:)](cferrorcreate%28________%29.md): Creates a new CFError object.

# CFErrorCreateWithUserInfoKeysAndValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFError object using given keys and values to create the user info dictionary.

## Declaration

```objectivec
extern CFErrorRefCFErrorCreateWithUserInfoKeysAndValues(CFAllocatorRef allocator, CFErrorDomain domain, CFIndex code, const void * const*userInfoKeys, const void * const*userInfoValues, CFIndex numUserInfoValues);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `domain`: A CFString that identifies the error domain. If this reference is `NULL` or is otherwise not a valid CFString, the behavior is undefined.
- `code`: A CFIndex that identifies the error code. The code is interpreted within the context of the error domain.
- `userInfoKeys`: An array of `numUserInfoValues` CFStrings used as keys in creating the userInfo dictionary. The value of this parameter can be `NULL` if `numUserInfoValues` is `0`.
- `userInfoValues`: An array of `numUserInfoValues` CF types used as values in creating the userInfo dictionary.  The value of this parameter can be `NULL` if `numUserInfoValues` is `0`.
- `numUserInfoValues`: The number of keys and values in the `userInfoKeys` and `userInfoValues` arrays.

<a id="return-value"></a>

## Return Value

A new CFError object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFError

- [CFErrorCreate](cferrorcreate%28________%29.md): Creates a new CFError object.
