> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechrecognizer/listensinforegroundonly](https://developer.apple.com/documentation/appkit/nsspeechrecognizer/listensinforegroundonly)

# listensInForegroundOnly (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the speech recognizer object should only enable its commands when its application is the frontmost one.

## Declaration

```swift
var listensInForegroundOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the speech recognizer’s commands are only recognized when the speech recognizer’s application is the frontmost application—typically the application displaying the menu bar. If the value of the property is [false](https://developer.apple.com/documentation/swift/false), the commands are recognized regardless of the visibility of the application, including agent applications (agent applications, which have the `LSUIElement` property set, do not appear in the Dock or Force Quit window). The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Speech Recognizers

- [commands](commands.md): An array of strings defining the commands for which the speech recognizer object should listen.
- [displayedCommandsTitle](displayedcommandstitle.md): The title of the commands section in the Speech Commands window or `nil` if there is no title.
- [blocksOtherRecognizers](blocksotherrecognizers.md): A Boolean value that indicates whether the speech recognizer object should block all other recognizers (that is, other applications attempting to understand spoken commands) when listening.

# listensInForegroundOnly (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the speech recognizer object should only enable its commands when its application is the frontmost one.

## Declaration

```objectivec
@property BOOL listensInForegroundOnly;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the speech recognizer’s commands are only recognized when the speech recognizer’s application is the frontmost application—typically the application displaying the menu bar. If the value of the property is [false](https://developer.apple.com/documentation/swift/false), the commands are recognized regardless of the visibility of the application, including agent applications (agent applications, which have the `LSUIElement` property set, do not appear in the Dock or Force Quit window). The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Speech Recognizers

- [commands](commands.md): An array of strings defining the commands for which the speech recognizer object should listen.
- [displayedCommandsTitle](displayedcommandstitle.md): The title of the commands section in the Speech Commands window or `nil` if there is no title.
- [blocksOtherRecognizers](blocksotherrecognizers.md): A Boolean value that indicates whether the speech recognizer object should block all other recognizers (that is, other applications attempting to understand spoken commands) when listening.
