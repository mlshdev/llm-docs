> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/distributed/distributedtargetinvocationencoder/recordgenericsubstitution(_:)

# recordGenericSubstitution(\_:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The arguments must be encoded order-preserving, and once `decodeGenericSubstitutions` is called, the substitutions must be returned in the same order in which they were recorded.

## Declaration

```swift
mutating func recordGenericSubstitution<T>(_ type: T.Type) throws
```

## Parameters

- `type`: A generic substitution type to be recorded for this invocation.
