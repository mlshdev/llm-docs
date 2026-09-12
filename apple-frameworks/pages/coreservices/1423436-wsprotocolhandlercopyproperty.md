> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423436-wsprotocolhandlercopyproperty](https://developer.apple.com/documentation/coreservices/1423436-wsprotocolhandlercopyproperty)

# WSProtocolHandlerCopyProperty

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Returns a copy of a property from a protocol handler reference.

## Declaration

```objectivec
CFTypeRef WSProtocolHandlerCopyProperty(WSProtocolHandlerRef ref, CFStringRef propertyName);
```

## Parameters

- `ref`: A `WSProtocolHandlerRef`, as created by `WSProtocolHandlerCreate`.
- `propertyName`: The name of the property to copy.

<a id="return_value"></a>

## Return Value

The `CFTypeRef` value of the property, or `NULL` if the specified property does not exist.

<a id="discussion"></a>

## Discussion

Returns a property from a protocol handler.  If the result is `NULL`, the property doesn't exist.  Since this is a Copy call, you must release the result.
