> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrownsequencer/ishapticfeedbackenabled](https://developer.apple.com/documentation/watchkit/wkcrownsequencer/ishapticfeedbackenabled)

# isHapticFeedbackEnabled (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

A Boolean value that determines whether the crown sequencer’s haptic feedback is enabled.

## Declaration

```swift
var isHapticFeedbackEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true). In Apple Watch Series 4 and later, the watch provides linear haptic feedback as the user rotates the digital crown. Set this property to [false](https://developer.apple.com/documentation/swift/false) to disable the haptic feedback while the crown sequencer has the focus. For example, you can use this property to disable haptic feedback if the feedback does not match the screen’s animation.

## See Also

### Related Documentation

- [isTableScrollingHapticFeedbackEnabled](../wkinterfacecontroller/istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

# hapticFeedbackEnabled (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

A Boolean value that determines whether the crown sequencer’s haptic feedback is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isHapticFeedbackEnabled) BOOL hapticFeedbackEnabled;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true). In Apple Watch Series 4 and later, the watch provides linear haptic feedback as the user rotates the digital crown. Set this property to [false](https://developer.apple.com/documentation/swift/false) to disable the haptic feedback while the crown sequencer has the focus. For example, you can use this property to disable haptic feedback if the feedback does not match the screen’s animation.

## See Also

### Related Documentation

- [tableScrollingHapticFeedbackEnabled](../wkinterfacecontroller/istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.
