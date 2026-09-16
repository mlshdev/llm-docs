> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/optionset/element

# Element

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The element type of the option set.

## Declaration

```swift
associatedtype Element = Self
```

<a id="discussion"></a>

## Discussion

To inherit all the default implementations from the `OptionSet` protocol, the `Element` type must be `Self`, the default.
