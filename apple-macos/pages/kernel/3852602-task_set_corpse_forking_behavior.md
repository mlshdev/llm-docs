> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3852602-task_set_corpse_forking_behavior

# task_set_corpse_forking_behavior

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t task_set_corpse_forking_behavior(task_t task, task_corpse_forking_behavior_t behavior);
```
