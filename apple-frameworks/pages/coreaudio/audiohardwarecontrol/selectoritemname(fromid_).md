> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/selectoritemname(fromid:)

# selectorItemName(fromID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Translates the given item ID into a human readable name.

## Declaration

```swift
func selectorItemName(fromID ID: UInt32) throws -> String
```

## Parameters

- `ID`: A UInt32 containing the ID of the item to be translated

<a id="return-value"></a>

## Return Value

A String containg the name of the item.
