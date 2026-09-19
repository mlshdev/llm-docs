> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471227-file_system_attribute_selectors/gestalthasfsspeccalls

# gestaltHasFSSpecCalls

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

If this bit is set in the `response` parameter, the operating environment provides the file system specification (`FSSpec`) versions of the basic file-manipulation functions, as well as the `FSMakeFSSpec` function.

## Declaration

```objectivec
gestaltHasFSSpecCalls = 1
```
