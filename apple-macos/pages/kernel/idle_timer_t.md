> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/idle_timer_t](https://developer.apple.com/documentation/kernel/idle_timer_t)

# idle_timer_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef void (*idle_timer_t)(void *refcon, uint64_t *new_timeout_ticks);
```
