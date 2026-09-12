> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objective-c-runtime](https://developer.apple.com/documentation/objectivec/objective-c-runtime)

# Objective-C Runtime (Swift)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

Describes the macOS Objective-C runtime library support functions and data structures.

<a id="overview"></a>

## Overview

The Objective-C runtime is a runtime library that provides support for the dynamic properties of the Objective-C language, and as such is linked to by all Objective-C apps. Objective-C runtime library support functions are implemented in the shared library found at `/usr/lib/libobjc.A.dylib`.

You typically don’t need to use the Objective-C runtime library directly when programming in Objective-C. This API is useful primarily for developing bridge layers between Objective-C and other languages, or for low-level debugging.

The macOS implementation of the Objective-C runtime library is unique to the Mac. For other platforms, the GNU Compiler Collection provides a different implementation with a similar API. This document covers only the macOS implementation.

The low-level Objective-C runtime API is significantly updated in OS X version 10.5. Many functions and all existing data structures are replaced with new functions. The old functions and structures are deprecated in 32-bit and absent in 64-bit mode. The API constrains several values to 32-bit ints even in 64-bit mode—class count, protocol count, methods per class, ivars per class, arguments per method, sizeof(all arguments) per method, and class version number. In addition, the new Objective-C ABI (not described here) further constrains `sizeof(anInstance)` to 32 bits, and three other values to 24 bits—methods per class, ivars per class, and sizeof(a single ivar). Finally, the obsolete `NXHashTable` and `NXMapTable` are limited to 4 billion items.

> **String encoding**

>  All `char *` in the runtime API should be considered to have UTF-8 encoding.

“Deprecated” below means “deprecated in OS X version 10.5 for 32-bit code, and disallowed for 64-bit code.”

<a id="Who-Should-Read-This-Document"></a>

### Who Should Read This Document

The document is intended for readers who might be interested in learning about the Objective-C runtime.

Because this isn’t a document about C, it assumes some prior acquaintance with that language. However, it doesn’t have to be an extensive acquaintance.

## Topics

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
- [class_addMethod(\_:\_:\_:\_:)](class_addmethod%28________%29.md): Adds a new method to a class with a given name and implementation.
- [class_getInstanceMethod(\_:\_:)](class_getinstancemethod%28____%29.md): Returns a specified instance method for a given class.
- [class_getClassMethod(\_:\_:)](class_getclassmethod%28____%29.md): Returns a pointer to the data structure describing a given class method for a given class.
- [class_copyMethodList(\_:\_:)](class_copymethodlist%28____%29.md): Describes the instance methods implemented by a class.
- [class_replaceMethod(\_:\_:\_:\_:)](class_replacemethod%28________%29.md): Replaces the implementation of a method for a given class.
- [class_getMethodImplementation(\_:\_:)](class_getmethodimplementation%28____%29.md): Returns the function pointer that would be called if a particular message were sent to an instance of a class.
- [class_getMethodImplementation_stret(\_:\_:)](class_getmethodimplementation_stret%28____%29.md): Returns the function pointer that would be called if a particular message were sent to an instance of a class.
- [class_respondsToSelector(\_:\_:)](class_respondstoselector%28____%29.md): Returns a Boolean value that indicates whether instances of a class respond to a particular selector.
- [class_addProtocol(\_:\_:)](class_addprotocol%28____%29.md): Adds a protocol to a class.
- [class_addProperty(\_:\_:\_:\_:)](class_addproperty%28________%29.md): Adds a property to a class.
- [class_replaceProperty(\_:\_:\_:\_:)](class_replaceproperty%28________%29.md): Replace a property of a class.
- [class_conformsToProtocol(\_:\_:)](class_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether a class conforms to a given protocol.
- [class_copyProtocolList(\_:\_:)](class_copyprotocollist%28____%29.md): Describes the protocols adopted by a class.
- [class_getVersion(\_:)](class_getversion%28__%29.md): Returns the version number of a class definition.
- [class_setVersion(\_:\_:)](class_setversion%28____%29.md): Sets the version number of a class definition.
- [objc_setFutureClass](1808430-objc_setfutureclass.md): Used by CoreFoundation’s toll-free bridging.

### Adding Classes

- [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_disposeClassPair(\_:)](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_registerClassPair(\_:)](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md).
- [objc_duplicateClass(\_:\_:\_:)](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.

### Instantiating Classes

- [class_createInstance(\_:\_:)](class_createinstance%28____%29.md): Creates an instance of a class, allocating memory for the class in the default malloc memory zone.

### Working with Instances

- [object_getIndexedIvars(\_:)](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar(\_:\_:)](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar(\_:\_:\_:)](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName(\_:)](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass(\_:)](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass(\_:\_:)](object_setclass%28____%29.md): Sets the class of an object.

### Obtaining Class Definitions

- [objc_getClassList(\_:\_:)](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_copyClassList(\_:)](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass(\_:)](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass(\_:)](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass(\_:)](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass(\_:)](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.

### Working with Instance Variables

- [ivar_getName(\_:)](ivar_getname%28__%29.md): Returns the name of an instance variable.
- [ivar_getTypeEncoding(\_:)](ivar_gettypeencoding%28__%29.md): Returns the type string of an instance variable.
- [ivar_getOffset(\_:)](ivar_getoffset%28__%29.md): Returns the offset of an instance variable.

### Associative References

- [objc_setAssociatedObject(\_:\_:\_:\_:)](objc_setassociatedobject%28________%29.md): Sets an associated value for a given object using a given key and association policy.
- [objc_getAssociatedObject(\_:\_:)](objc_getassociatedobject%28____%29.md): Returns the value associated with a given object for a given key.
- [objc_removeAssociatedObjects(\_:)](objc_removeassociatedobjects%28__%29.md): Removes all associations for a given object.

### Working with Methods

- [method_getName(\_:)](method_getname%28__%29.md): Returns the name of a method.
- [method_getImplementation(\_:)](method_getimplementation%28__%29.md): Returns the implementation of a method.
- [method_getTypeEncoding(\_:)](method_gettypeencoding%28__%29.md): Returns a string describing a method’s parameter and return types.
- [method_copyReturnType(\_:)](method_copyreturntype%28__%29.md): Returns a string describing a method’s return type.
- [method_copyArgumentType(\_:\_:)](method_copyargumenttype%28____%29.md): Returns a string describing a single parameter type of a method.
- [method_getReturnType(\_:\_:\_:)](method_getreturntype%28______%29.md): Returns by reference a string describing a method’s return type.
- [method_getNumberOfArguments(\_:)](method_getnumberofarguments%28__%29.md): Returns the number of arguments accepted by a method.
- [method_getArgumentType(\_:\_:\_:\_:)](method_getargumenttype%28________%29.md): Returns by reference a string describing a single parameter type of a method.
- [method_getDescription(\_:)](method_getdescription%28__%29.md): Deprecated. Returns a method description structure for a specified method.
- [method_setImplementation(\_:\_:)](method_setimplementation%28____%29.md): Sets the implementation of a method.
- [method_exchangeImplementations(\_:\_:)](method_exchangeimplementations%28____%29.md): Exchanges the implementations of two methods.

### Working with Libraries

- [objc_copyImageNames(\_:)](objc_copyimagenames%28__%29.md): Returns the names of all the loaded Objective-C frameworks and dynamic libraries.
- [class_getImageName(\_:)](class_getimagename%28__%29.md): Returns the name of the dynamic library a class originated from.
- [objc_copyClassNamesForImage(\_:\_:)](objc_copyclassnamesforimage%28____%29.md): Returns the names of all the classes within a specified library or framework.

### Working with Selectors

- [sel_getName(\_:)](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_registerName(\_:)](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_getUid(\_:)](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
- [sel_isEqual(\_:\_:)](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.

### Working with Protocols

- [objc_getProtocol(\_:)](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList(\_:)](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol(\_:)](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [objc_registerProtocol(\_:)](objc_registerprotocol%28__%29.md): Registers a newly created protocol with the Objective-C runtime.
- [protocol_addMethodDescription(\_:\_:\_:\_:\_:)](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol(\_:\_:)](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_addProperty(\_:\_:\_:\_:\_:\_:)](protocol_addproperty%28____________%29.md): Adds a property to a protocol that is under construction.
- [protocol_getName(\_:)](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual(\_:\_:)](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList(\_:\_:\_:\_:)](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription(\_:\_:\_:\_:)](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_copyPropertyList(\_:\_:)](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty(\_:\_:\_:\_:)](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList(\_:\_:)](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol(\_:\_:)](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.

### Working with Properties

- [property_getName(\_:)](property_getname%28__%29.md): Returns the name of a property.
- [property_getAttributes(\_:)](property_getattributes%28__%29.md): Returns the attribute string of a property.
- [property_copyAttributeValue(\_:\_:)](property_copyattributevalue%28____%29.md): Returns the value of a property attribute given the attribute name.
- [property_copyAttributeList(\_:\_:)](property_copyattributelist%28____%29.md): Returns an array of property attributes for a given property.

### Using Objective-C Language Features

- [objc_enumerationMutation(\_:)](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler(\_:)](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock(\_:)](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock(\_:)](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_loadWeak(\_:)](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak(\_:\_:)](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.

### Class-Definition Data Structures

- [Method](method.md): An opaque type that represents a method in a class definition.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [objc_property_t](objc_property_t.md): An opaque type that represents an Objective-C declared property.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
- [objc_property_attribute_t](objc_property_attribute_t.md): Defines a property attribute.

### Instance Data Types

These are the data types that represent objects, classes, and superclasses.

- [objc_object](objc_object.md): Represents an instance of a class.
- [objc_super](objc_super-swift.struct.md): Specifies the superclass of an instance.

### Associative References

- [objc_AssociationPolicy](objc_associationpolicy.md): Type to specify the behavior of an association.

## See Also

### Related Documentation

- [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048)

### Reference

- [Objective-C Structures](objective-c-structures.md)
- [Objective-C Constants](objective-c-constants.md)
- [Objective-C Functions](objective-c-functions.md)
- [Objective-C Data Types](objective-c-data-types.md)
- [Objective-C Macros](objective-c-macros.md)
- [Objective-C Enumerations](objective-c-enums.md)

# Objective-C Runtime (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

Describes the macOS Objective-C runtime library support functions and data structures.

<a id="overview"></a>

## Overview

The Objective-C runtime is a runtime library that provides support for the dynamic properties of the Objective-C language, and as such is linked to by all Objective-C apps. Objective-C runtime library support functions are implemented in the shared library found at `/usr/lib/libobjc.A.dylib`.

You typically don’t need to use the Objective-C runtime library directly when programming in Objective-C. This API is useful primarily for developing bridge layers between Objective-C and other languages, or for low-level debugging.

The macOS implementation of the Objective-C runtime library is unique to the Mac. For other platforms, the GNU Compiler Collection provides a different implementation with a similar API. This document covers only the macOS implementation.

The low-level Objective-C runtime API is significantly updated in OS X version 10.5. Many functions and all existing data structures are replaced with new functions. The old functions and structures are deprecated in 32-bit and absent in 64-bit mode. The API constrains several values to 32-bit ints even in 64-bit mode—class count, protocol count, methods per class, ivars per class, arguments per method, sizeof(all arguments) per method, and class version number. In addition, the new Objective-C ABI (not described here) further constrains `sizeof(anInstance)` to 32 bits, and three other values to 24 bits—methods per class, ivars per class, and sizeof(a single ivar). Finally, the obsolete `NXHashTable` and `NXMapTable` are limited to 4 billion items.

> **String encoding**

>  All `char *` in the runtime API should be considered to have UTF-8 encoding.

“Deprecated” below means “deprecated in OS X version 10.5 for 32-bit code, and disallowed for 64-bit code.”

<a id="Who-Should-Read-This-Document"></a>

### Who Should Read This Document

The document is intended for readers who might be interested in learning about the Objective-C runtime.

Because this isn’t a document about C, it assumes some prior acquaintance with that language. However, it doesn’t have to be an extensive acquaintance.

## Topics

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
- [class_addMethod](class_addmethod%28________%29.md): Adds a new method to a class with a given name and implementation.
- [class_getInstanceMethod](class_getinstancemethod%28____%29.md): Returns a specified instance method for a given class.
- [class_getClassMethod](class_getclassmethod%28____%29.md): Returns a pointer to the data structure describing a given class method for a given class.
- [class_copyMethodList](class_copymethodlist%28____%29.md): Describes the instance methods implemented by a class.
- [class_replaceMethod](class_replacemethod%28________%29.md): Replaces the implementation of a method for a given class.
- [class_getMethodImplementation](class_getmethodimplementation%28____%29.md): Returns the function pointer that would be called if a particular message were sent to an instance of a class.
- [class_getMethodImplementation_stret](class_getmethodimplementation_stret%28____%29.md): Returns the function pointer that would be called if a particular message were sent to an instance of a class.
- [class_respondsToSelector](class_respondstoselector%28____%29.md): Returns a Boolean value that indicates whether instances of a class respond to a particular selector.
- [class_addProtocol](class_addprotocol%28____%29.md): Adds a protocol to a class.
- [class_addProperty](class_addproperty%28________%29.md): Adds a property to a class.
- [class_replaceProperty](class_replaceproperty%28________%29.md): Replace a property of a class.
- [class_conformsToProtocol](class_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether a class conforms to a given protocol.
- [class_copyProtocolList](class_copyprotocollist%28____%29.md): Describes the protocols adopted by a class.
- [class_getVersion](class_getversion%28__%29.md): Returns the version number of a class definition.
- [class_setVersion](class_setversion%28____%29.md): Sets the version number of a class definition.
- [objc_getFutureClass](objc_getfutureclass.md): Used by CoreFoundation’s toll-free bridging.
- [objc_setFutureClass](1808430-objc_setfutureclass.md): Used by CoreFoundation’s toll-free bridging.

### Adding Classes

- [objc_allocateClassPair](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_disposeClassPair](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_registerClassPair](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair](objc_allocateclasspair%28______%29.md).
- [objc_duplicateClass](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.

### Instantiating Classes

- [class_createInstance](class_createinstance%28____%29.md): Creates an instance of a class, allocating memory for the class in the default malloc memory zone.
- [objc_constructInstance](objc_constructinstance.md): Creates an instance of a class at the specified location.
- [objc_destructInstance](objc_destructinstance.md): Destroys an instance of a class without freeing memory and removes any of its associated references.

### Working with Instances

- [object_copy](object_copy.md): Returns a copy of a given object.
- [object_dispose](object_dispose.md): Frees the memory occupied by a given object.
- [object_setInstanceVariable](object_setinstancevariable.md): Changes the value of an instance variable of a class instance.
- [object_getInstanceVariable](object_getinstancevariable.md): Obtains the value of an instance variable of a class instance.
- [object_getIndexedIvars](object_getindexedivars%28__%29.md): Returns a pointer to any extra bytes allocated with a instance given object.
- [object_getIvar](object_getivar%28____%29.md): Reads the value of an instance variable in an object.
- [object_setIvar](object_setivar%28______%29.md): Sets the value of an instance variable in an object.
- [object_getClassName](object_getclassname%28__%29.md): Returns the class name of a given object.
- [object_getClass](object_getclass%28__%29.md): Returns the class of an object.
- [object_setClass](object_setclass%28____%29.md): Sets the class of an object.

### Obtaining Class Definitions

- [objc_getClassList](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_copyClassList](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.

### Working with Instance Variables

- [ivar_getName](ivar_getname%28__%29.md): Returns the name of an instance variable.
- [ivar_getTypeEncoding](ivar_gettypeencoding%28__%29.md): Returns the type string of an instance variable.
- [ivar_getOffset](ivar_getoffset%28__%29.md): Returns the offset of an instance variable.

### Associative References

- [objc_setAssociatedObject](objc_setassociatedobject%28________%29.md): Sets an associated value for a given object using a given key and association policy.
- [objc_getAssociatedObject](objc_getassociatedobject%28____%29.md): Returns the value associated with a given object for a given key.
- [objc_removeAssociatedObjects](objc_removeassociatedobjects%28__%29.md): Removes all associations for a given object.

### Sending Messages

When it encounters a method invocation, the compiler might generate a call to any of several functions to perform the actual message dispatch, depending on the receiver, the return value, and the arguments. You can use these functions to dynamically invoke methods from your own plain C code, or to use argument forms not permitted by NSObject’s `perform...` methods. These functions are declared in `/usr/include/objc/objc-runtime.h`.

- [objc_msgSend](objc_msgsend.md): Sends a message with a simple return value to an instance of a class.
- [objc_msgSend_fpret](objc_msgsend_fpret.md): Sends a message with a floating-point return value to an instance of a class.
- [objc_msgSend_stret](objc_msgsend_stret.md): Sends a message with a data-structure return value to an instance of a class.
- [objc_msgSendSuper](objc_msgsendsuper.md): Sends a message with a simple return value to the superclass of an instance of a class.
- [objc_msgSendSuper_stret](objc_msgsendsuper_stret.md): Sends a message with a data-structure return value to the superclass of an instance of a class.

### Working with Methods

- [method_invoke](method_invoke.md): Calls the implementation of a specified method.
- [method_invoke_stret](method_invoke_stret.md): Calls the implementation of a specified method that returns a data-structure.
- [method_getName](method_getname%28__%29.md): Returns the name of a method.
- [method_getImplementation](method_getimplementation%28__%29.md): Returns the implementation of a method.
- [method_getTypeEncoding](method_gettypeencoding%28__%29.md): Returns a string describing a method’s parameter and return types.
- [method_copyReturnType](method_copyreturntype%28__%29.md): Returns a string describing a method’s return type.
- [method_copyArgumentType](method_copyargumenttype%28____%29.md): Returns a string describing a single parameter type of a method.
- [method_getReturnType](method_getreturntype%28______%29.md): Returns by reference a string describing a method’s return type.
- [method_getNumberOfArguments](method_getnumberofarguments%28__%29.md): Returns the number of arguments accepted by a method.
- [method_getArgumentType](method_getargumenttype%28________%29.md): Returns by reference a string describing a single parameter type of a method.
- [method_getDescription](method_getdescription%28__%29.md): Deprecated. Returns a method description structure for a specified method.
- [method_setImplementation](method_setimplementation%28____%29.md): Sets the implementation of a method.
- [method_exchangeImplementations](method_exchangeimplementations%28____%29.md): Exchanges the implementations of two methods.

### Working with Libraries

- [objc_copyImageNames](objc_copyimagenames%28__%29.md): Returns the names of all the loaded Objective-C frameworks and dynamic libraries.
- [class_getImageName](class_getimagename%28__%29.md): Returns the name of the dynamic library a class originated from.
- [objc_copyClassNamesForImage](objc_copyclassnamesforimage%28____%29.md): Returns the names of all the classes within a specified library or framework.

### Working with Selectors

- [sel_getName](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_registerName](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_getUid](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
- [sel_isEqual](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.

### Working with Protocols

- [objc_getProtocol](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [objc_registerProtocol](objc_registerprotocol%28__%29.md): Registers a newly created protocol with the Objective-C runtime.
- [protocol_addMethodDescription](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_addProperty](protocol_addproperty%28____________%29.md): Adds a property to a protocol that is under construction.
- [protocol_getName](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_copyPropertyList](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.

### Working with Properties

- [property_getName](property_getname%28__%29.md): Returns the name of a property.
- [property_getAttributes](property_getattributes%28__%29.md): Returns the attribute string of a property.
- [property_copyAttributeValue](property_copyattributevalue%28____%29.md): Returns the value of a property attribute given the attribute name.
- [property_copyAttributeList](property_copyattributelist%28____%29.md): Returns an array of property attributes for a given property.

### Using Objective-C Language Features

- [objc_enumerationMutation](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_loadWeak](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.

### Class-Definition Data Structures

- [Class](class.md): An opaque type that represents an Objective-C class.
- [Method](method.md): An opaque type that represents a method in a class definition.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [objc_property_t](objc_property_t.md): An opaque type that represents an Objective-C declared property.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [SEL](sel.md): Defines an opaque type that represents a method selector.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
- [objc_property_attribute_t](objc_property_attribute_t.md): Defines a property attribute.

### Instance Data Types

These are the data types that represent objects, classes, and superclasses.

- [objc_object](objc_object.md): Represents an instance of a class.
- [id](id.md): A pointer to an instance of a class.
- [objc_super](objc_super-swift.struct.md): Specifies the superclass of an instance.

### Boolean Value

- [BOOL](bool.md): Type to represent a Boolean value.

### Associative References

- [objc_AssociationPolicy](objc_associationpolicy.md): Type to specify the behavior of an association.

### Constants

- [Boolean Values](boolean-values.md): These macros define convenient constants to represent Boolean values.
- [Null Values](null-values.md): These macros define null values for classes and instances.
- [Dispatch Function Prototypes](dispatch-function-prototypes.md): This macro indicates whether dispatch functions must be cast to an appropriate function pointer type.
- [Objective-C Root Class](objective-c-root-class.md): This macro annotates a class as being an Objective-C root class.
- [Local Variable Storage Duration](local-variable-storage-duration.md): This macro indicates that the values stored in certain local variables should not be aggressively released by the compiler during optimization.

## See Also

### Related Documentation

- [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048)

### Reference

- [Objective-C Structures](objective-c-structures.md)
- [Objective-C Constants](objective-c-constants.md)
- [Objective-C Functions](objective-c-functions.md)
- [Objective-C Data Types](objective-c-data-types.md)
- [Objective-C Macros](objective-c-macros.md)
- [Objective-C Enumerations](objective-c-enums.md)
