> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3553717-processor_set_tasks_with_flavor

# processor_set_tasks_with_flavor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t processor_set_tasks_with_flavor(processor_set_t processor_set, mach_task_flavor_t flavor, task_array_t *task_list, mach_msg_type_number_t *task_listCnt);
```
