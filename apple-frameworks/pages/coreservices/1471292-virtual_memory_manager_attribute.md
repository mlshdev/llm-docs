> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471292-virtual_memory_manager_attribute](https://developer.apple.com/documentation/coreservices/1471292-virtual_memory_manager_attribute)

# Virtual Memory Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Virtual Memory Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltVMAttr](1471292-virtual_memory_manager_attribute/gestaltvmattr.md): The `Gestalt` selector you pass to determine the virtual memory attributes that are present.
- [gestaltVMPresent](1471292-virtual_memory_manager_attribute/gestaltvmpresent.md): If `true`, virtual memory is present.
- [gestaltVMHasLockMemoryForOutput](1471292-virtual_memory_manager_attribute/gestaltvmhaslockmemoryforoutput.md)
- [gestaltVMFilemappingOn](1471292-virtual_memory_manager_attribute/gestaltvmfilemappingon.md)
- [gestaltVMHasPagingControl](1471292-virtual_memory_manager_attribute/gestaltvmhaspagingcontrol.md)
