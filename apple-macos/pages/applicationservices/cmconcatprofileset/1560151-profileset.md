> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmconcatprofileset/1560151-profileset](https://developer.apple.com/documentation/applicationservices/cmconcatprofileset/1560151-profileset)

# profileSet

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.6)

A variable-length array of profile references. The references must be in processing order from source to destination. The rules governing the types of profiles you can specify in a profile array differ depending on whether you are creating a profile set for the function [CWConcatColorWorld](../colorsync_manager/1805087-cwconcatcolorworld.md) or for the function [CWNewLinkProfile](../colorsync_manager/1804915-cwnewlinkprofile.md). See the function descriptions for details.

## Declaration

```objectivec
CMProfileRef profileSet[1];
```
