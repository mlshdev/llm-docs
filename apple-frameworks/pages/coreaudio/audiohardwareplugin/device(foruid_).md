> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareplugin/device(foruid:)](https://developer.apple.com/documentation/coreaudio/audiohardwareplugin/device(foruid:))

# device(forUID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

## Declaration

```swift
func device(forUID UID: String) throws -> AudioHardwareDevice?
```

## Parameters

- `UID`: A String representing the UID of the device object.

<a id="return-value"></a>

## Return Value

The AudioHardwareDevice that corresponds with the given UID, or nil if the UID does not correspond with any device object.
