> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpasteitem](https://developer.apple.com/documentation/uikit/uitextpasteitem)

# UITextPasteItem (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for obtaining information about, and interacting with, a text item for pasting or dropping.

## Declaration

```swift
@MainActor protocol UITextPasteItem : NSObjectProtocol
```

## Topics

### Accessing the text paste item’s data

- [itemProvider](uitextpasteitem/itemprovider.md): The item provider for the item being pasted or dropped.
- [localObject](uitextpasteitem/localobject.md): The custom local object that the copy or drag source optionally attached to the drag item.

### Getting the default attributes for a string

- [defaultAttributes](uitextpasteitem/defaultattributes.md): The dictionary of default attributes that the system applies, during pasting or dropping, to plaintext strings from an item provider.

### Setting a text paste item’s result value

- [setResult(string:)](uitextpasteitem/setresult%28string_%29.md): Sets a text paste item’s textual value to a specified plaintext string from the item provider.
- [setResult(attributedString:)](uitextpasteitem/setresult%28attributedstring_%29.md): Sets a text paste item’s textual value to a specified attributed string from the item provider.
- [setResult(attachment:)](uitextpasteitem/setresult%28attachment_%29.md): Sets a text paste item’s attachment value to a specified value.
- [setDefaultResult()](uitextpasteitem/setdefaultresult%28%29.md): Sets the text paste item’s value to the default value based on the item provider’s data.
- [setNoResult()](uitextpasteitem/setnoresult%28%29.md): Sets the text paste item’s textual value to not include data from the item provider.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md)

## See Also

### Pasteboard support

- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
- [UITextPasteDelegate](uitextpastedelegate.md): The interface for handling pasting and dropping of text, using item providers.
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md): The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.

# UITextPasteItem (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for obtaining information about, and interacting with, a text item for pasting or dropping.

## Declaration

```objectivec
@protocol UITextPasteItem <NSObject>
```

## Topics

### Accessing the text paste item’s data

- [itemProvider](uitextpasteitem/itemprovider.md): The item provider for the item being pasted or dropped.
- [localObject](uitextpasteitem/localobject.md): The custom local object that the copy or drag source optionally attached to the drag item.

### Getting the default attributes for a string

- [defaultAttributes](uitextpasteitem/defaultattributes.md): The dictionary of default attributes that the system applies, during pasting or dropping, to plaintext strings from an item provider.

### Setting a text paste item’s result value

- [setStringResult:](uitextpasteitem/setresult%28string_%29.md): Sets a text paste item’s textual value to a specified plaintext string from the item provider.
- [setAttributedStringResult:](uitextpasteitem/setresult%28attributedstring_%29.md): Sets a text paste item’s textual value to a specified attributed string from the item provider.
- [setAttachmentResult:](uitextpasteitem/setresult%28attachment_%29.md): Sets a text paste item’s attachment value to a specified value.
- [setDefaultResult](uitextpasteitem/setdefaultresult%28%29.md): Sets the text paste item’s value to the default value based on the item provider’s data.
- [setNoResult](uitextpasteitem/setnoresult%28%29.md): Sets the text paste item’s textual value to not include data from the item provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md)

## See Also

### Pasteboard support

- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
- [UITextPasteDelegate](uitextpastedelegate.md): The interface for handling pasting and dropping of text, using item providers.
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md): The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.
