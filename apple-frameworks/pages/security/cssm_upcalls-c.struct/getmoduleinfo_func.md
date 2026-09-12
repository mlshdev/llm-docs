> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_upcalls-c.struct/getmoduleinfo_func](https://developer.apple.com/documentation/security/cssm_upcalls-c.struct/getmoduleinfo_func)

# GetModuleInfo_func

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, struct cssm_guid *, struct cssm_version *, unsigned int *, unsigned int *, unsigned int *, unsigned int *, struct cssm_memory_funcs *, struct cssm_func_name_addr *, unsigned int) GetModuleInfo_func;
```
