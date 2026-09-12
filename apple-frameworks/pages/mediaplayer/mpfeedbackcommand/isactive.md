> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpfeedbackcommand/isactive](https://developer.apple.com/documentation/mediaplayer/mpfeedbackcommand/isactive)

# isActive (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that indicates whether the feedback’s action is on or off.

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), feedback is available. Use this property to get or set the current state of the given feedback. An example of an active feedback command is a Like button that has been enabled by the user. In that scenario, toggling the button on and off would similarly toggle the value in this property.

## See Also

### Retrieving information about a feedback command

- [localizedTitle](localizedtitle.md): A localized string used to describe the context of a command.
- [localizedShortTitle](localizedshorttitle.md): A shortened version of the string used to describe the context of a command.

# active (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that indicates whether the feedback’s action is on or off.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), feedback is available. Use this property to get or set the current state of the given feedback. An example of an active feedback command is a Like button that has been enabled by the user. In that scenario, toggling the button on and off would similarly toggle the value in this property.

## See Also

### Retrieving information about a feedback command

- [localizedTitle](localizedtitle.md): A localized string used to describe the context of a command.
- [localizedShortTitle](localizedshorttitle.md): A shortened version of the string used to describe the context of a command.
