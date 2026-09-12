> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarecontrol/selectoritemkind(fromid:)](https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/selectoritemkind(fromid:))

# selectorItemKind(fromID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

This property returns a UInt32 that identifies the kind of selector item the item ID refers to.

## Declaration

```swift
func selectorItemKind(fromID ID: UInt32) throws -> UInt32
```

## Parameters

- `ID`: A UInt32 containing the ID of the item.

<a id="return-value"></a>

## Return Value

A UInt32 that identifies the kind of selector item the item ID refers to.

<a id="discussion"></a>

## Discussion

This property is optional for selector controls and that the meaning of the value depends on the specific subclass being queried.
