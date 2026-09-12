> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/object_getinstancevariable](https://developer.apple.com/documentation/objectivec/object_getinstancevariable)

# object_getInstanceVariable

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Obtains the value of an instance variable of a class instance.

## Declaration

```objectivec
extern Ivarobject_getInstanceVariable(id obj, const char *name, void **outValue);
```

## Parameters

- `obj`: A pointer to an instance of a class. Pass the object containing the instance variable whose value you wish to obtain.
- `name`: A C string. Pass the name of the instance variable whose value you wish to obtain.
- `outValue`: On return, contains a pointer to the value of the instance variable.

<a id="return-value"></a>

## Return Value

A pointer to the [Ivar](ivar.md) data structure that defines the type and name of the instance variable specified by `name`.

## See Also

### Working with Instances

- [object_copy](object_copy.md): Returns a copy of a given object.
- [object_dispose](object_dispose.md): Frees the memory occupied by a given object.
- [object_setInstanceVariable](object_setinstancevariable.md): Changes the value of an instance variable of a class instance.
- [object_getIndexedIvars](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass](object_setclass%28____%29.md): Sets the class of an object.
