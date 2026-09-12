> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kauth_scope_callback_t](https://developer.apple.com/documentation/kernel/kauth_scope_callback_t)

# kauth_scope_callback_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef int (*kauth_scope_callback_t)(kauth_cred_t _credential, void *_idata, kauth_action_t _action, uintptr_t _arg0, uintptr_t _arg1, uintptr_t _arg2, uintptr_t _arg3);
```
