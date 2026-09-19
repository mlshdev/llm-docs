> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1547495-kauth_authorize_action

# kauth_authorize_action

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int kauth_authorize_action(kauth_scope_t _scope, kauth_cred_t _credential, kauth_action_t _action, uintptr_t _arg0, uintptr_t _arg1, uintptr_t _arg2, uintptr_t _arg3);
```
