> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsclientcontextreleasecallbackprocptr](https://developer.apple.com/documentation/coreservices/wsclientcontextreleasecallbackprocptr)

# WSClientContextReleaseCallBackProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

This is the callback that releases the information.

## Declaration

```objectivec
typedef void (*WSClientContextReleaseCallBackProcPtr)(void *info);
```

## Parameters

- `info`: Private callback data to be released.

<a id="discussion"></a>

## Discussion

If your callback is named MyInfoReleaseCallback, declare it like this:

<a id="1681548"></a>

### Discussion

Your callback is passed a  a pointer to private data for you to release.
