> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/object_getindexedivars(_:)](https://developer.apple.com/documentation/objectivec/object_getindexedivars(_:))

# object_getIndexedIvars(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a pointer to any extra bytes allocated with a instance given object.

## Declaration

```swift
func object_getIndexedIvars(_ obj: Any?) -> UnsafeMutableRawPointer?
```

## Parameters

- `obj`: An Objective-C object.

<a id="return-value"></a>

## Return Value

A pointer to any extra bytes allocated with `obj`. If `obj` was not allocated with any extra bytes, then dereferencing the returned pointer is undefined.

<a id="Discussion"></a>

## Discussion

This function returns a pointer to any extra bytes allocated with the instance (as specified by [class_createInstance(\_:\_:)](class_createinstance%28____%29.md) with extraBytes\>0). This memory follows the object’s ordinary ivars, but may not be adjacent to the last ivar.

The returned pointer is guaranteed to be pointer-size aligned, even if the area following the object’s last ivar is less aligned than that. Alignment greater than pointer-size is never guaranteed, even if the area following the object’s last ivar is more aligned than that.

In a garbage-collected environment, the memory is scanned conservatively.

## See Also

### Working with Instances

- [object_getIvar(\_:\_:)](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar(\_:\_:\_:)](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName(\_:)](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass(\_:)](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass(\_:\_:)](object_setclass%28____%29.md): Sets the class of an object.

# object_getIndexedIvars (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a pointer to any extra bytes allocated with a instance given object.

## Declaration

```objectivec
extern void *object_getIndexedIvars(id obj);
```

## Parameters

- `obj`: An Objective-C object.

<a id="return-value"></a>

## Return Value

A pointer to any extra bytes allocated with `obj`. If `obj` was not allocated with any extra bytes, then dereferencing the returned pointer is undefined.

<a id="Discussion"></a>

## Discussion

This function returns a pointer to any extra bytes allocated with the instance (as specified by [class_createInstance](class_createinstance%28____%29.md) with extraBytes\>0). This memory follows the object’s ordinary ivars, but may not be adjacent to the last ivar.

The returned pointer is guaranteed to be pointer-size aligned, even if the area following the object’s last ivar is less aligned than that. Alignment greater than pointer-size is never guaranteed, even if the area following the object’s last ivar is more aligned than that.

In a garbage-collected environment, the memory is scanned conservatively.

## See Also

### Working with Instances

- [object_copy](object_copy.md): Returns a copy of a given object.
- [object_dispose](object_dispose.md): Frees the memory occupied by a given object.
- [object_setInstanceVariable](object_setinstancevariable.md): Changes the value of an instance variable of a class instance.
- [object_getInstanceVariable](object_getinstancevariable.md): Obtains the value of an instance variable of a class instance.
- [object_getIvar](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass](object_setclass%28____%29.md): Sets the class of an object.
