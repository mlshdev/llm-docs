> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectdeletepropertycallback](https://developer.apple.com/documentation/javascriptcore/jsobjectdeletepropertycallback)

# JSObjectDeletePropertyCallback (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for deleting a property.

## Declaration

```swift
typealias JSObjectDeletePropertyCallback = (JSContextRef?, JSObjectRef?, JSStringRef?, UnsafeMutablePointer<JSValueRef?>?) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) to delete the property in.
- `propertyName`: A [JSStringRef](jsstringref.md) that contains the name of the property to delete.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the deletion of `propertyName` succeeds; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you name your function `DeleteProperty`, you declare it like this:

```c
bool DeleteProperty(JSContextRef ctx, JSObjectRef object, JSStringRef propertyName, JSValueRef* exception);
```

If this function returns [false](https://developer.apple.com/documentation/swift/false), the delete request forwards to the object’s statically declared properties, and then its parent class chain (which includes the default object class).

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
- [getPropertyNames](jsclassdefinition/getpropertynames.md): The callback for collecting the names of an object’s properties.
- [JSObjectGetPropertyNamesCallback](jsobjectgetpropertynamescallback.md): The callback type for collecting the names of an object’s properties.
- [callAsFunction](jsclassdefinition/callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.

# JSObjectDeletePropertyCallback (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for deleting a property.

## Declaration

```objectivec
typedef _Bool (*)(const struct OpaqueJSContext *, struct OpaqueJSValue *, struct OpaqueJSString *, const struct OpaqueJSValue **) JSObjectDeletePropertyCallback;
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) to delete the property in.
- `propertyName`: A [JSStringRef](jsstringref.md) that contains the name of the property to delete.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the deletion of `propertyName` succeeds; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you name your function `DeleteProperty`, you declare it like this:

```c
bool DeleteProperty(JSContextRef ctx, JSObjectRef object, JSStringRef propertyName, JSValueRef* exception);
```

If this function returns [false](https://developer.apple.com/documentation/swift/false), the delete request forwards to the object’s statically declared properties, and then its parent class chain (which includes the default object class).

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
- [getPropertyNames](jsclassdefinition/getpropertynames.md): The callback for collecting the names of an object’s properties.
- [JSObjectGetPropertyNamesCallback](jsobjectgetpropertynamescallback.md): The callback type for collecting the names of an object’s properties.
- [callAsFunction](jsclassdefinition/callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.
