> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetallowsanyroot](https://developer.apple.com/documentation/security/sslgetallowsanyroot)

# SSLGetAllowsAnyRoot

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Obtains a value specifying whether an unknown root is allowed.

> See the replacement procedure for allowing arbitrary root certificates in the deprecation summary of [SSLSetAllowsAnyRoot](sslsetallowsanyroot.md).

## Declaration

```objectivec
OSStatus SSLGetAllowsAnyRoot(SSLContextRef context, Boolean *anyRoot);
```

## Parameters

- `context`: An SSL session context reference.
- `anyRoot`: On return, a Boolean indicating the current setting of the `anyRoot` flag.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the [SSLSetAllowsAnyRoot](sslsetallowsanyroot.md) function to set the value of the `anyRoot` flag. The effect and meaning of this flag is described in the discussion of the [SSLSetAllowsAnyRoot](sslsetallowsanyroot.md) function.
