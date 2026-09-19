> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3609299-ml_processor_register

# ml_processor_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t ml_processor_register(ml_processor_info_t *ml_processor_info, processor_t *processor, ipi_handler_t *ipi_handler, perfmon_interrupt_handler_func *pmi_handler);
```
