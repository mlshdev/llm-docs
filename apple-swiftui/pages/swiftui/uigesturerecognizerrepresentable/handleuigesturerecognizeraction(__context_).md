> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentable/handleuigesturerecognizeraction(_:context:)](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable/handleuigesturerecognizeraction(_:context:))

# handleUIGestureRecognizerAction(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Handles recognition of the represented `UIGestureRecognizer`.

## Declaration

```swift
@MainActor @preconcurrency func handleUIGestureRecognizerAction(_ recognizer: Self.UIGestureRecognizerType, context: Self.Context)
```

## Parameters

- `recognizer`: An instance of the represented gesture recognizer.
- `context`: A context structure containing information about the current state of the system, such as the current coordinator instance.

<a id="discussion"></a>

## Discussion

If you implement this method, SwiftUI calls it when the wrapped gesture recognizer is recognized.

## Default Implementations

### UIGestureRecognizerRepresentable Implementations

- [handleUIGestureRecognizerAction(\_:context:)](handleuigesturerecognizeraction%28__context_%29-8u4zs.md): Handles recognition of the represented `UIGestureRecognizer`.
