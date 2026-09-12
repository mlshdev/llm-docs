> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/discoverabilitytitle](https://developer.apple.com/documentation/uikit/uiaction/discoverabilitytitle)

# discoverabilityTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An elaborated title that explains the purpose of the action.

## Declaration

```swift
var discoverabilityTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system uses this property to display information about the command. In iOS, the system displays this title in the discoverability heads-up display (HUD). If this property is `nil`, the HUD displays the [title](title.md) property.

In Mac apps built with Mac Catalyst, the system displays the discoverability title as a tooltip.

## See Also

### Getting information about the action

- [title](title.md): The action’s title.
- [image](image.md): The action’s image.
- [identifier](identifier-swift.property.md): The unique identifier for the action.
- [attributes](attributes.md): The attributes indicating the style of the action.
- [state](state.md): The state of the action.
- [sender](sender.md): The object responsible for the action handler.

# discoverabilityTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An elaborated title that explains the purpose of the action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * discoverabilityTitle;
```

<a id="Discussion"></a>

## Discussion

The system uses this property to display information about the command. In iOS, the system displays this title in the discoverability heads-up display (HUD). If this property is `nil`, the HUD displays the [title](title.md) property.

In Mac apps built with Mac Catalyst, the system displays the discoverability title as a tooltip.

## See Also

### Getting information about the action

- [title](title.md): The action’s title.
- [image](image.md): The action’s image.
- [identifier](identifier-swift.property.md): The unique identifier for the action.
- [attributes](attributes.md): The attributes indicating the style of the action.
- [state](state.md): The state of the action.
- [sender](sender.md): The object responsible for the action handler.
