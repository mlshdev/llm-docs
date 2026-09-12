> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsmethodinvocationcallbackprocptr](https://developer.apple.com/documentation/coreservices/wsmethodinvocationcallbackprocptr)

# WSMethodInvocationCallBackProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+ (deprecated in 10.8)

This is the callback that handles method invocation completion when the method is invoked asynchronously.

## Declaration

```objectivec
typedef void (*WSMethodInvocationCallBackProcPtr)(WSMethodInvocationRef invocation, void *info, CFDictionaryRef outRef);
```

## Parameters

- `invocation`: The method invocation for which this callback handles completion.
- `info`: Private callback data.
- `outRef`: A `CFDictionaryRef` containing the method invocation result or a fault structure, and optional debug information.

<a id="discussion"></a>

## Discussion

If your callback is named MyCompletionCallback, declare it like this:

<a id="1681575"></a>

### Discussion

Your callback is passed a reference to the invocation just completed, a pointer to private data, and a dictionary that contains the return value or falut for this invocation.  The  callback is responsible for releasing the dictionary when it is  no longer used.
