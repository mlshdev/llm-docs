> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1446965-kev_vendor_code_find](https://developer.apple.com/documentation/kernel/1446965-kev_vendor_code_find)

# kev_vendor_code_find

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.9+

## Declaration

```objectivec
errno_t kev_vendor_code_find(const char *vendor_string, u_int32_t *vendor_code);
```

## Parameters

- `vendor_string`: A bundle style vendor identifier(i.e. com.apple).
- `vendor_code`: Upon return, a unique vendor code for use when posting kernel events.

<a id="return_value"></a>

## Return Value

May return ENOMEM if memory constraints prevent allocation of a new vendor code.

<a id="discussion"></a>

## Discussion

Lookup a vendor_code given a unique string. If the vendor code has not been used since launch, a unique integer will be assigned for that string. Vendor codes will remain the same until the machine is rebooted.
