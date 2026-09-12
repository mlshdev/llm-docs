> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576420-wsmethodinvocationsetparameters](https://developer.apple.com/documentation/coreservices/1576420-wsmethodinvocationsetparameters)

# WSMethodInvocationSetParameters

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Set the parameter names, types, and order for a method invocation.

## Declaration

```objectivec
void WSMethodInvocationSetParameters(WSMethodInvocationRef invocation, CFDictionaryRef parameters, CFArrayRef parameterOrder);
```

## Parameters

- `invocation`: The invocation reference.
- `parameters`: A `CFDictionaryRef` of `CFString` keys and `CFTypeRef` values.
- `parameterOrder`: A `CFArrayRef` of `CFString` parameter names in order for XML-RPC.

<a id="discussion"></a>

## Discussion

Sets the parameters for a method invocation. The parameters dictionary should contain the names and types of the parameters. The parameter order array should contain the names of the parameters in the order they should be passed. The `parameterOrder` may be `NULL`, in which case the order of the parameters is undefined.  If the parameters dictionary contains more or fewer parameters than are specified by the order, the behavior is undefined.
