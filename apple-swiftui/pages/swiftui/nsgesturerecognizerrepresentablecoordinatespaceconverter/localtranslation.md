> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localtranslation](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/localtranslation)

# localTranslation

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The represented gesture recognizer’s current translation in the coordinate space of the SwiftUI view it’s attached to, or `nil` if the represented gesture recognizer doesn’t respond to `-translationInView:` selector.

## Declaration

```swift
@export(implementation) var localTranslation: CGPoint? { get }
```
