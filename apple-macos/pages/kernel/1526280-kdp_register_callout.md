> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1526280-kdp_register_callout

# kdp_register_callout

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
void kdp_register_callout(kdp_callout_fn_t fn, void *arg);
```

## See Also

### kdp

- [kdp_register_send_receive](1399355-kdp_register_send_receive.md)
- [kdp_unregister_send_receive](1399359-kdp_unregister_send_receive.md)
