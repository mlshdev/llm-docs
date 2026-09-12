> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1585826-semaphore_wait_noblock](https://developer.apple.com/documentation/kernel/1585826-semaphore_wait_noblock)

# semaphore_wait_noblock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
kern_return_t semaphore_wait_noblock(semaphore_t semaphore);
```

## See Also

### Semaphore

- [semaphore_create](1538205-semaphore_create.md)
- [semaphore_destroy](1537823-semaphore_destroy.md)
- [semaphore_signal](1585827-semaphore_signal.md)
- [semaphore_signal_all](1585830-semaphore_signal_all.md)
- [semaphore_wait](1585828-semaphore_wait.md)
- [semaphore_wait_deadline](1585829-semaphore_wait_deadline.md)
