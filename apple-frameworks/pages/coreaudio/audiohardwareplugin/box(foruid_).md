> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareplugin/box(foruid:)](https://developer.apple.com/documentation/coreaudio/audiohardwareplugin/box(foruid:))

# box(forUID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

## Declaration

```swift
func box(forUID UID: String) throws -> AudioHardwareBox?
```

## Parameters

- `UID`: The String UID of the box object to obtain.

<a id="return-value"></a>

## Return Value

The AudioHardwareBox that corresponds with the given UID, or nil if the UID does not correspond with any box object.
