> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1399359-kdp_unregister_send_receive

# kdp_unregister_send_receive

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
void kdp_unregister_send_receive(kdp_send_t send, kdp_receive_t receive);
```

## See Also

### kdp

- [kdp_register_callout](1526280-kdp_register_callout.md)
- [kdp_register_send_receive](1399355-kdp_register_send_receive.md)
