> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/wsmethodinvocationref

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
