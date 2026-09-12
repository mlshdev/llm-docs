> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576406-wsmethodinvocationcreate](https://developer.apple.com/documentation/coreservices/1576406-wsmethodinvocationcreate)

# WSMethodInvocationCreate

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates a reference to a method invocation, containing the URL of the service, the operation name, and the protocol.

## Declaration

```objectivec
WSMethodInvocationRef WSMethodInvocationCreate(CFURLRef url, CFStringRef methodName, CFStringRef protocol);
```

## Parameters

- `url`: The endpoint of the service.
- `methodName`: The name of the operation to be called.
- `protocol`: A string defined above that determines the type of invocation object to create. There are string constants for XML-RPC, SOAP 1.1, or SOAP 1.2. Other protocols are not recognized.

<a id="return_value"></a>

## Return Value

A `WSMethodInvocationRef` object that can be passed to `WSMethodInvocationInvoke` or scheduled with a run loop.

<a id="discussion"></a>

## Discussion

Creates a web services method invocation object. This is the fundamental object used when passing method parameters or settings, callbacks, or custom serializers or deserializers. This object may be executed synchronously using `WSMethodInvocationInvoke` or scheduled on a run loop for asynchronous execution using `WSMethodInvocationScheduleWithRunLoop`.
