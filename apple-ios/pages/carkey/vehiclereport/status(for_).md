> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/vehiclereport/status(for:)](https://developer.apple.com/documentation/carkey/vehiclereport/status(for:))

# status(for:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

Returns the current status of the specified vehicle function.

## Declaration

```swift
func status(for function: FunctionIdentifier) throws -> FunctionStatus?
```

## Parameters

- `function`: The function identifier for the vehicle feature you want to check. If you specify an unknown feature, this method throws an error. For a list of the vehicle’s supported features, see the [supportedFunctions](supportedfunctions.md) property.

<a id="return-value"></a>

## Return Value

The status of the feature, or `nil` if the status is currently unknown.

<a id="discussion"></a>

## Discussion

Each feature of your vehicle has one or more associated states, which you define. For example, the door locks of a vehicle might be in the locked or unlocked state. This method returns the state if it is known.

## See Also

### Getting the Vehicle’s Supported Functions

- [supportedFunctions](supportedfunctions.md): An array of function identifiers that indicates the features the vehicle supports, populated only after the first BLE connection with the vehicle.
- [FunctionStatus](../functionstatus.md): A value that the vehicle can return to indicate the status of a particular vehicle feature.
