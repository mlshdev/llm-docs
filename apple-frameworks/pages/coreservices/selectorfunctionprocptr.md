> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/selectorfunctionprocptr](https://developer.apple.com/documentation/coreservices/selectorfunctionprocptr)

# SelectorFunctionProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a pointer to a selector callback function that returns information associated with your own selector code.

## Declaration

```objectivec
typedef OSErr (*SelectorFunctionProcPtr)(OSType selector, SInt32 *response);
```

## Parameters

- `selector`: The selector code that triggers the function. This should be a four-character sequence similar to those defined in [Constants](carbon_core/gestalt_manager.md#1667886).
- `response`: On output, the information associated with the selector code.

<a id="return_value"></a>

## Return Value

A result code. See [Gestalt Manager](carbon_core/gestalt_manager.md).

<a id="discussion"></a>

## Discussion

Your selector function places the requested information in the `response` parameter and returns a result code. If the information is not available, the selector function returns the appropriate error code, which the `Gestalt` function returns as its function result.

A selector function can call `Gestalt` or even other selector functions.
