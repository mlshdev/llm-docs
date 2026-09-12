> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/isvalid](https://developer.apple.com/documentation/usdkit/usdprim/attribute/isvalid)

# isValid

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value indicating whether this attribute is valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

An attribute’s validity is connected to a [USDStage](../../usdstage.md). An attribute becomes invalid when the lifetime of its stage ends.

An attribute will also expire if its stage no longer defines a value for the attribute. `isValid` is false if this attribute has expired.
