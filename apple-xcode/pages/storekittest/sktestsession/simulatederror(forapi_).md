> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/simulatederror(forapi:)](https://developer.apple.com/documentation/storekittest/sktestsession/simulatederror(forapi:))

# simulatedError(forAPI:)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func simulatedError<API>(forAPI api: API) async -> API.Failure? where API : FailableStoreKitAPI
```

## See Also

### Instance Methods

- [buyProduct(identifier:options:)](buyproduct%28identifier_options_%29.md)
- [setSimulatedError(\_:forAPI:)](setsimulatederror%28__forapi_%29.md)
