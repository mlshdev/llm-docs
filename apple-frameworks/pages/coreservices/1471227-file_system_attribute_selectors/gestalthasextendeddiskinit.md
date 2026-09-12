> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471227-file_system_attribute_selectors/gestalthasextendeddiskinit](https://developer.apple.com/documentation/coreservices/1471227-file_system_attribute_selectors/gestalthasextendeddiskinit)

# gestaltHasExtendedDiskInit

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltHasExtendedDiskInit = 6
```

<a id="discussion"></a>

## Discussion

If this bit is set in the `response` parameter, the extended Disk Initialization Package functions are present. These are the `DIXFormat`, `DIXZero`, or `DIReformat` functions. See the *Guide to the File System Manager* for more information about the Disk Initialization Package interfaces.
