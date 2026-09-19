> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareobject/setisidentifying(_:)

# setIsIdentifying(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the isIdentifying property.

## Declaration

```swift
func setIsIdentifying(_ isIdentifying: Bool) throws
```

## Parameters

- `isIdentifying`: A Bool where a value of true indicates that the object’s hardware is drawing attention to itself. A value of false indicates that this function is turned off.
