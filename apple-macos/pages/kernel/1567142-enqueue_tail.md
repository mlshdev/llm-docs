> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1567142-enqueue_tail

# enqueue_tail

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

## Declaration

```objectivec
void enqueue_tail(queue_t que, queue_entry_t elt);
```

## See Also

### queue

- [dequeue_head](1567120-dequeue_head.md)
- [dequeue_tail](1567149-dequeue_tail.md)
- [enqueue_head](1567151-enqueue_head.md)
