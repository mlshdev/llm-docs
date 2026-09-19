> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1524378-assert_wait_deadline

# assert_wait_deadline

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
wait_result_t assert_wait_deadline(event_t event, wait_interrupt_t interruptible, uint64_t deadline);
```

## See Also

### Assertions

- [Assert](1574809-assert.md)
- [assert_wait](1524384-assert_wait.md)
- [assert_wait_deadline_with_leeway](1524380-assert_wait_deadline_with_leeway.md)
- [assert_wait_timeout](1524367-assert_wait_timeout.md)
- [assert_wait_timeout_with_leeway](1524381-assert_wait_timeout_with_leeway.md)
