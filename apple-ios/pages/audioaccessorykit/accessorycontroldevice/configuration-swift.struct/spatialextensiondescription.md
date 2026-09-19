> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct/spatialextensiondescription

# spatialExtensionDescription

**Framework:** AudioAccessoryKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+

The spatial audio component description.

## Declaration

```swift
var spatialExtensionDescription: AudioComponentDescription?
```

<a id="discussion"></a>

## Discussion

Use this to help identify spatial audio rendering extension Only applicable when `.audioSpatialization` capability is enabled Example AudioComponentDescription(componentType: 0xaaf, componentSubType: 0xc0f, componentManufacturer: 0xb05e, componentFlags: 0, componentFlagsMask: 0)
