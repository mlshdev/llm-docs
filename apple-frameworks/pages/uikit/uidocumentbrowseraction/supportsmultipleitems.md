> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction/supportsmultipleitems](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction/supportsmultipleitems)

# supportsMultipleItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the action can be triggered on more than one document at a time.

## Declaration

```swift
var supportsMultipleItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Creating and configuring actions

- [init(identifier:localizedTitle:availability:handler:)](init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [image](image.md): The action’s image displayed in the navigation bar.
- [supportedContentTypes](supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.

# supportsMultipleItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the action can be triggered on more than one document at a time.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL supportsMultipleItems;
```

<a id="Discussion"></a>

## Discussion

This property defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Creating and configuring actions

- [initWithIdentifier:localizedTitle:availability:handler:](init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [image](image.md): The action’s image displayed in the navigation bar.
- [supportedContentTypes](supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
