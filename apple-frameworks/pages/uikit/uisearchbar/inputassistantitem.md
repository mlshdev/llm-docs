> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/inputassistantitem](https://developer.apple.com/documentation/uikit/uisearchbar/inputassistantitem)

# inputAssistantItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 2.0+

The input assistant to use for configuring the keyboard’s shortcuts bar.

## Declaration

```swift
var inputAssistantItem: UITextInputAssistantItem { get }
```

<a id="Discussion"></a>

## Discussion

When search is engaged on iPad, the shortcuts bar above the keyboard contains typing suggestions and may contain other controls for managing text. This property contains the object you use to configure the custom bar button items above the keyboard. The shortcuts bar is not available on iPhone or iPod Touch.

For more information about how to configure shortcut items, see [UITextInputAssistantItem](../uitextinputassistantitem.md).

# inputAssistantItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 2.0+

The input assistant to use for configuring the keyboard’s shortcuts bar.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UITextInputAssistantItem * inputAssistantItem;
```

<a id="Discussion"></a>

## Discussion

When search is engaged on iPad, the shortcuts bar above the keyboard contains typing suggestions and may contain other controls for managing text. This property contains the object you use to configure the custom bar button items above the keyboard. The shortcuts bar is not available on iPhone or iPod Touch.

For more information about how to configure shortcut items, see [UITextInputAssistantItem](../uitextinputassistantitem.md).
