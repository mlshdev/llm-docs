> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576400-wsmethodinvocationcreatefromseri](https://developer.apple.com/documentation/coreservices/1576400-wsmethodinvocationcreatefromseri)

# WSMethodInvocationCreateFromSerialization

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates a method invocation object from an XML serialization.

## Declaration

```objectivec
WSMethodInvocationRef WSMethodInvocationCreateFromSerialization(CFDataRef contract);
```

## Parameters

- `contract`: The result of a previously serialized `WSMethodInvocationRef`.

<a id="return_value"></a>

## Return Value

A `WSMethodInvocationRef` object that can be passed to `WSMethodInvocationInvoke` or scheduled with a run loop.

<a id="discussion"></a>

## Discussion

Creates a web services method invocation object from a previously serialized contract. You can use this with a serialization returned from `WSMethodInvocationCopySerialization`.
