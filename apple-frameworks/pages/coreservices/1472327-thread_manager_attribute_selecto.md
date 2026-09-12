> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472327-thread_manager_attribute_selecto](https://developer.apple.com/documentation/coreservices/1472327-thread_manager_attribute_selecto)

# Thread Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Thread Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltThreadMgrAttr](1472327-thread_manager_attribute_selecto/gestaltthreadmgrattr.md)
- [gestaltThreadMgrPresent](1472327-thread_manager_attribute_selecto/gestaltthreadmgrpresent.md): This bit is set if the Thread Manager is present.
- [gestaltSpecificMatchSupport](1472327-thread_manager_attribute_selecto/gestaltspecificmatchsupport.md): This bit is set if the Thread Manager supports the allocation of threads based on an exact match with the requested stack size. If this bit is not set, the Thread Manager allocates threads based on the closest match to the requested stack size.
- [gestaltThreadsLibraryPresent](1472327-thread_manager_attribute_selecto/gestaltthreadslibrarypresent.md): This bit is set if the native version of the threads library has been loaded.
