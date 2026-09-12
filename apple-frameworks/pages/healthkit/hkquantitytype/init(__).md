> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytype/init(_:)](https://developer.apple.com/documentation/healthkit/hkquantitytype/init(_:))

# init(\_:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS · watchOS 8.0+

Creates a quantity type using the provided identifier.

## Declaration

```swift
convenience init(_ identifier: HKQuantityTypeIdentifier)
```

## Parameters

- `identifier`: An identifier that specifies the type of data to store in the sample. For a complete list of quantity type identifiers, see [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).
