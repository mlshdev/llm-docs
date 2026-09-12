> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/debugdescription](https://developer.apple.com/documentation/swift/float16/debugdescription)

# debugDescription

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A textual representation of the value, suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

This property has the same value as the `description` property, except that NaN values are printed in an extended format.
