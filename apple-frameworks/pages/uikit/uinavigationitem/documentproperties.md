> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/documentproperties](https://developer.apple.com/documentation/uikit/uinavigationitem/documentproperties)

# documentProperties (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that provides the document header for the title menu.

## Declaration

```swift
var documentProperties: UIDocumentProperties? { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Assign a non-`nil` value to this property to display a document header at the top of the title menu, which appears when a person taps the navigation item’s title. The document header displays information about the current document, such as its title, file type, and size. Additionally, you can configure a set of sharing capabilities that allow people to share or drag and drop the document content from the document header.

## See Also

### Customizing the title menu

- [titleMenuProvider](titlemenuprovider.md): A closure that generates the navigation item’s title menu.
- [UIDocumentProperties](../uidocumentproperties.md): Information that UIKit uses to generate a document header for a navigation item’s title menu.

# documentProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that provides the document header for the title menu.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIDocumentProperties * documentProperties;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Assign a non-`nil` value to this property to display a document header at the top of the title menu, which appears when a person taps the navigation item’s title. The document header displays information about the current document, such as its title, file type, and size. Additionally, you can configure a set of sharing capabilities that allow people to share or drag and drop the document content from the document header.

## See Also

### Customizing the title menu

- [titleMenuProvider](titlemenuprovider.md): A closure that generates the navigation item’s title menu.
- [UIDocumentProperties](../uidocumentproperties.md): Information that UIKit uses to generate a document header for a navigation item’s title menu.
