> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cferrorcreate(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cferrorcreate(_:_:_:_:))

# CFErrorCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFError object.

## Declaration

```swift
func CFErrorCreate(_ allocator: CFAllocator!, _ domain: CFErrorDomain!, _ code: CFIndex, _ userInfo: CFDictionary!) -> CFError!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `domain`: A CFString that identifies the error domain. If this reference is `NULL` or is otherwise not a valid CFString, the behavior is undefined.
- `code`: A CFIndex that identifies the error code. The code is interpreted within the context of the error domain.
- `userInfo`: A CFDictionary created with [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md) and [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md). The dictionary is copied with [CFDictionaryCreateCopy(\_:\_:)](cfdictionarycreatecopy%28____%29.md). If you do not want the userInfo dictionary, you can pass `NULL`, in which case an empty dictionary will be assigned.

<a id="return-value"></a>

## Return Value

A new CFError object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFError

- [CFErrorCreateWithUserInfoKeysAndValues(\_:\_:\_:\_:\_:\_:)](cferrorcreatewithuserinfokeysandvalues%28____________%29.md): Creates a new CFError object using given keys and values to create the user info dictionary.

# CFErrorCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFError object.

## Declaration

```objectivec
extern CFErrorRefCFErrorCreate(CFAllocatorRef allocator, CFErrorDomain domain, CFIndex code, CFDictionaryRef userInfo);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `domain`: A CFString that identifies the error domain. If this reference is `NULL` or is otherwise not a valid CFString, the behavior is undefined.
- `code`: A CFIndex that identifies the error code. The code is interpreted within the context of the error domain.
- `userInfo`: A CFDictionary created with [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md) and [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md). The dictionary is copied with [CFDictionaryCreateCopy](cfdictionarycreatecopy%28____%29.md). If you do not want the userInfo dictionary, you can pass `NULL`, in which case an empty dictionary will be assigned.

<a id="return-value"></a>

## Return Value

A new CFError object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFError

- [CFErrorCreateWithUserInfoKeysAndValues](cferrorcreatewithuserinfokeysandvalues%28____________%29.md): Creates a new CFError object using given keys and values to create the user info dictionary.
