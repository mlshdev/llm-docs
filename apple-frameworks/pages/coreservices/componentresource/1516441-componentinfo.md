> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/componentresource/1516441-componentinfo

# componentInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A resource specification structure that specifies the resource type and ID for the information string that describes the component. This is a Pascal string. Typically, the information string is stored in a resource of type `'STR'`. You might use the information stored in this resource in a Get Info dialog box.

## Declaration

```objectivec
ResourceSpec componentInfo;
```
