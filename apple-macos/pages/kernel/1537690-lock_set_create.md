> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1537690-lock_set_create](https://developer.apple.com/documentation/kernel/1537690-lock_set_create)

# lock_set_create

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t lock_set_create(task_t task, lock_set_t *new_lock_set, int n_ulocks, int policy);
```
