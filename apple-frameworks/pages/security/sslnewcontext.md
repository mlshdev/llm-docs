> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslnewcontext](https://developer.apple.com/documentation/security/sslnewcontext)

# SSLNewContext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Creates a new Secure Sockets Layer (SSL) session context.

> Use [SSLCreateContext](sslcreatecontext%28______%29.md) instead.

## Declaration

```objectivec
OSStatus SSLNewContext(Boolean isServer, SSLContextRef*contextPtr);
```

## Parameters

- `isServer`: Set `true` if the calling process is a server.
- `contextPtr`: On return, points to a new SSL session context reference.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The SSL session context is an opaque data structure that identifies a session and stores session information. You must pass this object to every other function in the Secure Transport API.
