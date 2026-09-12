> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576407-wsmethodinvocationsetproperty](https://developer.apple.com/documentation/coreservices/1576407-wsmethodinvocationsetproperty)

# WSMethodInvocationSetProperty

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Sets a named property of the method invocation.

## Declaration

```objectivec
void WSMethodInvocationSetProperty(WSMethodInvocationRef invocation, CFStringRef propertyName, CFTypeRef propertyValue);
```

## Parameters

- `invocation`: The method invocation reference.
- `propertyName`: A `CFStringRef` name of the property to set.
- `propertyValue`: A `CFTypeRef` containing the new property value.

<a id="discussion"></a>

## Discussion

Adds properties to a method invocation.  These properties can be user-defined or one of the declared properties, which may alter the behavior of the invocation. Declared properties start with the string "kWS," for example `kWSHTTPFollowsRedirects`. Use these properties to add SOAP action headers or to set debug properties, such as including the raw XML in the method response dictionary. Properties are serialized along with the contract, so you should avoid using raw pointers in a `CFNumber`, for example.
