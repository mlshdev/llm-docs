> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1478468-gpu_accumulate_time](https://developer.apple.com/documentation/kernel/1478468-gpu_accumulate_time)

# gpu_accumulate_time

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.10+

## Declaration

```objectivec
uint64_t gpu_accumulate_time(uint32_t scope, uint32_t gpu_id, uint32_t gpu_domain, uint64_t gpu_accumulated_ns, uint64_t gpu_tstamp_ns);
```

## See Also

### energy

- [io_rate_update](1478470-io_rate_update.md)
- [io_rate_update_register](1478504-io_rate_update_register.md)
- [gpu_describe](1478509-gpu_describe.md)
- [gpu_fceiling_cb_register](1478505-gpu_fceiling_cb_register.md)
- [gpu_submission_telemetry](1478498-gpu_submission_telemetry.md)
