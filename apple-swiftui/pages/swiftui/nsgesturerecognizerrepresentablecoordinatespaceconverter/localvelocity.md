> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localvelocity](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localvelocity)

# localVelocity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The represented gesture recognizer’s current velocity in the coordinate space of the SwiftUI view it’s attached to, or `nil` if the represented gesture recognizer doesn’t respond to `-velocityInView:` selector.

## Declaration

```swift
@export(implementation) var localVelocity: CGPoint? { get }
```
