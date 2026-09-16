> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable/updatensgesturerecognizer(_:context:)

# updateNSGestureRecognizer(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Updates the `NSGestureRecognizer` (and coordinator) to the latest configuration.

## Declaration

```swift
@MainActor @preconcurrency func updateNSGestureRecognizer(_ recognizer: Self.NSGestureRecognizerType, context: Self.Context)
```

## Parameters

- `recognizer`: An instance of the represented gesture recognizer.
- `context`: A context structure containing information about the current state of the system, such as the current coordinator instance.

## Default Implementations

### NSGestureRecognizerRepresentable Implementations

- [updateNSGestureRecognizer(\_:context:)](updatensgesturerecognizer%28__context_%29-1s5x4.md): Updates the `NSGestureRecognizer` (and coordinator) to the latest configuration.
