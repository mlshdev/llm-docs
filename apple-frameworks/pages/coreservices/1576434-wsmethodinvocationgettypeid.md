> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1576434-wsmethodinvocationgettypeid

# WSMethodInvocationGetTypeID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Returns the type ID of the current method invocation.

## Declaration

```objectivec
CFTypeID WSMethodInvocationGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A CFTypeID.

<a id="discussion"></a>

## Discussion

Returns the ID of the current method invocation. You should call this immediately after creating the invocation reference.
