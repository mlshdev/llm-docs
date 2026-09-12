> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogramquerydescriptor/init(_:)](https://developer.apple.com/documentation/healthkit/hkelectrocardiogramquerydescriptor/init(_:))

# init(\_:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Creates a query descriptor that reads voltage measurements from the provided electrocardiogram sample.

## Declaration

```swift
init(_ electrocardiogram: HKElectrocardiogram)
```

## Parameters

- `electrocardiogram`: An electrocardiogram sample that contains voltage measurements.
