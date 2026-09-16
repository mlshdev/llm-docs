> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/localtranslation

# localTranslation

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The represented gesture recognizer’s current translation in the coordinate space of the SwiftUI view it’s attached to.

## Declaration

```swift
@export(implementation) var localTranslation: CGPoint? { get }
```

<a id="discussion"></a>

## Discussion

If the gesture recognizer does not implement a `translationInView:` method, returns nil.
