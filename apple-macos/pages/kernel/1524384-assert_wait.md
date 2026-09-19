> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1524384-assert_wait

# assert_wait

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
wait_result_t assert_wait(event_t event, wait_interrupt_t interruptible);
```

## See Also

### Assertions

- [Assert](1574809-assert.md)
- [assert_wait_deadline](1524378-assert_wait_deadline.md)
- [assert_wait_deadline_with_leeway](1524380-assert_wait_deadline_with_leeway.md)
- [assert_wait_timeout](1524367-assert_wait_timeout.md)
- [assert_wait_timeout_with_leeway](1524381-assert_wait_timeout_with_leeway.md)
