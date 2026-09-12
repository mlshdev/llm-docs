> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjecthasinstancecallback](https://developer.apple.com/documentation/javascriptcore/jsobjecthasinstancecallback)

# JSObjectHasInstanceCallback (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for checking whether an object is an instance of a particular type.

## Declaration

```swift
typealias JSObjectHasInstanceCallback = (JSContextRef?, JSObjectRef?, JSValueRef?, UnsafeMutablePointer<JSValueRef?>?) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `constructor`: The [JSObjectRef](jsobjectref.md) that is the target of the `instanceof` expression.
- `possibleInstance`: The [JSValueRef](jsvalueref.md) to test to determine if it’s an instance of `constructor`.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `possibleInstance` is an instance of `constructor` according to the JavaScript `instanceof` expression; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you name your function `HasInstance`, you declare it like this:

```c
bool HasInstance(JSContextRef ctx, JSObjectRef constructor, JSValueRef possibleInstance, JSValueRef* exception);
```

If the JavaScript expression `someValue instanceof myObject` invokes your callback, it sets `constructor` to `myObject`, and `possibleInstance` to `someValue`.

If this callback is `NULL`, `instanceof` expressions that target your object return [false](https://developer.apple.com/documentation/swift/false).

Standard JavaScript practice calls for objects that implement the [callAsConstructor](jsclassdefinition/callasconstructor.md) callback to implement the [hasInstance](jsclassdefinition/hasinstance.md) callback, as well.

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

# JSObjectHasInstanceCallback (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The callback type for checking whether an object is an instance of a particular type.

## Declaration

```objectivec
typedef _Bool (*)(const struct OpaqueJSContext *, struct OpaqueJSValue *, const struct OpaqueJSValue *, const struct OpaqueJSValue **) JSObjectHasInstanceCallback;
```

## Parameters

- `ctx`: The execution context to use.
- `constructor`: The [JSObjectRef](jsobjectref.md) that is the target of the `instanceof` expression.
- `possibleInstance`: The [JSValueRef](jsvalueref.md) to test to determine if it’s an instance of `constructor`.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to return an exception in, if any.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `possibleInstance` is an instance of `constructor` according to the JavaScript `instanceof` expression; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you name your function `HasInstance`, you declare it like this:

```c
bool HasInstance(JSContextRef ctx, JSObjectRef constructor, JSValueRef possibleInstance, JSValueRef* exception);
```

If the JavaScript expression `someValue instanceof myObject` invokes your callback, it sets `constructor` to `myObject`, and `possibleInstance` to `someValue`.

If this callback is `NULL`, `instanceof` expressions that target your object return [false](https://developer.apple.com/documentation/swift/false).

Standard JavaScript practice calls for objects that implement the [callAsConstructor](jsclassdefinition/callasconstructor.md) callback to implement the [hasInstance](jsclassdefinition/hasinstance.md) callback, as well.

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
