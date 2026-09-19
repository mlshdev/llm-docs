> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareobject/setcreatorbundleid(_:)

# setCreatorBundleID(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the creatorBundleID property.

## Declaration

```swift
func setCreatorBundleID(_ ID: String) throws
```

## Parameters

- `ID`: A String that contains the bundle ID of the plug-in that instantiated the object.
