> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectgetpropertynamescallback](https://developer.apple.com/documentation/javascriptcore/jsobjectgetpropertynamescallback)

# JSObjectGetPropertyNamesCallback (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for collecting the names of an object’s properties.

## Declaration

```swift
typealias JSObjectGetPropertyNamesCallback = (JSContextRef?, JSObjectRef?, JSPropertyNameAccumulatorRef?) -> Void
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the property names to collect.
- `accumulator`: A JavaScript property name accumulator to accumulate the names of the object’s properties in.

<a id="Discussion"></a>

## Discussion

If you name your function `GetPropertyNames`, you declare it like this:

```c
void GetPropertyNames(JSContextRef ctx, JSObjectRef object, JSPropertyNameAccumulatorRef propertyNames);
```

[JSObjectCopyPropertyNames(\_:\_:)](jsobjectcopypropertynames%28____%29.md) and JavaScript `for-in` loops use property name accumulators.

Use [JSPropertyNameAccumulatorAddName(\_:\_:)](jspropertynameaccumulatoraddname%28____%29.md) to add property names to `accumulator`. A class’s [getPropertyNames](jsclassdefinition/getpropertynames.md) callback only needs to provide the names of properties that the class vends through a custom [getProperty](jsclassdefinition/getproperty.md) or [setProperty](jsclassdefinition/setproperty.md) callback. The system adds other properties independently, including statically declared properties, properties that other classes vend, and properties that belong to the object’s prototype.

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
- [callAsFunction](jsclassdefinition/callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.

# JSObjectGetPropertyNamesCallback (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for collecting the names of an object’s properties.

## Declaration

```objectivec
typedef void (*)(const struct OpaqueJSContext *, struct OpaqueJSValue *, struct OpaqueJSPropertyNameAccumulator *) JSObjectGetPropertyNamesCallback;
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the property names to collect.
- `accumulator`: A JavaScript property name accumulator to accumulate the names of the object’s properties in.

<a id="Discussion"></a>

## Discussion

If you name your function `GetPropertyNames`, you declare it like this:

```c
void GetPropertyNames(JSContextRef ctx, JSObjectRef object, JSPropertyNameAccumulatorRef propertyNames);
```

[JSObjectCopyPropertyNames](jsobjectcopypropertynames%28____%29.md) and JavaScript `for-in` loops use property name accumulators.

Use [JSPropertyNameAccumulatorAddName](jspropertynameaccumulatoraddname%28____%29.md) to add property names to `accumulator`. A class’s [getPropertyNames](jsclassdefinition/getpropertynames.md) callback only needs to provide the names of properties that the class vends through a custom [getProperty](jsclassdefinition/getproperty.md) or [setProperty](jsclassdefinition/setproperty.md) callback. The system adds other properties independently, including statically declared properties, properties that other classes vend, and properties that belong to the object’s prototype.

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
- [callAsFunction](jsclassdefinition/callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.
