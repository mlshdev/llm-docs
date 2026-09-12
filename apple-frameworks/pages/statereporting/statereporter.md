> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/statereporter](https://developer.apple.com/documentation/statereporting/statereporter)

# StateReporter

**Framework:** StateReporting  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object unique per domain that records state transitions and volatile metadata updates.

## Declaration

```swift
final class StateReporter<StableMetadata, VolatileMetadata> where StableMetadata : ReportableMetadata, VolatileMetadata : ReportableMetadata
```

## Mentioned In

- [Getting started with StateReporting](getting-started-with-statereporting.md)

<a id="overview"></a>

## Overview

`StateReporter` is the central object for recording your feature’s or subsystem’s current state. You obtain an instance through the [reporter(for:stableMetadata:volatileMetadata:)](statereporter/reporter%28for_stablemetadata_volatilemetadata_%29.md) method, which guarantees that every caller using the same domain string receives the same object. Attempting to call the method with different generic type arguments for an already-registered domain is a fatal error.

A state is uniquely identified by the combination of a label and stable metadata. A transition to a new state occurs when either changes; reporting the same label and stable metadata is a no-op. *Volatile metadata* provides additional context within an ongoing state and is discarded when the next transition begins. Both stable and volatile metadata are expressed as types conforming to [ReportableMetadata](reportablemetadata.md), which can be synthesized automatically with the [ReportableMetadata()](reportablemetadata%28%29.md) macro.

Call [reportTransition(to:stableMetadata:volatileMetadata:)](statereporter/reporttransition%28to_stablemetadata_volatilemetadata_%29.md) whenever your feature transitions to a new state. Pass `nil` as the label to signal that no state is active. Call [reportVolatileMetadataUpdate(\_:)](statereporter/reportvolatilemetadataupdate%28__%29.md) to update volatile metadata without beginning a new state transition. Calling either method more frequently than user interaction timescales can trigger rate limiting, causing state updates to go unlogged.

```swift
let reporter = StateReporter.reporter(
    for: "com.example.myapp.checkout",
    stableMetadata:AppMetadata.self,
    volatileMetadata:SessionMetadata.self
)

reporter.reportTransition(
    to: "paymentSheet",
    stableMetadata: AppMetadata(userTier: .premium),
    volatileMetadata: SessionMetadata(cartTotal: 49.99)
)
```

For Objective-C, use [SRStateReporter](srstatereporter.md).

## Topics

### Instance Properties

- [domain](statereporter/domain.md): The reverse DNS-style domain name that identifies this reporter.

### Instance Methods

- [reportTransition(to:stableMetadata:volatileMetadata:)](statereporter/reporttransition%28to_stablemetadata_volatilemetadata_%29.md): Reports a transition to a new state.
- [reportVolatileMetadataUpdate(\_:)](statereporter/reportvolatilemetadataupdate%28__%29.md): Updates the volatile metadata within the current state without beginning a new transition.

### Type Methods

- [reporter(for:stableMetadata:volatileMetadata:)](statereporter/reporter%28for_stablemetadata_volatilemetadata_%29.md): Returns the reporter instance unique to the given domain and metadata types.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
