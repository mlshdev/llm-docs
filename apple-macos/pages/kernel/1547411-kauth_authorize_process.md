> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1547411-kauth_authorize_process](https://developer.apple.com/documentation/kernel/1547411-kauth_authorize_process)

# kauth_authorize_process

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int kauth_authorize_process(kauth_cred_t _credential, kauth_action_t _action, struct proc *_process, uintptr_t _arg1, uintptr_t _arg2, uintptr_t _arg3);
```
