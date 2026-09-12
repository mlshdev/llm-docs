> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsclientcontextretaincallbackprocptr](https://developer.apple.com/documentation/coreservices/wsclientcontextretaincallbackprocptr)

# WSClientContextRetainCallBackProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

This is the callback that retains the information.

## Declaration

```objectivec
typedef void *(*WSClientContextRetainCallBackProcPtr)(void *info);
```

## Parameters

- `info`: Private callback data to be retained.

<a id="discussion"></a>

## Discussion

If your callback is named MyInfoRetainCallback, declare it like this:

<a id="1681542"></a>

### Discussion

Your callback is passed a  a pointer to private data for you to retain.
