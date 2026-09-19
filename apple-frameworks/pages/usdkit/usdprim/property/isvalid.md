> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/property/isvalid

# isValid

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value indicating whether this property is valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

A property’s validity is connected to a [USDStage](../../usdstage.md). A property becomes invalid when the lifetime of its stage ends.

A property will also expire if its stage no longer defines a value for the property. `isValid` is false if this property has expired.
