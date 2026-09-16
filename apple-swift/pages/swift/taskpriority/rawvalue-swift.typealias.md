> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/taskpriority/rawvalue-swift.typealias

# TaskPriority.RawValue

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The raw type that can be used to represent all values of the conforming type.

## Declaration

```swift
typealias RawValue = UInt8
```

<a id="discussion"></a>

## Discussion

Every distinct value of the conforming type has a corresponding unique value of the `RawValue` type, but there may be values of the `RawValue` type that don’t have a corresponding value of the conforming type.
