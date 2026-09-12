> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(pointer:)](https://developer.apple.com/documentation/foundation/nsvalue/init(pointer:))

# init(pointer:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object containing the specified pointer.

## Declaration

```swift
init(pointer: UnsafeRawPointer?)
```

## Parameters

- `pointer`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains `aPointer`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [init(\_:withObjCType:)](init%28__withobjctype_%29.md) in this manner:

```objc
NSValue *theValue = [NSValue value:&aPointer withObjCType:@encode(void *)];
```

This method does not copy the contents of `aPointer`, so you must not to free the memory at the pointer destination while the [NSValue](../nsvalue.md) object exists. [NSData](../nsdata.md) objects may be more suited for arbitrary pointers than [NSValue](../nsvalue.md) objects.

## See Also

### Working with Pointer and Object Values

- [init(nonretainedObject:)](init%28nonretainedobject_%29.md): Creates a value object containing the specified object.
- [pointerValue](pointervalue.md): Returns the value as an untyped pointer.
- [nonretainedObjectValue](nonretainedobjectvalue.md): The value as a non-retained pointer to an object.

# valueWithPointer: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object containing the specified pointer.

## Declaration

```objectivec
+ (NSValue *) valueWithPointer:(const void *) pointer;
```

## Parameters

- `pointer`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains `aPointer`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [value:withObjCType:](init%28__withobjctype_%29.md) in this manner:

```objc
NSValue *theValue = [NSValue value:&aPointer withObjCType:@encode(void *)];
```

This method does not copy the contents of `aPointer`, so you must not to free the memory at the pointer destination while the [NSValue](../nsvalue.md) object exists. [NSData](../nsdata.md) objects may be more suited for arbitrary pointers than [NSValue](../nsvalue.md) objects.

## See Also

### Working with Pointer and Object Values

- [valueWithNonretainedObject:](init%28nonretainedobject_%29.md): Creates a value object containing the specified object.
- [pointerValue](pointervalue.md): Returns the value as an untyped pointer.
- [nonretainedObjectValue](nonretainedobjectvalue.md): The value as a non-retained pointer to an object.
