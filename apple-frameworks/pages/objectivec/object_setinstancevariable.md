> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/object_setinstancevariable](https://developer.apple.com/documentation/objectivec/object_setinstancevariable)

# object_setInstanceVariable

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Changes the value of an instance variable of a class instance.

## Declaration

```objectivec
extern Ivarobject_setInstanceVariable(id obj, const char *name, void *value);
```

## Parameters

- `obj`: A pointer to an instance of a class. Pass the object containing the instance variable whose value you wish to modify.
- `name`: A C string. Pass the name of the instance variable whose value you wish to modify.
- `value`: The new value for the instance variable.

<a id="return-value"></a>

## Return Value

A pointer to the [Ivar](ivar.md) data structure that defines the type and name of the instance variable specified by `name`.

## See Also

### Working with Instances

- [object_copy](object_copy.md): Returns a copy of a given object.
- [object_dispose](object_dispose.md): Frees the memory occupied by a given object.
- [object_getInstanceVariable](object_getinstancevariable.md): Obtains the value of an instance variable of a class instance.
- [object_getIndexedIvars](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass](object_setclass%28____%29.md): Sets the class of an object.
