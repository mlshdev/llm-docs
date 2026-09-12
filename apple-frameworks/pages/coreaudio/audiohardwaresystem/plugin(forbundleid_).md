> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/plugin(forbundleid:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/plugin(forbundleid:))

# plugin(forBundleID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

## Declaration

```swift
func plugin(forBundleID ID: String) throws -> AudioHardwarePlugin?
```

## Parameters

- `ID`: The String bundle ID of the plugin object to obtain.

<a id="return-value"></a>

## Return Value

The AudioHardwarePlugin that corresponds with the given bundle ID, or nil if the ID does not correspond with any plugin object.
