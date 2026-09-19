> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4360163-pe_parse_boot_arg_str

# PE_parse_boot_arg_str

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
boolean_t PE_parse_boot_arg_str(const char *arg_string, char *arg_ptr, int size);
```
