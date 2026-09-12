> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471735-file_system_attribute_selectors_/gestalthashfsplusapis](https://developer.apple.com/documentation/coreservices/1471735-file_system_attribute_selectors_/gestalthashfsplusapis)

# gestaltHasHFSPlusAPIs

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltHasHFSPlusAPIs = 12
```

<a id="discussion"></a>

## Discussion

If this bit is set in the `response` parameter, the File Manager supports the HFS Plus APIs. Individual file systems may or may not implement the HFS Plus APIs. However, if this bit is set, the File Manager will emulate the HFS Plus APIs for file systems that do not implement them. Call the functions `PBHGetVolParmsSync` or `PBHGetVolParmsAsync` to determine whether the HFS Plus APIs are directly supported on a given volume.
