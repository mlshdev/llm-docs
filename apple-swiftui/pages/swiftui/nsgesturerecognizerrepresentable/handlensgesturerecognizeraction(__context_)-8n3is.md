> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentable/handlensgesturerecognizeraction(_:context:)-8n3is](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable/handlensgesturerecognizeraction(_:context:)-8n3is)

# handleNSGestureRecognizerAction(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Handles recognition of the represented `NSGestureRecognizer`.

## Declaration

```swift
@MainActor @preconcurrency func handleNSGestureRecognizerAction(_ recognizer: Self.NSGestureRecognizerType, context: Self.Context)
```

## Parameters

- `recognizer`: An instance of the represented gesture recognizer.
- `context`: A context structure containing information about the current state of the system, such as the current coordinator instance.

<a id="discussion"></a>

## Discussion

If you implement this method, SwiftUI calls it when the wrapped gesture recognizer is recognized.
