> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmakedeferredpromise(_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmakedeferredpromise(_:_:_:_:))

# JSObjectMakeDeferredPromise(\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript promise object by invoking the provided executor.

## Declaration

```swift
func JSObjectMakeDeferredPromise(_ ctx: JSContextRef!, _ resolve: UnsafeMutablePointer<JSObjectRef?>!, _ reject: UnsafeMutablePointer<JSObjectRef?>!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `resolve`: A pointer to a [JSObjectRef](jsobjectref.md) to store the resolve function in for the new promise. Pass `NULL` if you don’t want to store the resolve callback.
- `reject`: A pointer to a [JSObjectRef](jsobjectref.md) to store the reject function in for the new promise. Pass `NULL` if you don’t want to store the reject callback.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that’s a promise, or `NULL` if an exception occurs.

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
- [JSObjectMake(\_:\_:\_:)](jsobjectmake%28______%29.md): Creates a JavaScript object.
- [JSObjectMakeArray(\_:\_:\_:\_:)](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor(\_:\_:\_:)](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate(\_:\_:\_:\_:)](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.

# JSObjectMakeDeferredPromise (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript promise object by invoking the provided executor.

## Declaration

```objectivec
JSObjectRefJSObjectMakeDeferredPromise(JSContextRef ctx, JSObjectRef*resolve, JSObjectRef*reject, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `resolve`: A pointer to a [JSObjectRef](jsobjectref.md) to store the resolve function in for the new promise. Pass `NULL` if you don’t want to store the resolve callback.
- `reject`: A pointer to a [JSObjectRef](jsobjectref.md) to store the reject function in for the new promise. Pass `NULL` if you don’t want to store the reject callback.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that’s a promise, or `NULL` if an exception occurs.

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
- [JSObjectMake](jsobjectmake%28______%29.md): Creates a JavaScript object.
- [JSObjectMakeArray](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.
