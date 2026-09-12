> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommand/discoverabilitytitle](https://developer.apple.com/documentation/uikit/uicommand/discoverabilitytitle)

# discoverabilityTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An elaborated title that explains the purpose of the command.

## Declaration

```swift
var discoverabilityTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system uses this property to display information about the command. In iOS, the system displays this title in the discoverability heads-up display (HUD). If this property is `nil`, the HUD displays the [title](title.md) property.

In Mac apps built with Mac Catalyst, the system displays the discoverability title as a tooltip.

## See Also

### Getting information about the command

- [title](title.md): The command’s title.
- [image](image.md): The command’s image.
- [action](action.md): The selector identifying the action method called after the user selects the command.
- [attributes](attributes.md): The attributes indicating the style of the command.
- [state](state.md): The state of the command.

# discoverabilityTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An elaborated title that explains the purpose of the command.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * discoverabilityTitle;
```

<a id="Discussion"></a>

## Discussion

The system uses this property to display information about the command. In iOS, the system displays this title in the discoverability heads-up display (HUD). If this property is `nil`, the HUD displays the [title](title.md) property.

In Mac apps built with Mac Catalyst, the system displays the discoverability title as a tooltip.

## See Also

### Getting information about the command

- [title](title.md): The command’s title.
- [image](image.md): The command’s image.
- [action](action.md): The selector identifying the action method called after the user selects the command.
- [attributes](attributes.md): The attributes indicating the style of the command.
- [state](state.md): The state of the command.
