> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/wsclientcontextcopydescriptioncallbackprocptr

# WSClientContextCopyDescriptionCallBackProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

This is the callback that copies the information.

## Declaration

```objectivec
typedef CFStringRef (*WSClientContextCopyDescriptionCallBackProcPtr)(void *info);
```

## Parameters

- `info`: Private callback data to be coped.

<a id="return_value"></a>

## Return Value

A CFStringRef containing the client context information.

<a id="discussion"></a>

## Discussion

If your callback is named MyInfoCopyCallback, declare it like this:

<a id="1681561"></a>

### Discussion

Your callback is passed a  a pointer to private data for you to copy.
