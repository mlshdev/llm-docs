> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/simultaneously(with:)](https://developer.apple.com/documentation/swiftui/gesture/simultaneously(with:))

# simultaneously(with:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines a gesture with another gesture to create a new gesture that recognizes both gestures at the same time.

## Declaration

```swift
nonisolated func simultaneously<Other>(with other: Other) -> SimultaneousGesture<Self, Other> where Other : Gesture
```

## Parameters

- `other`: A gesture that you want to combine with your gesture to create a new, combined gesture.

<a id="return-value"></a>

## Return Value

A gesture with two simultaneous gestures.

## See Also

### Composing gestures

- [sequenced(before:)](sequenced%28before_%29.md): Sequences a gesture with another one to create a new gesture, which results in the second gesture only receiving events after the first gesture succeeds.
- [exclusively(before:)](exclusively%28before_%29.md): Combines two gestures exclusively to create a new gesture where only one gesture succeeds, giving precedence to the first gesture.
