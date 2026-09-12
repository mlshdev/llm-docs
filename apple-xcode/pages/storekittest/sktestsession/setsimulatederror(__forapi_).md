> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/setsimulatederror(_:forapi:)](https://developer.apple.com/documentation/storekittest/sktestsession/setsimulatederror(_:forapi:))

# setSimulatedError(\_:forAPI:)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func setSimulatedError<API>(_ error: API.Failure?, forAPI api: API) async throws where API : FailableStoreKitAPI
```

## See Also

### Instance Methods

- [buyProduct(identifier:options:)](buyproduct%28identifier_options_%29.md)
- [simulatedError(forAPI:)](simulatederror%28forapi_%29.md)
