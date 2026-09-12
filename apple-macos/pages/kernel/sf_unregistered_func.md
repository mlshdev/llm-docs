> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_unregistered_func](https://developer.apple.com/documentation/kernel/sf_unregistered_func)

# sf_unregistered_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*sf_unregistered_func)(sflt_handle handle);
```

## Parameters

- `handle`: The socket filter handle used to identify this filter.

<a id="discussion"></a>

## Discussion

sf_unregistered_func is called to notify the filter it has been unregistered. This is the last function the stack will call and this function will only be called once all other function calls in to your filter have completed. Once this function has been called, your kext may safely unload.
