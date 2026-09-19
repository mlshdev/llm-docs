> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3917694-task_test_async_upcall_propagati

# task_test_async_upcall_propagation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.3+

## Declaration

```objectivec
kern_return_t task_test_async_upcall_propagation(task_t task, mach_port_t port, int qos, int iotier);
```
