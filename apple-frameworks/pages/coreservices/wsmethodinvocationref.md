> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsmethodinvocationref](https://developer.apple.com/documentation/coreservices/wsmethodinvocationref)

# WSMethodInvocationRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

An opaque reference to a web services method invocation.

## Declaration

```objectivec
typedef struct OpaqueWSMethodInvocationRef *WSMethodInvocationRef;
```

<a id="discussion"></a>

## Discussion

The `WSMethodInvocationRef` is the fundamental object of web services. Create it using `WSMethodInvocationCreate`. Use it to set parameters, callbacks, and settings for a method invocation, and to invoke a method and obtain a response.
