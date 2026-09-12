> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1532494-proto_unregister_plumber](https://developer.apple.com/documentation/kernel/1532494-proto_unregister_plumber)

# proto_unregister_plumber

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void proto_unregister_plumber(protocol_family_t proto_fam, ifnet_family_t if_fam);
```

## Parameters

- `proto_fam`: The protocol family these plumbing functions handle.
- `if_fam`: The interface family these plumbing functions handle.

<a id="discussion"></a>

## Discussion

Unregisters a previously registered plumbing function.
