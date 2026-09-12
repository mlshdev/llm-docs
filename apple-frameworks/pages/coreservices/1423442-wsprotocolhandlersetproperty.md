> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423442-wsprotocolhandlersetproperty](https://developer.apple.com/documentation/coreservices/1423442-wsprotocolhandlersetproperty)

# WSProtocolHandlerSetProperty

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Sets a property in a specified protocol handler.

## Declaration

```objectivec
void WSProtocolHandlerSetProperty(WSProtocolHandlerRef ref, CFStringRef propertyName, CFTypeRef propertyValue);
```

## Parameters

- `ref`: The protocol handler.
- `propertyName`: The name of the property to set.
- `propertyValue`: The value of the property to set.

<a id="discussion"></a>

## Discussion

This function sets the value of a named property in a method implementation.
