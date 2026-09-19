> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1576399-wsmethodinvocationcopyparameters

# WSMethodInvocationCopyParameters

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates a copy of the parameters dictionary and sets the order in an array.

## Declaration

```objectivec
CFDictionaryRef WSMethodInvocationCopyParameters(WSMethodInvocationRef invocation, CFArrayRef *parameterOrder);
```

## Parameters

- `invocation`: the invocation
- `parameterOrder`: a pointer to a `CFArray` which will will receive the names, in their specified order, of the input parameter values.  This parameter may be `NULL`.

<a id="return_value"></a>

## Return Value

a `CFDictionaryRef`

<a id="discussion"></a>

## Discussion

Copies the parameters from the invocation. The resulting dictionary contains the parameter dictionary. The `parameterOrder` output parameter, if not `NULL`, will contain the order used to serialize the parameters.
