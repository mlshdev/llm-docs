> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpfeedbackcommand/localizedtitle](https://developer.apple.com/documentation/mediaplayer/mpfeedbackcommand/localizedtitle)

# localizedTitle (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A localized string used to describe the context of a command.

## Declaration

```swift
var localizedTitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to store the text you want shown to the user in conjunction with this command. For example, you might assign the string “I like this” to this property for the command associated with a Like button. The text you specify is displayed to the user at appropriate times by the system.

## See Also

### Retrieving information about a feedback command

- [isActive](isactive.md): A Boolean value that indicates whether the feedback’s action is on or off.
- [localizedShortTitle](localizedshorttitle.md): A shortened version of the string used to describe the context of a command.

# localizedTitle (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A localized string used to describe the context of a command.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * localizedTitle;
```

<a id="Discussion"></a>

## Discussion

Use this property to store the text you want shown to the user in conjunction with this command. For example, you might assign the string “I like this” to this property for the command associated with a Like button. The text you specify is displayed to the user at appropriate times by the system.

## See Also

### Retrieving information about a feedback command

- [active](isactive.md): A Boolean value that indicates whether the feedback’s action is on or off.
- [localizedShortTitle](localizedshorttitle.md): A shortened version of the string used to describe the context of a command.
