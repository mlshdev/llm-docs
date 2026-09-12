> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ssldisposecontext](https://developer.apple.com/documentation/security/ssldisposecontext)

# SSLDisposeContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Disposes of a Secure Sockets Layer (SSL) session context.

> You use this function to dispose of a context that you create with [SSLNewContext](sslnewcontext.md), but that function is deprecated. Instead, use [SSLCreateContext](sslcreatecontext%28______%29.md) to create a new context and use [CFRelease](../corefoundation/cfrelease.md) to dispose of that context.

## Declaration

```objectivec
OSStatus SSLDisposeContext(SSLContextRef context);
```

## Parameters

- `context`: A reference to the SSL session context to dispose.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

When you are completely finished with a secure session, you should dispose of the SSL session context in order to release the memory associated with the session.
