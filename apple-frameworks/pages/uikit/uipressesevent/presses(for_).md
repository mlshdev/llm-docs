> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipressesevent/presses(for:)](https://developer.apple.com/documentation/uikit/uipressesevent/presses(for:))

# presses(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the state of all physical buttons in the event that are associated with a particular gesture recognizer.

## Declaration

```swift
func presses(for gesture: UIGestureRecognizer) -> Set<UIPress>
```

## Parameters

- `gesture`: A gesture recognizer.

<a id="return-value"></a>

## Return Value

The set of [UIPress](../uipress.md) instances that participated in this event that are associated with the gesture recognizer.

## See Also

### Reading the event button presses

- [allPresses](allpresses.md): The state of all physical buttons in the event.

# pressesForGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the state of all physical buttons in the event that are associated with a particular gesture recognizer.

## Declaration

```objectivec
- (NSSet<UIPress *> *) pressesForGestureRecognizer:(UIGestureRecognizer *) gesture;
```

## Parameters

- `gesture`: A gesture recognizer.

<a id="return-value"></a>

## Return Value

The set of [UIPress](../uipress.md) instances that participated in this event that are associated with the gesture recognizer.

## See Also

### Reading the event button presses

- [allPresses](allpresses.md): The state of all physical buttons in the event.
