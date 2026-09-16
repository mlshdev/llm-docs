> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable/updateuigesturerecognizer(_:context:)

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
