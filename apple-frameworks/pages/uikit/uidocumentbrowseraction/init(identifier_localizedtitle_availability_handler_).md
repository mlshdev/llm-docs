> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction/init(identifier:localizedtitle:availability:handler:)](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction/init(identifier:localizedtitle:availability:handler:))

# init(identifier:localizedTitle:availability:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Instantiates and returns a new browser action item.

## Declaration

```swift
init(identifier: String, localizedTitle: String, availability: UIDocumentBrowserAction.Availability, handler: @escaping ([URL]) -> Void)
```

## Parameters

- `identifier`: A unique identifier for the activity.
- `localizedTitle`: The title that appears in the Edit Menu or navigation bar. This title should be a [String](https://developer.apple.com/documentation/swift/string) returned by  [NSLocalizedString](../../foundation/nslocalizedstring.md).
- `availability`: A value that defines where the action can appear (in the menu, navigation bar, or both).

  For a list of valid values, see [UIDocumentBrowserAction.Availability](availability-swift.struct.md).
- `handler`: A block that is called when the user triggers the action. The block takes the following parameter:

  - **urls**: An array of URLs for the documents that the user has selected. If the action’s [supportsMultipleItems](supportsmultipleitems.md)  property is [false](https://developer.apple.com/documentation/swift/false), this array contains one URL. Otherwise, it can contain one or more URLs.

## See Also

### Creating and configuring actions

- [image](image.md): The action’s image displayed in the navigation bar.
- [supportedContentTypes](supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
- [supportsMultipleItems](supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.

# initWithIdentifier:localizedTitle:availability:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Instantiates and returns a new browser action item.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier localizedTitle:(NSString *) localizedTitle availability:(UIDocumentBrowserActionAvailability) availability handler:(void (^)(NSArray<NSURL *> *)) handler;
```

## Parameters

- `identifier`: A unique identifier for the activity.
- `localizedTitle`: The title that appears in the Edit Menu or navigation bar. This title should be a [String](https://developer.apple.com/documentation/swift/string) returned by  [NSLocalizedString](../../foundation/nslocalizedstring.md).
- `availability`: A value that defines where the action can appear (in the menu, navigation bar, or both).

  For a list of valid values, see [UIDocumentBrowserActionAvailability](availability-swift.struct.md).
- `handler`: A block that is called when the user triggers the action. The block takes the following parameter:

  - **urls**: An array of URLs for the documents that the user has selected. If the action’s [supportsMultipleItems](supportsmultipleitems.md)  property is [false](https://developer.apple.com/documentation/swift/false), this array contains one URL. Otherwise, it can contain one or more URLs.

## See Also

### Creating and configuring actions

- [image](image.md): The action’s image displayed in the navigation bar.
- [supportedContentTypes](supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
- [supportsMultipleItems](supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.
