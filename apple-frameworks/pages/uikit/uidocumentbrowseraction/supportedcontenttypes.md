> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction/supportedcontenttypes](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction/supportedcontenttypes)

# supportedContentTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of uniform type identifiers that define the types of documents that the action supports.

## Declaration

```swift
var supportedContentTypes: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

The action can be triggered only on documents that are allowed by both the action’s [supportedContentTypes](supportedcontenttypes.md) property and the document browser’s [allowedContentTypes](../uidocumentbrowserviewcontroller/allowedcontenttypes.md) property.

By default, this property contains only the `public.item` uniform type identifier (UTI)—indicating that there are no additional restrictions on document types.

To further restrict the supported documents, assign an array that contains a more restricted set of UTIs. These UTIs should define a subset of the UTIs supported by the document browser.

For more about UTIs, see [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257).

## See Also

### Creating and configuring actions

- [init(identifier:localizedTitle:availability:handler:)](init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [image](image.md): The action’s image displayed in the navigation bar.
- [supportsMultipleItems](supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.

# supportedContentTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of uniform type identifiers that define the types of documents that the action supports.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * supportedContentTypes;
```

<a id="Discussion"></a>

## Discussion

The action can be triggered only on documents that are allowed by both the action’s [supportedContentTypes](supportedcontenttypes.md) property and the document browser’s [allowedContentTypes](../uidocumentbrowserviewcontroller/allowedcontenttypes.md) property.

By default, this property contains only the `public.item` uniform type identifier (UTI)—indicating that there are no additional restrictions on document types.

To further restrict the supported documents, assign an array that contains a more restricted set of UTIs. These UTIs should define a subset of the UTIs supported by the document browser.

For more about UTIs, see [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257).

## See Also

### Creating and configuring actions

- [initWithIdentifier:localizedTitle:availability:handler:](init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [image](image.md): The action’s image displayed in the navigation bar.
- [supportsMultipleItems](supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.
