> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/ispropertysettable(address:)](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/ispropertysettable(address:))

# isPropertySettable(address:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Queries an AudioHardwareObject about whether or not the given property can be set using setPropertyValue.

## Declaration

```swift
func isPropertySettable(address: AudioObjectPropertyAddress) throws -> Bool
```

## Parameters

- `address`: An AudioObjectPropertyAddress indicating which property is being queried.

<a id="return-value"></a>

## Return Value

A Bool indicating whether or not the property is settable.
