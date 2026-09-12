> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576428-wsmethodinvocationinvoke](https://developer.apple.com/documentation/coreservices/1576428-wsmethodinvocationinvoke)

# WSMethodInvocationInvoke

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Invokes an web services operation synchronously.

## Declaration

```objectivec
CFDictionaryRef WSMethodInvocationInvoke(WSMethodInvocationRef invocation);
```

## Parameters

- `invocation`: The method invocation reference.

<a id="return_value"></a>

## Return Value

a `CFDictionaryRef` containing the result of the execution or a fault, and optional debug information.

<a id="discussion"></a>

## Discussion

Executes the invocation synchronously. If the call was successful, the result contains the result of the invocation. If the invocation failed for any reason, including out of memory or invalid parameter errors, then the result contains a fault structure. You must release the result when you are done with it. To execute the invocation asynchronously (recommended), use WSMethodInvocationScheduleWithRunLoop.
