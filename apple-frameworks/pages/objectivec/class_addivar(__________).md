> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/class_addivar(_:_:_:_:_:)](https://developer.apple.com/documentation/objectivec/class_addivar(_:_:_:_:_:))

# class_addIvar(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Adds a new instance variable to a class.

## Declaration

```swift
func class_addIvar(_ cls: AnyClass?, _ name: UnsafePointer<CChar>, _ size: Int, _ alignment: UInt8, _ types: UnsafePointer<CChar>?) -> Bool
```

<a id="return-value"></a>

## Return Value

[YES](yes.md) if the instance variable was added successfully, otherwise [NO](no.md) (for example, the class already contains an instance variable with that name).

<a id="Discussion"></a>

## Discussion

This function may only be called after [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md) and before [objc_registerClassPair(\_:)](objc_registerclasspair%28__%29.md). Adding an instance variable to an existing class is not supported.

The class must not be a metaclass. Adding an instance variable to a metaclass is not supported.

The instance variable’s minimum alignment in bytes is `1<<align`. The minimum alignment of an instance variable depends on the ivar’s type and the machine architecture. For variables of any pointer type, pass `log2(sizeof(pointer_type))`.

## See Also

### Working with Classes

- [class_getName(\_:)](class_getname%28__%29.md): Returns the name of a class.
- [class_getSuperclass(\_:)](class_getsuperclass%28__%29.md): Returns the superclass of a class.
- [class_setSuperclass(\_:\_:)](class_setsuperclass%28____%29.md): Deprecated. Sets the superclass of a given class.
- [class_isMetaClass(\_:)](class_ismetaclass%28__%29.md): Returns a Boolean value that indicates whether a class object is a metaclass.
- [class_getInstanceSize(\_:)](class_getinstancesize%28__%29.md): Returns the size of instances of a class.
- [class_getInstanceVariable(\_:\_:)](class_getinstancevariable%28____%29.md): Returns the `Ivar` for a specified instance variable of a given class.
- [class_getClassVariable(\_:\_:)](class_getclassvariable%28____%29.md): Returns the `Ivar` for a specified class variable of a given class.
- [class_copyIvarList(\_:\_:)](class_copyivarlist%28____%29.md): Describes the instance variables declared by a class.
- [class_getIvarLayout(\_:)](class_getivarlayout%28__%29.md): Returns a description of the `Ivar` layout for a given class.
- [class_setIvarLayout(\_:\_:)](class_setivarlayout%28____%29.md): Sets the `Ivar` layout for a given class.
- [class_getWeakIvarLayout(\_:)](class_getweakivarlayout%28__%29.md): Returns a description of the layout of weak `Ivar`s for a given class.
- [class_setWeakIvarLayout(\_:\_:)](class_setweakivarlayout%28____%29.md): Sets the layout for weak `Ivar`s for a given class.
- [class_getProperty(\_:\_:)](class_getproperty%28____%29.md): Returns a property with a given name of a given class.
- [class_copyPropertyList(\_:\_:)](class_copypropertylist%28____%29.md): Describes the properties declared by a class.
- [class_addMethod(\_:\_:\_:\_:)](class_addmethod%28________%29.md): Adds a new method to a class with a given name and implementation.

# class_addIvar (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Adds a new instance variable to a class.

## Declaration

```objectivec
extern BOOL class_addIvar(Class cls, const char *name, size_t size, uint8_t alignment, const char *types);
```

<a id="return-value"></a>

## Return Value

[YES](yes.md) if the instance variable was added successfully, otherwise [NO](no.md) (for example, the class already contains an instance variable with that name).

<a id="Discussion"></a>

## Discussion

This function may only be called after [objc_allocateClassPair](objc_allocateclasspair%28______%29.md) and before [objc_registerClassPair](objc_registerclasspair%28__%29.md). Adding an instance variable to an existing class is not supported.

The class must not be a metaclass. Adding an instance variable to a metaclass is not supported.

The instance variable’s minimum alignment in bytes is `1<<align`. The minimum alignment of an instance variable depends on the ivar’s type and the machine architecture. For variables of any pointer type, pass `log2(sizeof(pointer_type))`.

## See Also

### Working with Classes

- [class_getName](class_getname%28__%29.md): Returns the name of a class.
- [class_getSuperclass](class_getsuperclass%28__%29.md): Returns the superclass of a class.
- [class_setSuperclass](class_setsuperclass%28____%29.md): Deprecated. Sets the superclass of a given class.
- [class_isMetaClass](class_ismetaclass%28__%29.md): Returns a Boolean value that indicates whether a class object is a metaclass.
- [class_getInstanceSize](class_getinstancesize%28__%29.md): Returns the size of instances of a class.
- [class_getInstanceVariable](class_getinstancevariable%28____%29.md): Returns the `Ivar` for a specified instance variable of a given class.
- [class_getClassVariable](class_getclassvariable%28____%29.md): Returns the `Ivar` for a specified class variable of a given class.
- [class_copyIvarList](class_copyivarlist%28____%29.md): Describes the instance variables declared by a class.
- [class_getIvarLayout](class_getivarlayout%28__%29.md): Returns a description of the `Ivar` layout for a given class.
- [class_setIvarLayout](class_setivarlayout%28____%29.md): Sets the `Ivar` layout for a given class.
- [class_getWeakIvarLayout](class_getweakivarlayout%28__%29.md): Returns a description of the layout of weak `Ivar`s for a given class.
- [class_setWeakIvarLayout](class_setweakivarlayout%28____%29.md): Sets the layout for weak `Ivar`s for a given class.
- [class_getProperty](class_getproperty%28____%29.md): Returns a property with a given name of a given class.
- [class_copyPropertyList](class_copypropertylist%28____%29.md): Describes the properties declared by a class.
- [class_addMethod](class_addmethod%28________%29.md): Adds a new method to a class with a given name and implementation.
