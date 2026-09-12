> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassdefinition/hasproperty](https://developer.apple.com/documentation/javascriptcore/jsclassdefinition/hasproperty)

# hasProperty (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback for determining whether an object has a property.

## Declaration

```swift
var hasProperty: JSObjectHasPropertyCallback!
```

## See Also

### Managing Callbacks

- [initialize](initialize.md): The callback for creating the object.
- [JSObjectInitializeCallback](../jsobjectinitializecallback.md): The callback type for first creating an object.
- [finalize](finalize.md): The callback for preparing the object for garbage collection.
- [JSObjectFinalizeCallback](../jsobjectfinalizecallback.md): The callback type for finalizing an object (preparing it for garbage collection).
- [JSObjectHasPropertyCallback](../jsobjecthaspropertycallback.md): The callback type for determining whether an object has a property.
- [getProperty](getproperty.md): The callback for getting a property’s value.
- [JSObjectGetPropertyCallback](../jsobjectgetpropertycallback.md): The callback type for getting a property’s value.
- [setProperty](setproperty.md): The callback for setting a property’s value.
- [JSObjectSetPropertyCallback](../jsobjectsetpropertycallback.md): The callback type for setting a property’s value.
- [deleteProperty](deleteproperty.md): The callback for deleting a property.
- [JSObjectDeletePropertyCallback](../jsobjectdeletepropertycallback.md): The callback type for deleting a property.
- [getPropertyNames](getpropertynames.md): The callback for collecting the names of an object’s properties.
- [JSObjectGetPropertyNamesCallback](../jsobjectgetpropertynamescallback.md): The callback type for collecting the names of an object’s properties.
- [callAsFunction](callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](../jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.

# hasProperty (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback for determining whether an object has a property.

## Declaration

```objectivec
JSObjectHasPropertyCallback hasProperty;
```

## See Also

### Managing Callbacks

- [initialize](initialize.md): The callback for creating the object.
- [JSObjectInitializeCallback](../jsobjectinitializecallback.md): The callback type for first creating an object.
- [finalize](finalize.md): The callback for preparing the object for garbage collection.
- [JSObjectFinalizeCallback](../jsobjectfinalizecallback.md): The callback type for finalizing an object (preparing it for garbage collection).
- [JSObjectHasPropertyCallback](../jsobjecthaspropertycallback.md): The callback type for determining whether an object has a property.
- [getProperty](getproperty.md): The callback for getting a property’s value.
- [JSObjectGetPropertyCallback](../jsobjectgetpropertycallback.md): The callback type for getting a property’s value.
- [setProperty](setproperty.md): The callback for setting a property’s value.
- [JSObjectSetPropertyCallback](../jsobjectsetpropertycallback.md): The callback type for setting a property’s value.
- [deleteProperty](deleteproperty.md): The callback for deleting a property.
- [JSObjectDeletePropertyCallback](../jsobjectdeletepropertycallback.md): The callback type for deleting a property.
- [getPropertyNames](getpropertynames.md): The callback for collecting the names of an object’s properties.
- [JSObjectGetPropertyNamesCallback](../jsobjectgetpropertynamescallback.md): The callback type for collecting the names of an object’s properties.
- [callAsFunction](callasfunction.md): The callback for calling an object as a function.
- [JSObjectCallAsFunctionCallback](../jsobjectcallasfunctioncallback.md): The callback type for calling an object as a function.
