> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1567120-dequeue_head](https://developer.apple.com/documentation/kernel/1567120-dequeue_head)

# dequeue_head

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

## Declaration

```objectivec
queue_entry_t dequeue_head(queue_t que);
```

## See Also

### queue

- [dequeue_tail](1567149-dequeue_tail.md)
- [enqueue_head](1567151-enqueue_head.md)
- [enqueue_tail](1567142-enqueue_tail.md)
