> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechrecognizer/displayedcommandstitle](https://developer.apple.com/documentation/appkit/nsspeechrecognizer/displayedcommandstitle)

# displayedCommandsTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the commands section in the Speech Commands window or `nil` if there is no title.

## Declaration

```swift
var displayedCommandsTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is a non-empty string, commands are displayed in the Speech Commands window indented under a section with this title. If `title` is `nil` or an empty string, the commands are displayed at the top level of the Speech Commands window. This default is not to display the commands under a section title.

## See Also

### Configuring Speech Recognizers

- [commands](commands.md): An array of strings defining the commands for which the speech recognizer object should listen.
- [listensInForegroundOnly](listensinforegroundonly.md): A Boolean value that indicates whether the speech recognizer object should only enable its commands when its application is the frontmost one.
- [blocksOtherRecognizers](blocksotherrecognizers.md): A Boolean value that indicates whether the speech recognizer object should block all other recognizers (that is, other applications attempting to understand spoken commands) when listening.

# displayedCommandsTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the commands section in the Speech Commands window or `nil` if there is no title.

## Declaration

```objectivec
@property (copy, nullable) NSString * displayedCommandsTitle;
```

<a id="Discussion"></a>

## Discussion

When this property is a non-empty string, commands are displayed in the Speech Commands window indented under a section with this title. If `title` is `nil` or an empty string, the commands are displayed at the top level of the Speech Commands window. This default is not to display the commands under a section title.

## See Also

### Configuring Speech Recognizers

- [commands](commands.md): An array of strings defining the commands for which the speech recognizer object should listen.
- [listensInForegroundOnly](listensinforegroundonly.md): A Boolean value that indicates whether the speech recognizer object should only enable its commands when its application is the frontmost one.
- [blocksOtherRecognizers](blocksotherrecognizers.md): A Boolean value that indicates whether the speech recognizer object should block all other recognizers (that is, other applications attempting to understand spoken commands) when listening.
