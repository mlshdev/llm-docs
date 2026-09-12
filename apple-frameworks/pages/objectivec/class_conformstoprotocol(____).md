> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/class_conformstoprotocol(_:_:)](https://developer.apple.com/documentation/objectivec/class_conformstoprotocol(_:_:))

# class_conformsToProtocol(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether a class conforms to a given protocol.

## Declaration

```swift
func class_conformsToProtocol(_ cls: AnyClass?, _ protocol: Protocol?) -> Bool
```

## Parameters

- `cls`: The class you want to inspect.
- `protocol`: A protocol.

<a id="return-value"></a>

## Return Value

[YES](yes.md) if `cls` conforms to `protocol`, otherwise [NO](no.md).

<a id="Discussion"></a>

## Discussion

You should usually use `NSObject`’s [conforms(to:)](nsobjectprotocol/conforms%28to_%29.md) method instead of this function.

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

# class_conformsToProtocol (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether a class conforms to a given protocol.

## Declaration

```objectivec
extern BOOL class_conformsToProtocol(Class cls, Protocol *protocol);
```

## Parameters

- `cls`: The class you want to inspect.
- `protocol`: A protocol.

<a id="return-value"></a>

## Return Value

[YES](yes.md) if `cls` conforms to `protocol`, otherwise [NO](no.md).

<a id="Discussion"></a>

## Discussion

You should usually use `NSObject`’s [conformsToProtocol:](nsobjectprotocol/conforms%28to_%29.md) method instead of this function.

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
