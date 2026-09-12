> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitypriority/default](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority/default)

# default (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.

## Declaration

```swift
nonisolated static let `default`: UIAccessibilityPriority
```

## See Also

### Choosing a priority

- [high](high.md): A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.
- [low](low.md): A low-priority announcement that the system queues and speaks after other speech utterances are complete.

# UIAccessibilityPriorityDefault (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.

## Declaration

```objectivec
extern UIAccessibilityPriority const UIAccessibilityPriorityDefault;
```

## See Also

### Choosing a priority

- [UIAccessibilityPriorityHigh](high.md): A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.
- [UIAccessibilityPriorityLow](low.md): A low-priority announcement that the system queues and speaks after other speech utterances are complete.
