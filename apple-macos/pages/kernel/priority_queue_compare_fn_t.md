> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/priority_queue_compare_fn_t

# priority_queue_compare_fn_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef int (^priority_queue_compare_fn_t)(struct priority_queue_entry *e1, struct priority_queue_entry *e2);
```
