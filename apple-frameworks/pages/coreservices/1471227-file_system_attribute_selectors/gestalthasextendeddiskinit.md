> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471227-file_system_attribute_selectors/gestalthasextendeddiskinit

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
