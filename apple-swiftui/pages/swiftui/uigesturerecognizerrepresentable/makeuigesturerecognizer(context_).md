> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable/makeuigesturerecognizer(context:)

# makeUIGestureRecognizer(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Creates an instance of the represented gesture recognizer.

## Declaration

```swift
@MainActor @preconcurrency func makeUIGestureRecognizer(context: Self.Context) -> Self.UIGestureRecognizerType
```

## Parameters

- `context`: A context structure containing information about the current state of the system, such as the current coordinator instance.

<a id="discussion"></a>

## Discussion

> **Note**

> Gesture recognizers are created on-demand and torn down when an event sequence ends, so do not perform expensive work in this method.
