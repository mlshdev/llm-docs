> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectconverttotypecallback](https://developer.apple.com/documentation/javascriptcore/jsobjectconverttotypecallback)

# JSObjectConvertToTypeCallback (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for converting an object to a particular JavaScript type.

## Declaration

```swift
typealias JSObjectConvertToTypeCallback = (JSContextRef?, JSObjectRef?, JSType, UnsafeMutablePointer<JSValueRef?>?) -> JSValueRef?
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) to convert.
- `type`: A [JSType](jstype.md) that specifies the JavaScript type to convert to.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

The object’s converted value, or `NULL` if the object doesn’t convert.

<a id="Discussion"></a>

## Discussion

If you name your function `ConvertToType`, you declare it like this:

```c
JSValueRef ConvertToType(JSContextRef ctx, JSObjectRef object, JSType type, JSValueRef* exception);
```

If this function returns [false](https://developer.apple.com/documentation/swift/false), the conversion request forwards to the object’s parent class chain (which includes the default object class).

The system only invokes this function when converting an object to [kJSTypeNumber](kjstypenumber.md) or [kJSTypeString](kjstypestring.md). An object that converts to [kJSTypeBoolean](kjstypeboolean.md) is `true`. An object that converts to [kJSTypeObject](kjstypeobject.md) is itself.

## See Also

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

# JSObjectConvertToTypeCallback (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for converting an object to a particular JavaScript type.

## Declaration

```objectivec
typedef const struct OpaqueJSValue *(*)(const struct OpaqueJSContext *, struct OpaqueJSValue *, JSType, const struct OpaqueJSValue **) JSObjectConvertToTypeCallback;
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) to convert.
- `type`: A [JSType](jstype.md) that specifies the JavaScript type to convert to.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

The object’s converted value, or `NULL` if the object doesn’t convert.

<a id="Discussion"></a>

## Discussion

If you name your function `ConvertToType`, you declare it like this:

```c
JSValueRef ConvertToType(JSContextRef ctx, JSObjectRef object, JSType type, JSValueRef* exception);
```

If this function returns [false](https://developer.apple.com/documentation/swift/false), the conversion request forwards to the object’s parent class chain (which includes the default object class).

The system only invokes this function when converting an object to [kJSTypeNumber](kjstypenumber.md) or [kJSTypeString](kjstypestring.md). An object that converts to [kJSTypeBoolean](kjstypeboolean.md) is `true`. An object that converts to [kJSTypeObject](kjstypeobject.md) is itself.

## See Also

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
