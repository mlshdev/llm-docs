> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/tap(foruid:)

# tap(forUID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
func tap(forUID UID: String) throws -> AudioHardwareTap?
```

## Parameters

- `UID`: The String UID of the tap object to obtain.

<a id="return-value"></a>

## Return Value

The AudioHardwareTap that corresponds with the given UID, or nil if the UID does not correspond with any tap object.
