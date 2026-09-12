> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectsetpropertyatindex(_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectsetpropertyatindex(_:_:_:_:_:))

# JSObjectSetPropertyAtIndex(\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets a property on an object by numeric index.

## Declaration

```swift
func JSObjectSetPropertyAtIndex(_ ctx: JSContextRef!, _ object: JSObjectRef!, _ propertyIndex: UInt32, _ value: JSValueRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!)
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the property you want to set.
- `propertyIndex`: The property’s name as a number.
- `value`: A [JSValueRef](jsvalueref.md) to use as the property’s value.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="Discussion"></a>

## Discussion

Calling [JSObjectSetPropertyAtIndex(\_:\_:\_:\_:\_:)](jsobjectsetpropertyatindex%28__________%29.md) is equivalent to calling [JSObjectSetProperty(\_:\_:\_:\_:\_:\_:)](jsobjectsetproperty%28____________%29.md) with a string that contain `propertyIndex`, but [JSObjectSetPropertyAtIndex(\_:\_:\_:\_:\_:)](jsobjectsetpropertyatindex%28__________%29.md) provides optimized access to numeric properties.

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

# JSObjectSetPropertyAtIndex (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets a property on an object by numeric index.

## Declaration

```objectivec
void JSObjectSetPropertyAtIndex(JSContextRef ctx, JSObjectRef object, unsigned int propertyIndex, JSValueRef value, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the property you want to set.
- `propertyIndex`: The property’s name as a number.
- `value`: A [JSValueRef](jsvalueref.md) to use as the property’s value.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="Discussion"></a>

## Discussion

Calling [JSObjectSetPropertyAtIndex](jsobjectsetpropertyatindex%28__________%29.md) is equivalent to calling [JSObjectSetProperty](jsobjectsetproperty%28____________%29.md) with a string that contain `propertyIndex`, but [JSObjectSetPropertyAtIndex](jsobjectsetpropertyatindex%28__________%29.md) provides optimized access to numeric properties.

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
