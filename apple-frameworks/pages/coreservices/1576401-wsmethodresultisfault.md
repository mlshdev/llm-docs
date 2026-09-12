> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576401-wsmethodresultisfault](https://developer.apple.com/documentation/coreservices/1576401-wsmethodresultisfault)

# WSMethodResultIsFault

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Tests a method result dictionary for a fault condition.

## Declaration

```objectivec
Boolean WSMethodResultIsFault(CFDictionaryRef methodResult);
```

## Parameters

- `methodResult`: A method result dictionary.

<a id="return_value"></a>

## Return Value

A boolean TRUE if the result contains a fault condition.

<a id="discussion"></a>

## Discussion

If the result is a fault, look in the `kWSFaultCode`, `kWSFaultString`, and `kWSFaultExtra` fields of the dictionary.  If not a  fault, `kWSMethodInvocationResult` will contain the result of the execution. If debugging information was requested, it will be available in the dictionary as well.
