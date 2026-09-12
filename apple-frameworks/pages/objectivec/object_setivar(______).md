> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/object_setivar(_:_:_:)](https://developer.apple.com/documentation/objectivec/object_setivar(_:_:_:))

# object_setIvar(\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the value of an instance variable in an object.

## Declaration

```swift
func object_setIvar(_ obj: Any?, _ ivar: Ivar, _ value: Any?)
```

## Parameters

- `obj`: The object containing the instance variable whose value you want to set.
- `ivar`: The Ivar describing the instance variable whose value you want to set.
- `value`: The new value for the instance variable.

<a id="Discussion"></a>

## Discussion

[object_setIvar(\_:\_:\_:)](object_setivar%28______%29.md) is faster than [object_setInstanceVariable](object_setinstancevariable.md) if the Ivar for the instance variable is already known.

## See Also

### Working with Instances

- [object_getIndexedIvars(\_:)](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar(\_:\_:)](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_getClassName(\_:)](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass(\_:)](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass(\_:\_:)](object_setclass%28____%29.md): Sets the class of an object.

# object_setIvar (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the value of an instance variable in an object.

## Declaration

```objectivec
extern void object_setIvar(id obj, Ivar ivar, id value);
```

## Parameters

- `obj`: The object containing the instance variable whose value you want to set.
- `ivar`: The Ivar describing the instance variable whose value you want to set.
- `value`: The new value for the instance variable.

<a id="Discussion"></a>

## Discussion

[object_setIvar](object_setivar%28______%29.md) is faster than [object_setInstanceVariable](object_setinstancevariable.md) if the Ivar for the instance variable is already known.

## See Also

### Working with Instances

- [object_copy](object_copy.md): Returns a copy of a given object.
- [object_dispose](object_dispose.md): Frees the memory occupied by a given object.
- [object_setInstanceVariable](object_setinstancevariable.md): Changes the value of an instance variable of a class instance.
- [object_getInstanceVariable](object_getinstancevariable.md): Obtains the value of an instance variable of a class instance.
- [object_getIndexedIvars](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_getClassName](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass](object_setclass%28____%29.md): Sets the class of an object.
