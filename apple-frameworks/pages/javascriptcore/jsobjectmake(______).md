> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmake(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmake(_:_:_:))

# JSObjectMake(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript object.

## Declaration

```swift
func JSObjectMake(_ ctx: JSContextRef!, _ jsClass: JSClassRef!, _ data: UnsafeMutableRawPointer!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `jsClass`: The [JSClassRef](jsclassref.md) to assign to the object. Pass `NULL` to use the default object class.
- `data`: A pointer to set as the object’s private data. Pass `NULL` to specify no private data.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) with the specified class and private data.

<a id="Discussion"></a>

## Discussion

The default object class doesn’t allocate storage for private data, so you must provide a non-`NULL` `jsClass` to [JSObjectMake(\_:\_:\_:)](jsobjectmake%28______%29.md) if you want your object to be able to store private data.

The system sets `data` on the created object before calling the initialize methods in its class chain. This enables the initialize methods to retrieve and manipulate data through [JSObjectGetPrivate(\_:)](jsobjectgetprivate%28__%29.md).

## See Also

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
- [JSObjectMakeArray(\_:\_:\_:\_:)](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor(\_:\_:\_:)](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate(\_:\_:\_:\_:)](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.
- [JSObjectMakeError(\_:\_:\_:\_:)](jsobjectmakeerror%28________%29.md): Creates a JavaScript error object as though invoking the built-in error constructor.

# JSObjectMake (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript object.

## Declaration

```objectivec
JSObjectRefJSObjectMake(JSContextRef ctx, JSClassRef jsClass, void *data);
```

## Parameters

- `ctx`: The execution context to use.
- `jsClass`: The [JSClassRef](jsclassref.md) to assign to the object. Pass `NULL` to use the default object class.
- `data`: A pointer to set as the object’s private data. Pass `NULL` to specify no private data.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) with the specified class and private data.

<a id="Discussion"></a>

## Discussion

The default object class doesn’t allocate storage for private data, so you must provide a non-`NULL` `jsClass` to [JSObjectMake](jsobjectmake%28______%29.md) if you want your object to be able to store private data.

The system sets `data` on the created object before calling the initialize methods in its class chain. This enables the initialize methods to retrieve and manipulate data through [JSObjectGetPrivate](jsobjectgetprivate%28__%29.md).

## See Also

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
- [JSObjectMakeArray](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.
- [JSObjectMakeError](jsobjectmakeerror%28________%29.md): Creates a JavaScript error object as though invoking the built-in error constructor.
