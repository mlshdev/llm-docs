> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipressesevent/allpresses](https://developer.apple.com/documentation/uikit/uipressesevent/allpresses)

# allPresses (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The state of all physical buttons in the event.

## Declaration

```swift
var allPresses: Set<UIPress> { get }
```

<a id="return-value"></a>

## Return Value

The set of [UIPress](../uipress.md) instances that participated in this event.

## See Also

### Reading the event button presses

- [presses(for:)](presses%28for_%29.md): Returns the state of all physical buttons in the event that are associated with a particular gesture recognizer.

# allPresses (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The state of all physical buttons in the event.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<UIPress *> * allPresses;
```

<a id="return-value"></a>

## Return Value

The set of [UIPress](../uipress.md) instances that participated in this event.

## See Also

### Reading the event button presses

- [pressesForGestureRecognizer:](presses%28for_%29.md): Returns the state of all physical buttons in the event that are associated with a particular gesture recognizer.
