> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectcallasconstructorcallback](https://developer.apple.com/documentation/javascriptcore/jsobjectcallasconstructorcallback)

# JSObjectCallAsConstructorCallback (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for using an object as a constructor.

## Declaration

```swift
typealias JSObjectCallAsConstructorCallback = (JSContextRef?, JSObjectRef?, Int, UnsafePointer<JSValueRef?>?, UnsafeMutablePointer<JSValueRef?>?) -> JSObjectRef?
```

## Parameters

- `ctx`: The execution context to use.
- `constructor`: A [JSObjectRef](jsobjectref.md) that is the constructor to call.
- `argumentCount`: An integer count of the number of arguments in `arguments`.
- `arguments`: A [JSValueRef](jsvalueref.md) array of the arguments to pass to the function.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is the constructor’s return value.

<a id="Discussion"></a>

## Discussion

If you name your function `CallAsConstructor`, you declare it like this:

```c
JSObjectRef CallAsConstructor(JSContextRef ctx, JSObjectRef constructor, size_t argumentCount, const JSValueRef arguments[], JSValueRef* exception);
```

If the JavaScript expression `new myConstructor()` invokes your callback, it sets `constructor` to `myConstructor`.

If this callback is `NULL`, using your object as a constructor in a `new` expression throws an exception.

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

# JSObjectCallAsConstructorCallback (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for using an object as a constructor.

## Declaration

```objectivec
typedef struct OpaqueJSValue *(*)(const struct OpaqueJSContext *, struct OpaqueJSValue *, unsigned long, const struct OpaqueJSValue *const *, const struct OpaqueJSValue **) JSObjectCallAsConstructorCallback;
```

## Parameters

- `ctx`: The execution context to use.
- `constructor`: A [JSObjectRef](jsobjectref.md) that is the constructor to call.
- `argumentCount`: An integer count of the number of arguments in `arguments`.
- `arguments`: A [JSValueRef](jsvalueref.md) array of the arguments to pass to the function.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is the constructor’s return value.

<a id="Discussion"></a>

## Discussion

If you name your function `CallAsConstructor`, you declare it like this:

```c
JSObjectRef CallAsConstructor(JSContextRef ctx, JSObjectRef constructor, size_t argumentCount, const JSValueRef arguments[], JSValueRef* exception);
```

If the JavaScript expression `new myConstructor()` invokes your callback, it sets `constructor` to `myConstructor`.

If this callback is `NULL`, using your object as a constructor in a `new` expression throws an exception.

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
