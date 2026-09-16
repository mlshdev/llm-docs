> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/color/description

# description

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A textual representation of the color.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

Use this method to get a string that represents the color. The [print(\_:separator:terminator:)](https://developer.apple.com/documentation/swift/print%28_:separator:terminator:%29) function uses this property to get a string representing an instance:

```swift
print(Color.red)
// Prints "red"
```
