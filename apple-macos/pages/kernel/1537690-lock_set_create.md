> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1537690-lock_set_create

# lock_set_create

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t lock_set_create(task_t task, lock_set_t *new_lock_set, int n_ulocks, int policy);
```
