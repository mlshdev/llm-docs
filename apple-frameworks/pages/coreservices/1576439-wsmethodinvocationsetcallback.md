> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576439-wsmethodinvocationsetcallback](https://developer.apple.com/documentation/coreservices/1576439-wsmethodinvocationsetcallback)

# WSMethodInvocationSetCallBack

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Set a callback to handle the response to an asynchronous method invocation.

## Declaration

```objectivec
void WSMethodInvocationSetCallBack(WSMethodInvocationRef invocation, WSMethodInvocationCallBackProcPtr clientCB, WSClientContext *context);
```

## Parameters

- `invocation`: The method invocation reference.
- `clientCB`: A `ProcPtr` to be called when the invocation completes.
- `context`: A pointer to a `WSClientContext`. The structure will be copied.

<a id="discussion"></a>

## Discussion

Sets the callback to handle the response for an asynchronous method invocation.  The callback is passed a reference to the method invocation just completed, a pointer to private data, and a dictionary that contains the return values for the operation or a fault structure. Test for a fault using `WSMethodResultIsFault`. The callback parses the method response dictionary, which contains the deserialized return data, and may contain the raw XML of the return message as well. The callback is responsible for releasing the result ref. 

Call with a `clientCB` and context of `NULL` to clear the invocation callback.
