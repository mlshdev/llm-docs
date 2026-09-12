> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingcoordinator](https://developer.apple.com/documentation/uikit/uitextformattingcoordinator)

# UITextFormattingCoordinator (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that coordinates text formatting using the standard Mac font panel.

## Declaration

```swift
@MainActor class UITextFormattingCoordinator
```

## Topics

### Creating a Text-Formatting Coordinator

- [init(for:)](uitextformattingcoordinator/init%28for_%29.md): Creates a text-formatting coordinator for the specified window scene.
- [init(windowScene:)](uitextformattingcoordinator/init%28windowscene_%29.md): Initializes and returns a new text-formatting coordinator for the specified window scene.

### Showing the Font Panel

- [isFontPanelVisible](uitextformattingcoordinator/isfontpanelvisible.md): A Boolean value that indicates whether the font panel is visible.
- [toggleFontPanel(\_:)](uitextformattingcoordinator/togglefontpanel%28__%29.md): Toggles the visibility of the font panel.

### Configuring the Font Panel

- [setSelectedAttributes(\_:isMultiple:)](uitextformattingcoordinator/setselectedattributes%28__ismultiple_%29.md): Configures the initial display state of the font panel with the attributes of the selected text.

### Applying Updated Text Attributes

- [delegate](uitextformattingcoordinator/delegate.md): The delegate of the text-formatting coordinator.
- [UITextFormattingCoordinatorDelegate](uitextformattingcoordinatordelegate.md): The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.

### Initializers

- [init(forWindowScene:)](uitextformattingcoordinator/init%28forwindowscene_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md)

## See Also

### Text formatting

- [UITextAttributesConversionHandler](uitextattributesconversionhandler.md): A handler for updating text with current font panel settings.

# UITextFormattingCoordinator (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that coordinates text formatting using the standard Mac font panel.

## Declaration

```objectivec
@interface UITextFormattingCoordinator : NSObject
```

## Topics

### Creating a Text-Formatting Coordinator

- [textFormattingCoordinatorForWindowScene:](uitextformattingcoordinator/init%28for_%29.md): Creates a text-formatting coordinator for the specified window scene.
- [initWithWindowScene:](uitextformattingcoordinator/init%28windowscene_%29.md): Initializes and returns a new text-formatting coordinator for the specified window scene.

### Showing the Font Panel

- [fontPanelVisible](uitextformattingcoordinator/isfontpanelvisible.md): A Boolean value that indicates whether the font panel is visible.
- [toggleFontPanel:](uitextformattingcoordinator/togglefontpanel%28__%29.md): Toggles the visibility of the font panel.

### Configuring the Font Panel

- [setSelectedAttributes:isMultiple:](uitextformattingcoordinator/setselectedattributes%28__ismultiple_%29.md): Configures the initial display state of the font panel with the attributes of the selected text.

### Applying Updated Text Attributes

- [delegate](uitextformattingcoordinator/delegate.md): The delegate of the text-formatting coordinator.
- [UITextFormattingCoordinatorDelegate](uitextformattingcoordinatordelegate.md): The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md)

## See Also

### Text formatting

- [UITextAttributesConversionHandler](uitextattributesconversionhandler.md): A handler for updating text with current font panel settings.
