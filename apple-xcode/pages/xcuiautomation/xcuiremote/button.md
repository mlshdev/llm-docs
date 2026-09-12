> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiremote/button](https://developer.apple.com/documentation/xcuiautomation/xcuiremote/button)

# XCUIRemoteButton (Swift)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A button on a physical remote control.

## Declaration

```swift
enum XCUIRemoteButton
```

```swift
enum Button
```

## Topics

### Remote buttons

- [XCUIRemoteButton.up](../xcuiremotebutton/up.md): A constant that represents the up button on a remote.
- [XCUIRemoteButton.down](../xcuiremotebutton/down.md): A constant that represents the down button on a remote.
- [XCUIRemoteButton.left](../xcuiremotebutton/left.md): A constant that represents the left button on a remote.
- [XCUIRemoteButton.right](../xcuiremotebutton/right.md): A constant that represents the right button on a remote.
- [XCUIRemoteButton.select](../xcuiremotebutton/select.md): A constant that represents the select button on a remote.
- [XCUIRemoteButton.menu](../xcuiremotebutton/menu.md): A constant that represents the menu button on a remote.
- [XCUIRemoteButton.playPause](../xcuiremotebutton/playpause.md): A constant that represents the play-and-pause button on a remote.
- [XCUIRemoteButton.home](../xcuiremotebutton/home.md): A constant that represents the home button on a remote.
- [XCUIRemoteButton.pageUp](../xcuiremotebutton/pageup.md): A constant that represents the page up button on a remote.
- [XCUIRemoteButton.pageDown](../xcuiremotebutton/pagedown.md): A constant that represents the page down button on a remote.
- [XCUIRemoteButton.guide](../xcuiremotebutton/guide.md): A constant that represents the guide button on a remote.
- [XCUIRemoteButton.fourColors](../xcuiremotebutton/fourcolors.md): A constant that represents the color functions button on a remote.
- [XCUIRemoteButton.oneTwoThree](../xcuiremotebutton/onetwothree.md): A constant that represents the channel-tuning button on a remote.
- [XCUIRemoteButton.tvProvider](../xcuiremotebutton/tvprovider.md): A constant that represents the TV provider button on a remote.

### Initializers

- [init(rawValue:)](../xcuiremotebutton/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pressing remote buttons

- [press(\_:)](press%28__%29.md): Sends a momentary press of a button on a physical remote control.
- [press(\_:forDuration:)](press%28__forduration_%29.md): Sends a press and hold of a button on a physical remote control, holding for the specified duration.

# XCUIRemoteButton (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A button on a physical remote control.

## Declaration

```objectivec
enum XCUIRemoteButton : NSUInteger;
```

## Topics

### Remote buttons

- [XCUIRemoteButtonUp](../xcuiremotebutton/up.md): A constant that represents the up button on a remote.
- [XCUIRemoteButtonDown](../xcuiremotebutton/down.md): A constant that represents the down button on a remote.
- [XCUIRemoteButtonLeft](../xcuiremotebutton/left.md): A constant that represents the left button on a remote.
- [XCUIRemoteButtonRight](../xcuiremotebutton/right.md): A constant that represents the right button on a remote.
- [XCUIRemoteButtonSelect](../xcuiremotebutton/select.md): A constant that represents the select button on a remote.
- [XCUIRemoteButtonMenu](../xcuiremotebutton/menu.md): A constant that represents the menu button on a remote.
- [XCUIRemoteButtonPlayPause](../xcuiremotebutton/playpause.md): A constant that represents the play-and-pause button on a remote.
- [XCUIRemoteButtonHome](../xcuiremotebutton/home.md): A constant that represents the home button on a remote.
- [XCUIRemoteButtonPageUp](../xcuiremotebutton/pageup.md): A constant that represents the page up button on a remote.
- [XCUIRemoteButtonPageDown](../xcuiremotebutton/pagedown.md): A constant that represents the page down button on a remote.
- [XCUIRemoteButtonGuide](../xcuiremotebutton/guide.md): A constant that represents the guide button on a remote.
- [XCUIRemoteButtonFourColors](../xcuiremotebutton/fourcolors.md): A constant that represents the color functions button on a remote.
- [XCUIRemoteButtonOneTwoThree](../xcuiremotebutton/onetwothree.md): A constant that represents the channel-tuning button on a remote.
- [XCUIRemoteButtonTVProvider](../xcuiremotebutton/tvprovider.md): A constant that represents the TV provider button on a remote.

## See Also

### Pressing remote buttons

- [pressButton:](press%28__%29.md): Sends a momentary press of a button on a physical remote control.
- [pressButton:forDuration:](press%28__forduration_%29.md): Sends a press and hold of a button on a physical remote control, holding for the specified duration.
