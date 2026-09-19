> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiswipeactionsconfiguration/actions

# actions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The swipe actions.

## Declaration

```swift
var actions: [UIContextualAction] { get }
```

<a id="Discussion"></a>

## Discussion

The first object in this array corresponds to the default action, which is the action that’s performed in response to a full swipe.

## See Also

### Getting the swipe action information

- [performsFirstActionWithFullSwipe](performsfirstactionwithfullswipe.md): A Boolean value indicating whether a full swipe automatically performs the first action.

# actions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The swipe actions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UIContextualAction *> * actions;
```

<a id="Discussion"></a>

## Discussion

The first object in this array corresponds to the default action, which is the action that’s performed in response to a full swipe.

## See Also

### Getting the swipe action information

- [performsFirstActionWithFullSwipe](performsfirstactionwithfullswipe.md): A Boolean value indicating whether a full swipe automatically performs the first action.
