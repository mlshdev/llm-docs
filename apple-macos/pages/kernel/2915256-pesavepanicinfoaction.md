> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/2915256-pesavepanicinfoaction](https://developer.apple.com/documentation/kernel/2915256-pesavepanicinfoaction)

# PESavePanicInfoAction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```objectivec
void PESavePanicInfoAction(void *buffer, UInt32 offset, UInt32 length);
```

## See Also

### Debugging

- [PE_i_can_has_debugger](1553651-pe_i_can_has_debugger.md)
- [PE_enter_debugger](1553661-pe_enter_debugger.md)
- [PESavePanicInfo](1451658-pesavepanicinfo.md)
- [PE_panic_hook](3081669-pe_panic_hook.md)
- [PE_update_panicheader_nestedpanic](2915277-pe_update_panicheader_nestedpani.md)
- [PE_get_offset_into_panic_region](2915276-pe_get_offset_into_panic_region.md)
- [PEHaltRestart](1451718-pehaltrestart.md)
