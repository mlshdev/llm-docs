> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkstateofmind/init(date:kind:valence:labels:associations:metadata:)

# init(date:kind:valence:labels:associations:metadata:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
convenience init(date: Date, kind: HKStateOfMind.Kind, valence: Double, labels: [HKStateOfMind.Label], associations: [HKStateOfMind.Association], metadata: [String : Any]? = [:])
```
