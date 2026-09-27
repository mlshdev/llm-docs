> Snapshot-pinned source payload for Apple Swift snapshot-3cd4d1098779; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/debugdescription

# debugDescription

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A textual representation of the value, suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

This property has the same value as the `description` property, except that NaN values are printed in an extended format.
