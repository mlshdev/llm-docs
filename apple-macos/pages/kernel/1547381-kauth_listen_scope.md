> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1547381-kauth_listen_scope

# kauth_listen_scope

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+ (deprecated in 11.0)

## Declaration

```objectivec
kauth_listener_t kauth_listen_scope(const char *_identifier, kauth_scope_callback_t _callback, void *_idata);
```
