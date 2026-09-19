> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/box(foruid:)

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
