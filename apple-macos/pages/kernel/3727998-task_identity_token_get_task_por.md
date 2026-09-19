> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3727998-task_identity_token_get_task_por

# task_identity_token_get_task_port

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
kern_return_t task_identity_token_get_task_port(task_id_token_t token, task_flavor_t flavor, mach_port_t *task_port);
```
