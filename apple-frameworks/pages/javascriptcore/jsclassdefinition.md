> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassdefinition](https://developer.apple.com/documentation/javascriptcore/jsclassdefinition)

# JSClassDefinition (Swift)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A structure that contains properties and callbacks that define a type of object.

## Declaration

```swift
struct JSClassDefinition
```

<a id="overview"></a>

## Overview

All fields other than the [version](jsclassdefinition/version.md) field are optional. Any pointer may be `NULL`.

The [staticValues](jsclassdefinition/staticvalues.md) and [staticFunctions](jsclassdefinition/staticfunctions.md) arrays are the simplest and most efficient means for vending custom properties. Statically declared properties automatically service requests like [getProperty](jsclassdefinition/getproperty.md), [setProperty](jsclassdefinition/setproperty.md), and [getPropertyNames](jsclassdefinition/getpropertynames.md). Property access callbacks are necessary only to implement unusual properties, like array indexes, which have unknown names at compile time.

If you name your getter function `GetX` and your setter function `SetX`, you declare a [JSStaticValue](jsstaticvalue.md) array that contains `"X"` like this:

```c
JSStaticValue StaticValueArray[] = { 
    { "X", GetX, SetX, kJSPropertyAttributeNone }, 
    { 0, 0, 0, 0 } 
};
```

Standard JavaScript practice calls for storing function objects in prototypes so you can share them. The default [JSClassRef](jsclassref.md) that [JSClassCreate(\_:)](jsclasscreate%28__%29.md) creates follows this idiom, instantiating objects with a shared, automatically generating prototype that contains the class’s function objects. The [kJSClassAttributeNoAutomaticPrototype](kjsclassattributenoautomaticprototype.md) attribute specifies that a [JSClassRef](jsclassref.md) doesn’t automatically generate such a prototype. The resulting [JSClassRef](jsclassref.md) instantiates objects with the default object prototype, and gives each instance object its own copy of the class’s function objects.

A `NULL` callback specifies that the default object callback substitutes, except in the case of [hasProperty](jsclassdefinition/hasproperty.md), where it specifies that [getProperty](jsclassdefinition/getproperty.md) substitutes.

## Topics

### Creating a Class Definition

- [init()](jsclassdefinition/init%28%29.md): Creates an empty class definition.
- [init(version:attributes:className:parentClass:staticValues:staticFunctions:initialize:finalize:hasProperty:getProperty:setProperty:deleteProperty:getPropertyNames:callAsFunction:callAsConstructor:hasInstance:convertToType:)](jsclassdefinition/init%28version_attributes_classname_parentclass_staticvalues_staticfunctions_initialize_finalize_hasproperty_getproperty_setproperty_deleteproperty_getpropertynames_callasfunction_ca~053415f4.md): Creates a class definition with the specified values.
- [JSClassAttributes](jsclassattributes.md): A set of JavaScript class attributes.

### Managing Class Information

- [parentClass](jsclassdefinition/parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](jsclassdefinition/classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](jsclassdefinition/version.md): The version of the class definition structure.
- [attributes](jsclassdefinition/attributes.md): A set of class attributes to give to the class.
- [staticValues](jsclassdefinition/staticvalues.md): An array that contains the class’s statically declared value properties.
- [JSStaticValue](jsstaticvalue.md): A statically declared value property.
- [staticFunctions](jsclassdefinition/staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](jsstaticfunction.md): A statically declared function property.

### Managing Callbacks

- [initialize](jsclassdefinition/initialize.md): The callback for creating the object.
- [JSObjectInitializeCallback](jsobjectinitializecallback.md): The callback type for first creating an object.
- [finalize](jsclassdefinition/finalize.md): The callback for preparing the object for garbage collection.
- [JSObjectFinalizeCallback](jsobjectfinalizecallback.md): The callback type for finalizing an object (preparing it for garbage collection).
- [hasProperty](jsclassdefinition/hasproperty.md): The callback for determining whether an object has a property.
- [JSObjectHasPropertyCallback](jsobjecthaspropertycallback.md): The callback type for determining whether an object has a property.
- [getProperty](jsclassdefinition/getproperty.md): The callback for getting a property’s value.
- [JSObjectGetPropertyCallback](jsobjectgetpropertycallback.md): The callback type for getting a property’s value.
- [setProperty](jsclassdefinition/setproperty.md): The callback for setting a property’s value.
- [JSObjectSetPropertyCallback](jsobjectsetpropertycallback.md): The callback type for setting a property’s value.
- [deleteProperty](jsclassdefinition/deleteproperty.md): The callback for deleting a property.
- [JSObjectDeletePropertyCallback](jsobjectdeletepropertycallback.md): The callback type for deleting a property.
- [getPropertyNames](jsclassdefinition/getpropertynames.md): The callback for collecting the names of an object’s properties.
- [JSObjectGetPropertyNamesCallback](jsobjectgetpropertynamescallback.md): The callback type for collecting the names of an object’s properties.
- [callAsFunction](jsclassdefinition/callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.
- [hasInstance](jsclassdefinition/hasinstance.md): The callback for checking whether an object is an instance of a particular type.
- [JSObjectHasInstanceCallback](jsobjecthasinstancecallback.md): The callback type for checking whether an object is an instance of a particular type.
- [callAsConstructor](jsclassdefinition/callasconstructor.md): The callback for using an object as a constructor.
- [JSObjectCallAsConstructorCallback](jsobjectcallasconstructorcallback.md): The callback type for using an object as a constructor.
- [convertToType](jsclassdefinition/converttotype.md): The callback for converting an object to a particular JavaScript type.
- [JSObjectConvertToTypeCallback](jsobjectconverttotypecallback.md): The callback type for converting an object to a particular JavaScript type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Working with Classes

- [JSClassCreate(\_:)](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease(\_:)](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain(\_:)](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassAttribute](jsclassattribute.md): A JavaScript class attribute.

# JSClassDefinition (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A structure that contains properties and callbacks that define a type of object.

## Declaration

```objectivec
typedef struct { ... } JSClassDefinition;
```

<a id="overview"></a>

## Overview

All fields other than the [version](jsclassdefinition/version.md) field are optional. Any pointer may be `NULL`.

The [staticValues](jsclassdefinition/staticvalues.md) and [staticFunctions](jsclassdefinition/staticfunctions.md) arrays are the simplest and most efficient means for vending custom properties. Statically declared properties automatically service requests like [getProperty](jsclassdefinition/getproperty.md), [setProperty](jsclassdefinition/setproperty.md), and [getPropertyNames](jsclassdefinition/getpropertynames.md). Property access callbacks are necessary only to implement unusual properties, like array indexes, which have unknown names at compile time.

If you name your getter function `GetX` and your setter function `SetX`, you declare a [JSStaticValue](jsstaticvalue.md) array that contains `"X"` like this:

```c
JSStaticValue StaticValueArray[] = { 
    { "X", GetX, SetX, kJSPropertyAttributeNone }, 
    { 0, 0, 0, 0 } 
};
```

Standard JavaScript practice calls for storing function objects in prototypes so you can share them. The default [JSClassRef](jsclassref.md) that [JSClassCreate](jsclasscreate%28__%29.md) creates follows this idiom, instantiating objects with a shared, automatically generating prototype that contains the class’s function objects. The [kJSClassAttributeNoAutomaticPrototype](kjsclassattributenoautomaticprototype.md) attribute specifies that a [JSClassRef](jsclassref.md) doesn’t automatically generate such a prototype. The resulting [JSClassRef](jsclassref.md) instantiates objects with the default object prototype, and gives each instance object its own copy of the class’s function objects.

A `NULL` callback specifies that the default object callback substitutes, except in the case of [hasProperty](jsclassdefinition/hasproperty.md), where it specifies that [getProperty](jsclassdefinition/getproperty.md) substitutes.

## Topics

### Creating a Class Definition

- [JSClassAttributes](jsclassattributes.md): A set of JavaScript class attributes.

### Managing Class Information

- [parentClass](jsclassdefinition/parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](jsclassdefinition/classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](jsclassdefinition/version.md): The version of the class definition structure.
- [attributes](jsclassdefinition/attributes.md): A set of class attributes to give to the class.
- [staticValues](jsclassdefinition/staticvalues.md): An array that contains the class’s statically declared value properties.
- [JSStaticValue](jsstaticvalue.md): A statically declared value property.
- [staticFunctions](jsclassdefinition/staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](jsstaticfunction.md): A statically declared function property.

### Managing Callbacks

- [initialize](jsclassdefinition/initialize.md): The callback for creating the object.
- [JSObjectInitializeCallback](jsobjectinitializecallback.md): The callback type for first creating an object.
- [finalize](jsclassdefinition/finalize.md): The callback for preparing the object for garbage collection.
- [JSObjectFinalizeCallback](jsobjectfinalizecallback.md): The callback type for finalizing an object (preparing it for garbage collection).
- [hasProperty](jsclassdefinition/hasproperty.md): The callback for determining whether an object has a property.
- [JSObjectHasPropertyCallback](jsobjecthaspropertycallback.md): The callback type for determining whether an object has a property.
- [getProperty](jsclassdefinition/getproperty.md): The callback for getting a property’s value.
- [JSObjectGetPropertyCallback](jsobjectgetpropertycallback.md): The callback type for getting a property’s value.
- [setProperty](jsclassdefinition/setproperty.md): The callback for setting a property’s value.
- [JSObjectSetPropertyCallback](jsobjectsetpropertycallback.md): The callback type for setting a property’s value.
- [deleteProperty](jsclassdefinition/deleteproperty.md): The callback for deleting a property.
- [JSObjectDeletePropertyCallback](jsobjectdeletepropertycallback.md): The callback type for deleting a property.
- [getPropertyNames](jsclassdefinition/getpropertynames.md): The callback for collecting the names of an object’s properties.
- [JSObjectGetPropertyNamesCallback](jsobjectgetpropertynamescallback.md): The callback type for collecting the names of an object’s properties.
- [callAsFunction](jsclassdefinition/callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.
- [hasInstance](jsclassdefinition/hasinstance.md): The callback for checking whether an object is an instance of a particular type.
- [JSObjectHasInstanceCallback](jsobjecthasinstancecallback.md): The callback type for checking whether an object is an instance of a particular type.
- [callAsConstructor](jsclassdefinition/callasconstructor.md): The callback for using an object as a constructor.
- [JSObjectCallAsConstructorCallback](jsobjectcallasconstructorcallback.md): The callback type for using an object as a constructor.
- [convertToType](jsclassdefinition/converttotype.md): The callback for converting an object to a particular JavaScript type.
- [JSObjectConvertToTypeCallback](jsobjectconverttotypecallback.md): The callback type for converting an object to a particular JavaScript type.

## See Also

### Working with Classes

- [JSClassCreate](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
