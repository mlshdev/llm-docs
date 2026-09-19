> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/componentresource/1516623-component

# component

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A resource specification structure that specifies the type and ID of the component code resource. The `resType` field of the resource specification structure may contain any value. The component’s main entry point must be at offset 0 in the resource.

## Declaration

```objectivec
ResourceSpec component;
```
