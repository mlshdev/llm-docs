> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectfinalizecallback](https://developer.apple.com/documentation/javascriptcore/jsobjectfinalizecallback)

# JSObjectFinalizeCallback (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for finalizing an object (preparing it for garbage collection).

## Declaration

```swift
typealias JSObjectFinalizeCallback = (JSObjectRef?) -> Void
```

## Parameters

- `object`: The [JSObjectRef](jsobjectref.md) to finalize.

<a id="Discussion"></a>

## Discussion

You can finalize an object on any thread.

If you name your function `Finalize`, you declare it like this:

```c
void Finalize(JSObjectRef object);
```

The system calls the finalize callback on the most-derived class first, and the least-derived class (the parent class) last.

You must not call any function that may cause a garbage collection or an allocation of a garbage collected object from within a [JSObjectFinalizeCallback](jsobjectfinalizecallback.md). This includes all functions that have a [JSContextRef](jscontextref.md) parameter.

## See Also

### Managing Callbacks

- [initialize](jsclassdefinition/initialize.md): The callback for creating the object.
- [JSObjectInitializeCallback](jsobjectinitializecallback.md): The callback type for first creating an object.
- [finalize](jsclassdefinition/finalize.md): The callback for preparing the object for garbage collection.
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

# JSObjectFinalizeCallback (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for finalizing an object (preparing it for garbage collection).

## Declaration

```objectivec
typedef void (*)(struct OpaqueJSValue *) JSObjectFinalizeCallback;
```

## Parameters

- `object`: The [JSObjectRef](jsobjectref.md) to finalize.

<a id="Discussion"></a>

## Discussion

You can finalize an object on any thread.

If you name your function `Finalize`, you declare it like this:

```c
void Finalize(JSObjectRef object);
```

The system calls the finalize callback on the most-derived class first, and the least-derived class (the parent class) last.

You must not call any function that may cause a garbage collection or an allocation of a garbage collected object from within a [JSObjectFinalizeCallback](jsobjectfinalizecallback.md). This includes all functions that have a [JSContextRef](jscontextref.md) parameter.

## See Also

### Managing Callbacks

- [initialize](jsclassdefinition/initialize.md): The callback for creating the object.
- [JSObjectInitializeCallback](jsobjectinitializecallback.md): The callback type for first creating an object.
- [finalize](jsclassdefinition/finalize.md): The callback for preparing the object for garbage collection.
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
