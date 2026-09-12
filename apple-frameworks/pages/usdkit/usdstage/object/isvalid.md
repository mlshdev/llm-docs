> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/isvalid](https://developer.apple.com/documentation/usdkit/usdstage/object/isvalid)

# isValid

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value indicating whether this object is valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

An object’s validity is connected to a [USDStage](../../usdstage.md). An object becomes invalid when the lifetime of its stage ends.

An object will also expire if its stage no longer defines a value for the object. `isValid` is false if this object has expired.
