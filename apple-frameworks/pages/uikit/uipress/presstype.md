> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/presstype](https://developer.apple.com/documentation/uikit/uipress/presstype)

# UIPress.PressType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that represent buttons that a person can press.

## Declaration

```swift
enum PressType
```

## Topics

### Actions

- [UIPress.PressType.playPause](presstype/playpause.md): A constant that represents the play/pause button.
- [UIPress.PressType.select](presstype/select.md): A constant that represents the select button.
- [UIPress.PressType.menu](presstype/menu.md): A constant that represents the menu button.

### Navigation

- [UIPress.PressType.upArrow](presstype/uparrow.md): A constant that represents the up arrow button.
- [UIPress.PressType.downArrow](presstype/downarrow.md): A constant that represents the down arrow button.
- [UIPress.PressType.leftArrow](presstype/leftarrow.md): A constant that represents the left arrow button.
- [UIPress.PressType.rightArrow](presstype/rightarrow.md): A constant that represents the right arrow button.
- [UIPress.PressType.pageDown](presstype/pagedown.md): A constant that represents the page down button.
- [UIPress.PressType.pageUp](presstype/pageup.md): A constant that represents the page up button.

### Enumeration Cases

- [UIPress.PressType.tvRemoteFourColors](presstype/tvremotefourcolors.md): Represents a button on a TV remote labeled with four colors, analogous to the four separate color buttons found on some TV remotes. When this button is pressed, an app should perform the appropriate color action or if there are multiple color actions available provide UI to choose the specific color.
- [UIPress.PressType.tvRemoteOneTwoThree](presstype/tvremoteonetwothree.md): Represents a button on a TV remote labeled with 123. When this button is pressed, an app should provide UI to enter a specific channel number if channel numbers are available. If no channel numbers exist the app should provide UI to toggle channel category filters, search for channels by name or search for currently airing shows.

### Initializers

- [init(rawValue:)](presstype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIPress.Phase](phase-swift.enum.md): Constants that represent the phases of a button press.

# UIPressType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that represent buttons that a person can press.

## Declaration

```objectivec
enum UIPressType : NSInteger;
```

## Topics

### Actions

- [UIPressTypePlayPause](presstype/playpause.md): A constant that represents the play/pause button.
- [UIPressTypeSelect](presstype/select.md): A constant that represents the select button.
- [UIPressTypeMenu](presstype/menu.md): A constant that represents the menu button.

### Navigation

- [UIPressTypeUpArrow](presstype/uparrow.md): A constant that represents the up arrow button.
- [UIPressTypeDownArrow](presstype/downarrow.md): A constant that represents the down arrow button.
- [UIPressTypeLeftArrow](presstype/leftarrow.md): A constant that represents the left arrow button.
- [UIPressTypeRightArrow](presstype/rightarrow.md): A constant that represents the right arrow button.
- [UIPressTypePageDown](presstype/pagedown.md): A constant that represents the page down button.
- [UIPressTypePageUp](presstype/pageup.md): A constant that represents the page up button.

### Enumeration Cases

- [UIPressTypeTVRemoteFourColors](presstype/tvremotefourcolors.md): Represents a button on a TV remote labeled with four colors, analogous to the four separate color buttons found on some TV remotes. When this button is pressed, an app should perform the appropriate color action or if there are multiple color actions available provide UI to choose the specific color.
- [UIPressTypeTVRemoteOneTwoThree](presstype/tvremoteonetwothree.md): Represents a button on a TV remote labeled with 123. When this button is pressed, an app should provide UI to enter a specific channel number if channel numbers are available. If no channel numbers exist the app should provide UI to toggle channel category filters, search for channels by name or search for currently airing shows.

## See Also

### Constants

- [UIPressPhase](phase-swift.enum.md): Constants that represent the phases of a button press.
