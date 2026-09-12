> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471735-file_system_attribute_selectors_](https://developer.apple.com/documentation/coreservices/1471735-file_system_attribute_selectors_)

# File System Attribute Selectors for Mac OS 9

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for the file system for features introduced in Mac OS 9.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltHasHFSPlusAPIs](1471735-file_system_attribute_selectors_/gestalthashfsplusapis.md)
- [gestaltMustUseFCBAccessors](1471735-file_system_attribute_selectors_/gestaltmustusefcbaccessors.md): If this bit is set in the `response` parameter, the File Manager no longer supports the low memory globals `FCBSPtr` and `FSFCBLen`. All access to file or fork control blocks must use the File System Manager utility functions instead.
- [gestaltFSUsesPOSIXPathsForConversion](1471735-file_system_attribute_selectors_/gestaltfsusesposixpathsforconversion.md)
- [gestaltFSSupportsExclusiveLocks](1471735-file_system_attribute_selectors_/gestaltfssupportsexclusivelocks.md)
- [gestaltFSSupportsHardLinkDetection](1471735-file_system_attribute_selectors_/gestaltfssupportshardlinkdetection.md)
- [gestaltFSAllowsConcurrentAsyncIO](1471735-file_system_attribute_selectors_/gestaltfsallowsconcurrentasyncio.md)
