> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/propertydatasize(address:qualifier:)](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/propertydatasize(address:qualifier:))

# propertyDataSize(address:qualifier:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Queries an AudioHardwareObject to find the size of the data for the given property.

## Declaration

```swift
func propertyDataSize(address: AudioObjectPropertyAddress, qualifier: Data? = nil) throws -> Int
```

## Parameters

- `address`: An AudioObjectPropertyAddress indicating which property is being queried.
- `qualifier`: A buffer of data to be used in determining the data of the property being queried. Note that not all properties require qualification, in which case this value will be nil.

<a id="return-value"></a>

## Return Value

An Int  indicating how many bytes the data for the given property occupies.
