> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(nonretainedobject:)](https://developer.apple.com/documentation/foundation/nsvalue/init(nonretainedobject:))

# init(nonretainedObject:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object containing the specified object.

## Declaration

```swift
init(nonretainedObject anObject: Any?)
```

## Parameters

- `anObject`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains `anObject`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [init(\_:withObjCType:)](init%28__withobjctype_%29.md) in this manner:

```objc
NSValue *theValue = [NSValue value:&anObject withObjCType:@encode(void *)];
```

This method is useful if you want to add an object to a [Collection](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Collection.html#//apple_ref/doc/uid/TP40008195-CH10) but don’t want the collection to create a strong reference to it.

## See Also

### Working with Pointer and Object Values

- [init(pointer:)](init%28pointer_%29.md): Creates a value object containing the specified pointer.
- [pointerValue](pointervalue.md): Returns the value as an untyped pointer.
- [nonretainedObjectValue](nonretainedobjectvalue.md): The value as a non-retained pointer to an object.

# valueWithNonretainedObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object containing the specified object.

## Declaration

```objectivec
+ (NSValue *) valueWithNonretainedObject:(id) anObject;
```

## Parameters

- `anObject`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains `anObject`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [value:withObjCType:](init%28__withobjctype_%29.md) in this manner:

```objc
NSValue *theValue = [NSValue value:&anObject withObjCType:@encode(void *)];
```

This method is useful if you want to add an object to a [Collection](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Collection.html#//apple_ref/doc/uid/TP40008195-CH10) but don’t want the collection to create a strong reference to it.

## See Also

### Working with Pointer and Object Values

- [valueWithPointer:](init%28pointer_%29.md): Creates a value object containing the specified pointer.
- [pointerValue](pointervalue.md): Returns the value as an untyped pointer.
- [nonretainedObjectValue](nonretainedobjectvalue.md): The value as a non-retained pointer to an object.
