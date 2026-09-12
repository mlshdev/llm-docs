> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/class_replacemethod(_:_:_:_:)](https://developer.apple.com/documentation/objectivec/class_replacemethod(_:_:_:_:))

# class_replaceMethod(\_:\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Replaces the implementation of a method for a given class.

## Declaration

```swift
func class_replaceMethod(_ cls: AnyClass?, _ name: Selector, _ imp: IMP, _ types: UnsafePointer<CChar>?) -> IMP?
```

## Parameters

- `cls`: The class you want to modify.
- `name`: A selector that identifies the method whose implementation you want to replace.
- `imp`: The new implementation for the method identified by `name` for the class identified by `cls`.
- `types`: An array of characters that describe the types of the arguments to the method. For possible values, see [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048) \> [Type Encodings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html#//apple_ref/doc/uid/TP40008048-CH100). Since the function must take at least two arguments—`self` and `_cmd`, the second and third characters must be “`@:`” (the first character is the return type).

<a id="return-value"></a>

## Return Value

The previous implementation of the method identified by `name` for the class identified by `cls`.

<a id="Discussion"></a>

## Discussion

This function behaves in two different ways:

- If the method identified by `name` does not yet exist, it is added as if [class_addMethod(\_:\_:\_:\_:)](class_addmethod%28________%29.md) were called. The type encoding specified by `types` is used as given.
- If the method identified by `name` does exist, its IMP is replaced as if [method_setImplementation(\_:\_:)](method_setimplementation%28____%29.md) were called. The type encoding specified by `types` is ignored.

## See Also

### Working with Classes

- [class_getName(\_:)](class_getname%28__%29.md): Returns the name of a class.
- [class_getSuperclass(\_:)](class_getsuperclass%28__%29.md): Returns the superclass of a class.
- [class_setSuperclass(\_:\_:)](class_setsuperclass%28____%29.md): Deprecated. Sets the superclass of a given class.
- [class_isMetaClass(\_:)](class_ismetaclass%28__%29.md): Returns a Boolean value that indicates whether a class object is a metaclass.
- [class_getInstanceSize(\_:)](class_getinstancesize%28__%29.md): Returns the size of instances of a class.
- [class_getInstanceVariable(\_:\_:)](class_getinstancevariable%28____%29.md): Returns the `Ivar` for a specified instance variable of a given class.
- [class_getClassVariable(\_:\_:)](class_getclassvariable%28____%29.md): Returns the `Ivar` for a specified class variable of a given class.
- [class_addIvar(\_:\_:\_:\_:\_:)](class_addivar%28__________%29.md): Adds a new instance variable to a class.
- [class_copyIvarList(\_:\_:)](class_copyivarlist%28____%29.md): Describes the instance variables declared by a class.
- [class_getIvarLayout(\_:)](class_getivarlayout%28__%29.md): Returns a description of the `Ivar` layout for a given class.
- [class_setIvarLayout(\_:\_:)](class_setivarlayout%28____%29.md): Sets the `Ivar` layout for a given class.
- [class_getWeakIvarLayout(\_:)](class_getweakivarlayout%28__%29.md): Returns a description of the layout of weak `Ivar`s for a given class.
- [class_setWeakIvarLayout(\_:\_:)](class_setweakivarlayout%28____%29.md): Sets the layout for weak `Ivar`s for a given class.
- [class_getProperty(\_:\_:)](class_getproperty%28____%29.md): Returns a property with a given name of a given class.
- [class_copyPropertyList(\_:\_:)](class_copypropertylist%28____%29.md): Describes the properties declared by a class.

# class_replaceMethod (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Replaces the implementation of a method for a given class.

## Declaration

```objectivec
extern IMPclass_replaceMethod(Class cls, SEL name, IMP imp, const char *types);
```

## Parameters

- `cls`: The class you want to modify.
- `name`: A selector that identifies the method whose implementation you want to replace.
- `imp`: The new implementation for the method identified by `name` for the class identified by `cls`.
- `types`: An array of characters that describe the types of the arguments to the method. For possible values, see [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048) \> [Type Encodings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html#//apple_ref/doc/uid/TP40008048-CH100). Since the function must take at least two arguments—`self` and `_cmd`, the second and third characters must be “`@:`” (the first character is the return type).

<a id="return-value"></a>

## Return Value

The previous implementation of the method identified by `name` for the class identified by `cls`.

<a id="Discussion"></a>

## Discussion

This function behaves in two different ways:

- If the method identified by `name` does not yet exist, it is added as if [class_addMethod](class_addmethod%28________%29.md) were called. The type encoding specified by `types` is used as given.
- If the method identified by `name` does exist, its IMP is replaced as if [method_setImplementation](method_setimplementation%28____%29.md) were called. The type encoding specified by `types` is ignored.

## See Also

### Working with Classes

- [class_getName](class_getname%28__%29.md): Returns the name of a class.
- [class_getSuperclass](class_getsuperclass%28__%29.md): Returns the superclass of a class.
- [class_setSuperclass](class_setsuperclass%28____%29.md): Deprecated. Sets the superclass of a given class.
- [class_isMetaClass](class_ismetaclass%28__%29.md): Returns a Boolean value that indicates whether a class object is a metaclass.
- [class_getInstanceSize](class_getinstancesize%28__%29.md): Returns the size of instances of a class.
- [class_getInstanceVariable](class_getinstancevariable%28____%29.md): Returns the `Ivar` for a specified instance variable of a given class.
- [class_getClassVariable](class_getclassvariable%28____%29.md): Returns the `Ivar` for a specified class variable of a given class.
- [class_addIvar](class_addivar%28__________%29.md): Adds a new instance variable to a class.
- [class_copyIvarList](class_copyivarlist%28____%29.md): Describes the instance variables declared by a class.
- [class_getIvarLayout](class_getivarlayout%28__%29.md): Returns a description of the `Ivar` layout for a given class.
- [class_setIvarLayout](class_setivarlayout%28____%29.md): Sets the `Ivar` layout for a given class.
- [class_getWeakIvarLayout](class_getweakivarlayout%28__%29.md): Returns a description of the layout of weak `Ivar`s for a given class.
- [class_setWeakIvarLayout](class_setweakivarlayout%28____%29.md): Sets the layout for weak `Ivar`s for a given class.
- [class_getProperty](class_getproperty%28____%29.md): Returns a property with a given name of a given class.
- [class_copyPropertyList](class_copypropertylist%28____%29.md): Describes the properties declared by a class.
