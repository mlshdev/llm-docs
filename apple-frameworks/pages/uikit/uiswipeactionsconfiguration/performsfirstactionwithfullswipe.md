> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipeactionsconfiguration/performsfirstactionwithfullswipe](https://developer.apple.com/documentation/uikit/uiswipeactionsconfiguration/performsfirstactionwithfullswipe)

# performsFirstActionWithFullSwipe (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether a full swipe automatically performs the first action.

## Declaration

```swift
var performsFirstActionWithFullSwipe: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), a full swipe in the row performs the first action listed in the [actions](actions.md) property. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the swipe action information

- [actions](actions.md): The swipe actions.

# performsFirstActionWithFullSwipe (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether a full swipe automatically performs the first action.

## Declaration

```objectivec
@property (nonatomic) BOOL performsFirstActionWithFullSwipe;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), a full swipe in the row performs the first action listed in the [actions](actions.md) property. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the swipe action information

- [actions](actions.md): The swipe actions.
