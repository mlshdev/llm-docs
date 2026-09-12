> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1526230-net_init_add](https://developer.apple.com/documentation/kernel/1526230-net_init_add)

# net_init_add

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
errno_t net_init_add(net_init_func_ptr init_func);
```

## Parameters

- `init_func`: A pointer to a function to be called when the stack is initialized.

<a id="return_value"></a>

## Return Value

EINVAL - the init_func value was NULL. EALREADY - the network has already been initialized ENOMEM - there was not enough memory to perform this operation 0 - success

<a id="discussion"></a>

## Discussion

Add a function to be called during network initialization. Your kext must not unload until the function you register is called if net_init_add returns success.
