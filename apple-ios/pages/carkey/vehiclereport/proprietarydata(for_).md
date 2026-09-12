> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/vehiclereport/proprietarydata(for:)](https://developer.apple.com/documentation/carkey/vehiclereport/proprietarydata(for:))

# proprietaryData(for:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

Retrieves the proprietary data associated with one of the vehicle’s functions.

## Declaration

```swift
func proprietaryData(for function: FunctionIdentifier) throws -> Data?
```

## Parameters

- `function`: The function identifier for the given vehicle feature. If you specify an unknown feature, this method throws an error. For a list of the vehicle’s supported features, see the [supportedFunctions](supportedfunctions.md) property.

<a id="return-value"></a>

## Return Value

A data object, or `nil` if no data was present for the specified feature.

<a id="discussion"></a>

## Discussion

When it receives new data from a vehicle, the system updates the vehicle report and notifies the session delegate. Call this method to retrieve any data associated with a particular feature of your vehicle.
