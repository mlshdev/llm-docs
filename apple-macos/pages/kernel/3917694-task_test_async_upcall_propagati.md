> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3917694-task_test_async_upcall_propagati](https://developer.apple.com/documentation/kernel/3917694-task_test_async_upcall_propagati)

# task_test_async_upcall_propagation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.3+

## Declaration

```objectivec
kern_return_t task_test_async_upcall_propagation(task_t task, mach_port_t port, int qos, int iotier);
```
