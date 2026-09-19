> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1567146-re_queue_tail

# re_queue_tail

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.11+

## Declaration

```objectivec
void re_queue_tail(queue_t que, queue_entry_t elt);
```
