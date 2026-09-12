> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/hasproperty(address:)](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/hasproperty(address:))

# hasProperty(address:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Queries an AudioHardwareObject about whether or not it has the given property.

## Declaration

```swift
func hasProperty(address: AudioObjectPropertyAddress) -> Bool
```

## Parameters

- `address`: An AudioObjectPropertyAddress indicating which property is being queried.

<a id="return-value"></a>

## Return Value

A Bool indicating whether or not the AudioHardwareObject has the given property.
