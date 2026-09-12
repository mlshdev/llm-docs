> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpfeedbackcommand/localizedshorttitle](https://developer.apple.com/documentation/mediaplayer/mpfeedbackcommand/localizedshorttitle)

# localizedShortTitle (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 2.0+

A shortened version of the string used to describe the context of a command.

## Declaration

```swift
var localizedShortTitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide information about a feedback command that is suitable for display when screen space is more constrained. For example, Apple Watch uses this string instead of the string in the [localizedTitle](localizedtitle.md) property.

## See Also

### Retrieving information about a feedback command

- [isActive](isactive.md): A Boolean value that indicates whether the feedback’s action is on or off.
- [localizedTitle](localizedtitle.md): A localized string used to describe the context of a command.

# localizedShortTitle (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A shortened version of the string used to describe the context of a command.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * localizedShortTitle;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide information about a feedback command that is suitable for display when screen space is more constrained. For example, Apple Watch uses this string instead of the string in the [localizedTitle](localizedtitle.md) property.

## See Also

### Retrieving information about a feedback command

- [active](isactive.md): A Boolean value that indicates whether the feedback’s action is on or off.
- [localizedTitle](localizedtitle.md): A localized string used to describe the context of a command.
