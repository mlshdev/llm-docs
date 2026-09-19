> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1547409-kauth_register_scope

# kauth_register_scope

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kauth_scope_t kauth_register_scope(const char *_identifier, kauth_scope_callback_t _callback, void *_idata);
```
