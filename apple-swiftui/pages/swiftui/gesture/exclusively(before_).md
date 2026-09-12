> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/exclusively(before:)](https://developer.apple.com/documentation/swiftui/gesture/exclusively(before:))

# exclusively(before:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines two gestures exclusively to create a new gesture where only one gesture succeeds, giving precedence to the first gesture.

## Declaration

```swift
nonisolated func exclusively<Other>(before other: Other) -> ExclusiveGesture<Self, Other> where Other : Gesture
```

## Parameters

- `other`: A gesture you combine with your gesture, to create a new, combined gesture.

<a id="return-value"></a>

## Return Value

A gesture that’s the result of combining two gestures where only one of them can succeed. SwiftUI gives precedence to the first gesture.

## See Also

### Composing gestures

- [simultaneously(with:)](simultaneously%28with_%29.md): Combines a gesture with another gesture to create a new gesture that recognizes both gestures at the same time.
- [sequenced(before:)](sequenced%28before_%29.md): Sequences a gesture with another one to create a new gesture, which results in the second gesture only receiving events after the first gesture succeeds.
