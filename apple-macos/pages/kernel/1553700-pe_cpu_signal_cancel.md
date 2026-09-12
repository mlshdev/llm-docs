> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553700-pe_cpu_signal_cancel](https://developer.apple.com/documentation/kernel/1553700-pe_cpu_signal_cancel)

# PE_cpu_signal_cancel

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.11+

## Declaration

```objectivec
void PE_cpu_signal_cancel(cpu_id_t source, cpu_id_t target);
```

## See Also

### CPU

- [PE_cpu_halt](1553664-pe_cpu_halt.md)
- [PE_cpu_machine_init](1553675-pe_cpu_machine_init.md)
- [PE_cpu_machine_quiesce](1553608-pe_cpu_machine_quiesce.md)
- [PE_cpu_signal](1553636-pe_cpu_signal.md)
- [PE_cpu_signal_deferred](1553622-pe_cpu_signal_deferred.md)
- [PE_cpu_start](1553604-pe_cpu_start.md)
