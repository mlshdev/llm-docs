> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/net_init_func_ptr](https://developer.apple.com/documentation/kernel/net_init_func_ptr)

# net_init_func_ptr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*net_init_func_ptr)(void);
```

<a id="discussion"></a>

## Discussion

net_init_func_ptr will be called once the networking stack initialized and before network operations occur.
