> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectref](https://developer.apple.com/documentation/javascriptcore/jsobjectref)

# JSObjectRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript object.

## Declaration

```swift
typealias JSObjectRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

A [JSObjectRef](jsobjectref.md) is a [JSValueRef](jsvalueref.md).

## Topics

### Accessing the Global Object

- [JSContextGetGlobalObject(\_:)](jscontextgetglobalobject%28__%29.md): Gets the global object of a JavaScript execution context.

### Working with Objects

- [JSObjectCallAsConstructor(\_:\_:\_:\_:\_:)](jsobjectcallasconstructor%28__________%29.md): Calls an object as a constructor.
- [JSObjectCallAsFunction(\_:\_:\_:\_:\_:\_:)](jsobjectcallasfunction%28____________%29.md): Calls an object as a function.
- [JSObjectCopyPropertyNames(\_:\_:)](jsobjectcopypropertynames%28____%29.md): Gets the names of an object’s enumerable properties.
- [JSObjectDeleteProperty(\_:\_:\_:\_:)](jsobjectdeleteproperty%28________%29.md): Deletes a property from an object.
- [JSObjectGetPrivate(\_:)](jsobjectgetprivate%28__%29.md): Gets an object’s private data.
- [JSObjectGetProperty(\_:\_:\_:\_:)](jsobjectgetproperty%28________%29.md): Gets a property from an object.
- [JSObjectGetPropertyAtIndex(\_:\_:\_:\_:)](jsobjectgetpropertyatindex%28________%29.md): Gets a property from an object by numeric index.
- [JSObjectGetPrototype(\_:\_:)](jsobjectgetprototype%28____%29.md): Gets an object’s prototype.
- [JSObjectHasProperty(\_:\_:\_:)](jsobjecthasproperty%28______%29.md): Tests whether an object has a specified property.
- [JSObjectIsConstructor(\_:\_:)](jsobjectisconstructor%28____%29.md): Tests whether you can call an object as a constructor.
- [JSObjectIsFunction(\_:\_:)](jsobjectisfunction%28____%29.md): Tests whether you can call an object as a function.
- [JSObjectMake(\_:\_:\_:)](jsobjectmake%28______%29.md): Creates a JavaScript object.
- [JSObjectMakeArray(\_:\_:\_:\_:)](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor(\_:\_:\_:)](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate(\_:\_:\_:\_:)](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.
- [JSObjectMakeError(\_:\_:\_:\_:)](jsobjectmakeerror%28________%29.md): Creates a JavaScript error object as though invoking the built-in error constructor.
- [JSObjectMakeFunction(\_:\_:\_:\_:\_:\_:\_:\_:)](jsobjectmakefunction%28________________%29.md): Creates a function with a specified script as its body.
- [JSObjectMakeFunctionWithCallback(\_:\_:\_:)](jsobjectmakefunctionwithcallback%28______%29.md): Creates a JavaScript function with a specified callback as its implementation.
- [JSObjectMakeRegExp(\_:\_:\_:\_:)](jsobjectmakeregexp%28________%29.md): Creates a JavaScript regular expression object as though invoking the built-in regular expression constructor.
- [JSObjectSetPrivate(\_:\_:)](jsobjectsetprivate%28____%29.md): Sets a pointer to private data on an object.
- [JSObjectSetProperty(\_:\_:\_:\_:\_:\_:)](jsobjectsetproperty%28____________%29.md): Sets a property on an object.
- [JSObjectSetPropertyAtIndex(\_:\_:\_:\_:\_:)](jsobjectsetpropertyatindex%28__________%29.md): Sets a property on an object by numeric index.
- [JSObjectGetPropertyForKey(\_:\_:\_:\_:)](jsobjectgetpropertyforkey%28________%29.md): Gets a property from an object using a JavaScript value as the property key.
- [JSObjectSetPrototype(\_:\_:\_:)](jsobjectsetprototype%28______%29.md): Sets an object’s prototype.
- [JSObjectDeletePropertyForKey(\_:\_:\_:\_:)](jsobjectdeletepropertyforkey%28________%29.md): Deletes a property from an object using a JavaScript value as the property key.
- [JSObjectHasPropertyForKey(\_:\_:\_:\_:)](jsobjecthaspropertyforkey%28________%29.md): Tests whether an object has the specified property using a JavaScript value as the property key.
- [JSObjectSetPropertyForKey(\_:\_:\_:\_:\_:\_:)](jsobjectsetpropertyforkey%28____________%29.md): Sets a property on an object using a JavaScript value as the property key.
- [JSObjectMakeDeferredPromise(\_:\_:\_:\_:)](jsobjectmakedeferredpromise%28________%29.md): Creates a JavaScript promise object by invoking the provided executor.

### Working with Classes

- [JSClassCreate(\_:)](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease(\_:)](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain(\_:)](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
- [JSClassAttribute](jsclassattribute.md): A JavaScript class attribute.

### Working with Properties

- [JSPropertyNameAccumulatorAddName(\_:\_:)](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount(\_:)](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex(\_:\_:)](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRelease(\_:)](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyNameArrayRetain(\_:)](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyAttribute](jspropertyattribute.md): A JavaScript property attribute.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.

### Creating a Typed Array

- [JSObjectMakeTypedArray(\_:\_:\_:\_:)](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy(\_:\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer(\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset(\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.

### Accessing Typed Array Information

- [JSObjectGetTypedArrayBytesPtr(\_:\_:\_:)](jsobjectgettypedarraybytesptr%28______%29.md): Returns a temporary pointer to the backing store of a JavaScript typed array object.
- [JSObjectGetTypedArrayLength(\_:\_:\_:)](jsobjectgettypedarraylength%28______%29.md): Returns the length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteLength(\_:\_:\_:)](jsobjectgettypedarraybytelength%28______%29.md): Returns the byte length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteOffset(\_:\_:\_:)](jsobjectgettypedarraybyteoffset%28______%29.md): Returns the byte offset of a JavaScript typed array object.
- [JSObjectGetTypedArrayBuffer(\_:\_:\_:)](jsobjectgettypedarraybuffer%28______%29.md): Returns the JavaScript array buffer object to use as the backing of a JavaScript typed array object.

### Working with Array Buffers

- [JSObjectMakeArrayBufferWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](jsobjectmakearraybufferwithbytesnocopy%28____________%29.md): Creates a JavaScript array buffer object from an existing pointer.
- [JSObjectGetArrayBufferByteLength(\_:\_:\_:)](jsobjectgetarraybufferbytelength%28______%29.md): Returns the number of bytes in a JavaScript data object.
- [JSObjectGetArrayBufferBytesPtr(\_:\_:\_:)](jsobjectgetarraybufferbytesptr%28______%29.md): Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.

## See Also

### JavaScript Data Types

- [JSValueRef](jsvalueref.md): A JavaScript value.

# JSObjectRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript object.

## Declaration

```objectivec
typedef struct OpaqueJSValue * JSObjectRef;
```

<a id="Discussion"></a>

## Discussion

A [JSObjectRef](jsobjectref.md) is a [JSValueRef](jsvalueref.md).

## Topics

### Accessing the Global Object

- [JSContextGetGlobalObject](jscontextgetglobalobject%28__%29.md): Gets the global object of a JavaScript execution context.

### Working with Objects

- [JSObjectCallAsConstructor](jsobjectcallasconstructor%28__________%29.md): Calls an object as a constructor.
- [JSObjectCallAsFunction](jsobjectcallasfunction%28____________%29.md): Calls an object as a function.
- [JSObjectCopyPropertyNames](jsobjectcopypropertynames%28____%29.md): Gets the names of an object’s enumerable properties.
- [JSObjectDeleteProperty](jsobjectdeleteproperty%28________%29.md): Deletes a property from an object.
- [JSObjectGetPrivate](jsobjectgetprivate%28__%29.md): Gets an object’s private data.
- [JSObjectGetProperty](jsobjectgetproperty%28________%29.md): Gets a property from an object.
- [JSObjectGetPropertyAtIndex](jsobjectgetpropertyatindex%28________%29.md): Gets a property from an object by numeric index.
- [JSObjectGetPrototype](jsobjectgetprototype%28____%29.md): Gets an object’s prototype.
- [JSObjectHasProperty](jsobjecthasproperty%28______%29.md): Tests whether an object has a specified property.
- [JSObjectIsConstructor](jsobjectisconstructor%28____%29.md): Tests whether you can call an object as a constructor.
- [JSObjectIsFunction](jsobjectisfunction%28____%29.md): Tests whether you can call an object as a function.
- [JSObjectMake](jsobjectmake%28______%29.md): Creates a JavaScript object.
- [JSObjectMakeArray](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.
- [JSObjectMakeError](jsobjectmakeerror%28________%29.md): Creates a JavaScript error object as though invoking the built-in error constructor.
- [JSObjectMakeFunction](jsobjectmakefunction%28________________%29.md): Creates a function with a specified script as its body.
- [JSObjectMakeFunctionWithCallback](jsobjectmakefunctionwithcallback%28______%29.md): Creates a JavaScript function with a specified callback as its implementation.
- [JSObjectMakeRegExp](jsobjectmakeregexp%28________%29.md): Creates a JavaScript regular expression object as though invoking the built-in regular expression constructor.
- [JSObjectSetPrivate](jsobjectsetprivate%28____%29.md): Sets a pointer to private data on an object.
- [JSObjectSetProperty](jsobjectsetproperty%28____________%29.md): Sets a property on an object.
- [JSObjectSetPropertyAtIndex](jsobjectsetpropertyatindex%28__________%29.md): Sets a property on an object by numeric index.
- [JSObjectGetPropertyForKey](jsobjectgetpropertyforkey%28________%29.md): Gets a property from an object using a JavaScript value as the property key.
- [JSObjectSetPrototype](jsobjectsetprototype%28______%29.md): Sets an object’s prototype.
- [JSObjectDeletePropertyForKey](jsobjectdeletepropertyforkey%28________%29.md): Deletes a property from an object using a JavaScript value as the property key.
- [JSObjectHasPropertyForKey](jsobjecthaspropertyforkey%28________%29.md): Tests whether an object has the specified property using a JavaScript value as the property key.
- [JSObjectSetPropertyForKey](jsobjectsetpropertyforkey%28____________%29.md): Sets a property on an object using a JavaScript value as the property key.
- [JSObjectMakeDeferredPromise](jsobjectmakedeferredpromise%28________%29.md): Creates a JavaScript promise object by invoking the provided executor.

### Working with Classes

- [JSClassCreate](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.

### Working with Properties

- [JSPropertyNameAccumulatorAddName](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRelease](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyNameArrayRetain](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.

### Creating a Typed Array

- [JSObjectMakeTypedArray](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.

### Accessing Typed Array Information

- [JSObjectGetTypedArrayBytesPtr](jsobjectgettypedarraybytesptr%28______%29.md): Returns a temporary pointer to the backing store of a JavaScript typed array object.
- [JSObjectGetTypedArrayLength](jsobjectgettypedarraylength%28______%29.md): Returns the length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteLength](jsobjectgettypedarraybytelength%28______%29.md): Returns the byte length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteOffset](jsobjectgettypedarraybyteoffset%28______%29.md): Returns the byte offset of a JavaScript typed array object.
- [JSObjectGetTypedArrayBuffer](jsobjectgettypedarraybuffer%28______%29.md): Returns the JavaScript array buffer object to use as the backing of a JavaScript typed array object.

### Working with Array Buffers

- [JSObjectMakeArrayBufferWithBytesNoCopy](jsobjectmakearraybufferwithbytesnocopy%28____________%29.md): Creates a JavaScript array buffer object from an existing pointer.
- [JSObjectGetArrayBufferByteLength](jsobjectgetarraybufferbytelength%28______%29.md): Returns the number of bytes in a JavaScript data object.
- [JSObjectGetArrayBufferBytesPtr](jsobjectgetarraybufferbytesptr%28______%29.md): Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.

## See Also

### JavaScript Data Types

- [JSValueRef](jsvalueref.md): A JavaScript value.
