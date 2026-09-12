> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/object_getclass(_:)](https://developer.apple.com/documentation/objectivec/object_getclass(_:))

# object_getClass(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the class of an object.

## Declaration

```swift
func object_getClass(_ obj: Any?) -> AnyClass?
```

## Parameters

- `obj`: The object you want to inspect.

<a id="return-value"></a>

## Return Value

The class object of which `object` is an instance, or `Nil` if `object` is `nil`.

## See Also

### Working with Instances

- [object_getIndexedIvars(\_:)](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar(\_:\_:)](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar(\_:\_:\_:)](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName(\_:)](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_setClass(\_:\_:)](object_setclass%28____%29.md): Sets the class of an object.

# object_getClass (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the class of an object.

## Declaration

```objectivec
extern Classobject_getClass(id obj);
```

## Parameters

- `obj`: The object you want to inspect.

<a id="return-value"></a>

## Return Value

The class object of which `object` is an instance, or `Nil` if `object` is `nil`.

## See Also

### Working with Instances

- [object_copy](object_copy.md): Returns a copy of a given object.
- [object_dispose](object_dispose.md): Frees the memory occupied by a given object.
- [object_setInstanceVariable](object_setinstancevariable.md): Changes the value of an instance variable of a class instance.
- [object_getInstanceVariable](object_getinstancevariable.md): Obtains the value of an instance variable of a class instance.
- [object_getIndexedIvars](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_setClass](object_setclass%28____%29.md): Sets the class of an object.
