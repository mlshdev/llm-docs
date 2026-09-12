> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumbercreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumbercreate(_:_:_:))

# CFNumberCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFNumber object using a specified value.

## Declaration

```swift
func CFNumberCreate(_ allocator: CFAllocator!, _ theType: CFNumberType, _ valuePtr: UnsafeRawPointer!) -> CFNumber!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `theType`: A constant that specifies the data type of the value to convert. See [CFNumberType](cfnumbertype.md) for a list of possible values.
- `valuePtr`: A pointer to the value for the returned number object.

<a id="return-value"></a>

## Return Value

A new number with the value specified by `valuePtr`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The `theType` parameter is not necessarily preserved when creating a new CFNumber object. The CFNumber object will be created using whatever internal storage type the creation function deems appropriate. Use the function [CFNumberGetType(\_:)](cfnumbergettype%28__%29.md) to find out what type the CFNumber object used to store your value.

# CFNumberCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFNumber object using a specified value.

## Declaration

```objectivec
extern CFNumberRefCFNumberCreate(CFAllocatorRef allocator, CFNumberType theType, const void *valuePtr);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `theType`: A constant that specifies the data type of the value to convert. See [CFNumberType](cfnumbertype.md) for a list of possible values.
- `valuePtr`: A pointer to the value for the returned number object.

<a id="return-value"></a>

## Return Value

A new number with the value specified by `valuePtr`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The `theType` parameter is not necessarily preserved when creating a new CFNumber object. The CFNumber object will be created using whatever internal storage type the creation function deems appropriate. Use the function [CFNumberGetType](cfnumbergettype%28__%29.md) to find out what type the CFNumber object used to store your value.
