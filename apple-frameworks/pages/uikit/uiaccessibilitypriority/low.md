> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitypriority/low](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority/low)

# low (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A low-priority announcement that the system queues and speaks after other speech utterances are complete.

## Declaration

```swift
nonisolated static let low: UIAccessibilityPriority
```

## See Also

### Choosing a priority

- [high](high.md): A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.
- [default](default.md): A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.

# UIAccessibilityPriorityLow (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A low-priority announcement that the system queues and speaks after other speech utterances are complete.

## Declaration

```objectivec
extern UIAccessibilityPriority const UIAccessibilityPriorityLow;
```

## See Also

### Choosing a priority

- [UIAccessibilityPriorityHigh](high.md): A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.
- [UIAccessibilityPriorityDefault](default.md): A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.
