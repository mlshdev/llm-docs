> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576441-wsmethodinvocationcopyserializat](https://developer.apple.com/documentation/coreservices/1576441-wsmethodinvocationcopyserializat)

# WSMethodInvocationCopySerialization

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates an XML serialization of a method invocation.

## Declaration

```objectivec
CFDataRef WSMethodInvocationCopySerialization(WSMethodInvocationRef invocation);
```

## Parameters

- `invocation`: The invocation to serialize.

<a id="return_value"></a>

## Return Value

A `CFDataRef` of the serialized XML method invocation.

<a id="discussion"></a>

## Discussion

Creates a serialized version of the method invocation which can be used at a later time.
