> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentable/makensgesturerecognizer(context:)](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable/makensgesturerecognizer(context:))

# makeNSGestureRecognizer(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Creates an instance of the represented gesture recognizer.

## Declaration

```swift
@MainActor @preconcurrency func makeNSGestureRecognizer(context: Self.Context) -> Self.NSGestureRecognizerType
```

## Parameters

- `context`: A context structure containing information about the current state of the system, such as the current coordinator instance.

<a id="discussion"></a>

## Discussion

> **Note**

> Gesture recognizers are created on-demand and torn down when an event sequence ends, so do not perform expensive work in this method.
