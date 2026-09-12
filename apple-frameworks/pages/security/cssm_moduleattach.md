> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_moduleattach](https://developer.apple.com/documentation/security/cssm_moduleattach)

# CSSM_ModuleAttach

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_ModuleAttach(const CSSM_GUID *ModuleGuid, const CSSM_VERSION *Version, const CSSM_API_MEMORY_FUNCS *MemoryFuncs, uint32 SubserviceID, CSSM_SERVICE_TYPE SubServiceType, CSSM_ATTACH_FLAGS AttachFlags, CSSM_KEY_HIERARCHY KeyHierarchy, CSSM_FUNC_NAME_ADDR *FunctionTable, uint32 NumFunctionTable, const void *Reserved, CSSM_MODULE_HANDLE_PTR NewModuleHandle);
```
