> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareplugin/clock(foruid:)](https://developer.apple.com/documentation/coreaudio/audiohardwareplugin/clock(foruid:))

# clock(forUID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

## Declaration

```swift
func clock(forUID UID: String) throws -> AudioHardwareClock?
```

## Parameters

- `UID`: The String UID of the clock object to obtain.

<a id="return-value"></a>

## Return Value

The AudioHardwareClock that corresponds with the given UID, or nil if the UID does not correspond with any box object.
