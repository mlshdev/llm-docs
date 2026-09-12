> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentable/updateuigesturerecognizer(_:context:)](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable/updateuigesturerecognizer(_:context:))

# updateUIGestureRecognizer(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Updates the `UIGestureRecognizer` (and coordinator) to the latest configuration.

## Declaration

```swift
@MainActor @preconcurrency func updateUIGestureRecognizer(_ recognizer: Self.UIGestureRecognizerType, context: Self.Context)
```

## Parameters

- `recognizer`: An instance of the represented gesture recognizer.
- `context`: A context structure containing information about the current state of the system, such as the current coordinator instance.

## Default Implementations

### UIGestureRecognizerRepresentable Implementations

- [updateUIGestureRecognizer(\_:context:)](updateuigesturerecognizer%28__context_%29-10jv.md): Updates the `UIGestureRecognizer` (and coordinator) to the latest configuration.
