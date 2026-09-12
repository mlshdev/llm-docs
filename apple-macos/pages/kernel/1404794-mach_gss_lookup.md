> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1404794-mach_gss_lookup](https://developer.apple.com/documentation/kernel/1404794-mach_gss_lookup)

# mach_gss_lookup

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.8+

## Declaration

```objectivec
kern_return_t mach_gss_lookup(mach_port_t server, uint32_t uid, int32_t asid, mach_port_t *gssd_session_port);
```

## See Also

### Security

- [mach_gss_accept_sec_context](1404602-mach_gss_accept_sec_context.md)
- [mach_gss_accept_sec_context_v2](1404573-mach_gss_accept_sec_context_v2.md)
- [mach_gss_hold_cred](1404537-mach_gss_hold_cred.md)
- [mach_gss_init_sec_context](1404774-mach_gss_init_sec_context.md)
- [mach_gss_init_sec_context_v2](1404594-mach_gss_init_sec_context_v2.md)
- [mach_gss_init_sec_context_v3](1642105-mach_gss_init_sec_context_v3.md)
- [mach_gss_log_error](1404710-mach_gss_log_error.md)
- [mach_gss_unhold_cred](1404585-mach_gss_unhold_cred.md)
