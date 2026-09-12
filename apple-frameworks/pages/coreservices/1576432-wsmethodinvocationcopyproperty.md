> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576432-wsmethodinvocationcopyproperty](https://developer.apple.com/documentation/coreservices/1576432-wsmethodinvocationcopyproperty)

# WSMethodInvocationCopyProperty

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates a copy of a named property of the invocation reference.

## Declaration

```objectivec
CFTypeRef WSMethodInvocationCopyProperty(WSMethodInvocationRef invocation, CFStringRef propertyName);
```

## Parameters

- `invocation`: The method invocation.
- `propertyName`: The name of the property to retrieve.

<a id="return_value"></a>

## Return Value

the `CFTypeRef` value of the property, or `NULL` if the property was not specified.

<a id="discussion"></a>

## Discussion

Returns a property from an invocation.  If the result is `NULL`, the property doesn't exist.  Being a copy call, you must release the result.
