> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472327-thread_manager_attribute_selecto/gestaltspecificmatchsupport](https://developer.apple.com/documentation/coreservices/1472327-thread_manager_attribute_selecto/gestaltspecificmatchsupport)

# gestaltSpecificMatchSupport

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

This bit is set if the Thread Manager supports the allocation of threads based on an exact match with the requested stack size. If this bit is not set, the Thread Manager allocates threads based on the closest match to the requested stack size.

## Declaration

```objectivec
gestaltSpecificMatchSupport = 1
```
