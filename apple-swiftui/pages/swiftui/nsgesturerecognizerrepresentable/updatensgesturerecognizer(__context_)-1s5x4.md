> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentable/updatensgesturerecognizer(_:context:)-1s5x4](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable/updatensgesturerecognizer(_:context:)-1s5x4)

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
