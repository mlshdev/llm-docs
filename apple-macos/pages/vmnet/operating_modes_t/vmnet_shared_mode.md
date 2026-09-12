> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/operating_modes_t/vmnet_shared_mode](https://developer.apple.com/documentation/vmnet/operating_modes_t/vmnet_shared_mode)

# operating_modes_t.VMNET_SHARED_MODE (Swift)

**Framework:** vmnet  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```swift
case VMNET_SHARED_MODE
```

<a id="Discussion"></a>

## Discussion

Mode that allows the guest network interface reach the Internet using a network address translator. In addition, the shared mode interface can communicate with shared mode interfaces in other guest operating system and also to the native host.

## See Also

### Constants

- [operating_modes_t.VMNET_HOST_MODE](vmnet_host_mode.md)

# VMNET_SHARED_MODE (Objective-C)

**Framework:** vmnet  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```objectivec
VMNET_SHARED_MODE
```

<a id="Discussion"></a>

## Discussion

Mode that allows the guest network interface reach the Internet using a network address translator. In addition, the shared mode interface can communicate with shared mode interfaces in other guest operating system and also to the native host.

## See Also

### Constants

- [VMNET_HOST_MODE](vmnet_host_mode.md)
