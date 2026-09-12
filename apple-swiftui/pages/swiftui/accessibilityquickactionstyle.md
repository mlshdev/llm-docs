> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityquickactionstyle](https://developer.apple.com/documentation/swiftui/accessibilityquickactionstyle)

# AccessibilityQuickActionStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** watchOS 9.0+

A type that describes the presentation style of an accessibility quick action.

## Declaration

```swift
protocol AccessibilityQuickActionStyle
```

## Topics

### Getting built-in menu styles

- [outline](accessibilityquickactionstyle/outline.md): Conforms when `Self` is `AccessibilityQuickActionOutlineStyle`. A presentation style that animates an outline around the view when the accessibility quick action is active.
- [prompt](accessibilityquickactionstyle/prompt.md): Conforms when `Self` is `AccessibilityQuickActionPromptStyle`. A presentation style that displays a prompt to the user when the accessibility quick action is active.

### Supporting types

- [AccessibilityQuickActionOutlineStyle](accessibilityquickactionoutlinestyle.md): A presentation style that displays a prompt to the user when the accessibility quick action is active.
- [AccessibilityQuickActionPromptStyle](accessibilityquickactionpromptstyle.md): A presentation style that displays a prompt to the user when the accessibility quick action is active.

## Relationships

### Conforming Types

- [AccessibilityQuickActionOutlineStyle](accessibilityquickactionoutlinestyle.md)
- [AccessibilityQuickActionPromptStyle](accessibilityquickactionpromptstyle.md)

## See Also

### Offering Quick Actions to people

- [accessibilityQuickAction(style:content:)](view/accessibilityquickaction%28style_content_%29.md): Adds a quick action to be shown by the system when active.
- [accessibilityQuickAction(style:isActive:content:)](view/accessibilityquickaction%28style_isactive_content_%29.md): Adds a quick action to be shown by the system when active.
