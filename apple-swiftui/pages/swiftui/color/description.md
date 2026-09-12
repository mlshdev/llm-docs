> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/description](https://developer.apple.com/documentation/swiftui/color/description)

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
