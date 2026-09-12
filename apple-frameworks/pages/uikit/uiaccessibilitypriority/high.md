> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitypriority/high](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority/high)

# high (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.

## Declaration

```swift
nonisolated static let high: UIAccessibilityPriority
```

## See Also

### Choosing a priority

- [default](default.md): A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.
- [low](low.md): A low-priority announcement that the system queues and speaks after other speech utterances are complete.

# UIAccessibilityPriorityHigh (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.

## Declaration

```objectivec
extern UIAccessibilityPriority const UIAccessibilityPriorityHigh;
```

## See Also

### Choosing a priority

- [UIAccessibilityPriorityDefault](default.md): A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.
- [UIAccessibilityPriorityLow](low.md): A low-priority announcement that the system queues and speaks after other speech utterances are complete.
