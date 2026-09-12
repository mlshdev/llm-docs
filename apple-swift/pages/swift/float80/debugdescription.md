> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/debugdescription](https://developer.apple.com/documentation/swift/float80/debugdescription)

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
