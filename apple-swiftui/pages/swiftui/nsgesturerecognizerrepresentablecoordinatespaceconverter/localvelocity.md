> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localvelocity

# localVelocity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The represented gesture recognizer’s current velocity in the coordinate space of the SwiftUI view it’s attached to, or `nil` if the represented gesture recognizer doesn’t respond to `-velocityInView:` selector.

## Declaration

```swift
@export(implementation) var localVelocity: CGPoint? { get }
```
