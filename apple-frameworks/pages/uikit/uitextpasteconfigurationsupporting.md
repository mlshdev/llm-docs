> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpasteconfigurationsupporting](https://developer.apple.com/documentation/uikit/uitextpasteconfigurationsupporting)

# UITextPasteConfigurationSupporting (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.

## Declaration

```swift
@MainActor protocol UITextPasteConfigurationSupporting : UIPasteConfigurationSupporting
```

## Topics

### Setting the text paste delegate

- [pasteDelegate](uitextpasteconfigurationsupporting/pastedelegate.md): The text paste delegate that handles pasting and dropping of text, using item providers.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)

### Inherited By

- [UITextDroppable](uitextdroppable.md)

### Conforming Types

- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Pasteboard support

- [UITextPasteItem](uitextpasteitem.md): The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
- [UITextPasteDelegate](uitextpastedelegate.md): The interface for handling pasting and dropping of text, using item providers.

# UITextPasteConfigurationSupporting (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.

## Declaration

```objectivec
@protocol UITextPasteConfigurationSupporting <UIPasteConfigurationSupporting>
```

## Topics

### Setting the text paste delegate

- [pasteDelegate](uitextpasteconfigurationsupporting/pastedelegate.md): The text paste delegate that handles pasting and dropping of text, using item providers.

## Relationships

### Inherits From

- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)

### Inherited By

- [UITextDroppable](uitextdroppable.md)

### Conforming Types

- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Pasteboard support

- [UITextPasteItem](uitextpasteitem.md): The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
- [UITextPasteDelegate](uitextpastedelegate.md): The interface for handling pasting and dropping of text, using item providers.
