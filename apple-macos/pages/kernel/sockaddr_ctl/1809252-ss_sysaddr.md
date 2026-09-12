> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sockaddr_ctl/1809252-ss_sysaddr](https://developer.apple.com/documentation/kernel/sockaddr_ctl/1809252-ss_sysaddr)

# ss_sysaddr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

AF_SYS_KERNCONTROL.

## Declaration

```objectivec
u_int16_t ss_sysaddr;
```

## See Also

### Fields

- [sc_len](1809243-sc_len.md): The length of the structure.
- [sc_family](1809246-sc_family.md): AF_SYSTEM.
- [sc_id](1809255-sc_id.md): Controller unique identifier.
- [sc_unit](1809262-sc_unit.md): Kernel controller private unit number.
- [sc_reserved](1809263-sc_reserved.md): Reserved, must be set to zero.
