> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/modifiers(_:)](https://developer.apple.com/documentation/swiftui/gesture/modifiers(_:))

# modifiers(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Combines a gesture with keyboard modifiers.

## Declaration

```swift
@MainActor @preconcurrency func modifiers(_ modifiers: EventModifiers) -> _ModifiersGesture<Self>
```

## Parameters

- `modifiers`: A set of flags that correspond to the modifier keys that the user needs to hold down.

<a id="return-value"></a>

## Return Value

A new gesture that combines a gesture with keyboard modifiers.

<a id="discussion"></a>

## Discussion

The gesture receives updates while the user presses the modifier keys that correspond to the given modifiers option set.
