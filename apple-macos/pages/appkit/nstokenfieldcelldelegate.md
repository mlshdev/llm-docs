> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate)

# NSTokenFieldCellDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSTokenFieldCell](nstokenfieldcell.md) objects to work with tokenized strings.

## Declaration

```swift
protocol NSTokenFieldCellDelegate : NSObjectProtocol
```

## Topics

### Displaying Tokenized Strings

- [tokenFieldCell(\_:displayStringForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the represented object.
- [tokenFieldCell(\_:styleForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.

### Editing a Tokenized Strings

- [tokenFieldCell(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](nstokenfieldcelldelegate/tokenfieldcell%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenFieldCell(\_:editingStringForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for the represented object.
- [tokenFieldCell(\_:representedObjectForEditing:)](nstokenfieldcelldelegate/tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
- [tokenFieldCell(\_:shouldAdd:at:)](nstokenfieldcelldelegate/tokenfieldcell%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a given index.

### Reading To and Writing From the Pasteboard

- [tokenFieldCell(\_:readFrom:)](nstokenfieldcelldelegate/tokenfieldcell%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from `pboard`.
- [tokenFieldCell(\_:writeRepresentedObjects:to:)](nstokenfieldcelldelegate/tokenfieldcell%28__writerepresentedobjects_to_%29.md): Allows the delegate the opportunity to write custom pasteboard types to the pasteboard for the represented objects in `objects`.

### Managing Menus for Represented Objects

- [tokenFieldCell(\_:hasMenuForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the represented object provides a menu.
- [tokenFieldCell(\_:menuForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cell

- [NSTokenFieldCell](nstokenfieldcell.md): A text field cell subclass that enables tokenized editing of an array of objects.

# NSTokenFieldCellDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSTokenFieldCell](nstokenfieldcell.md) objects to work with tokenized strings.

## Declaration

```objectivec
@protocol NSTokenFieldCellDelegate <NSObject>
```

## Topics

### Displaying Tokenized Strings

- [tokenFieldCell:displayStringForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the represented object.
- [tokenFieldCell:styleForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.

### Editing a Tokenized Strings

- [tokenFieldCell:completionsForSubstring:indexOfToken:indexOfSelectedItem:](nstokenfieldcelldelegate/tokenfieldcell%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenFieldCell:editingStringForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for the represented object.
- [tokenFieldCell:representedObjectForEditingString:](nstokenfieldcelldelegate/tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
- [tokenFieldCell:shouldAddObjects:atIndex:](nstokenfieldcelldelegate/tokenfieldcell%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a given index.

### Reading To and Writing From the Pasteboard

- [tokenFieldCell:readFromPasteboard:](nstokenfieldcelldelegate/tokenfieldcell%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from `pboard`.
- [tokenFieldCell:writeRepresentedObjects:toPasteboard:](nstokenfieldcelldelegate/tokenfieldcell%28__writerepresentedobjects_to_%29.md): Allows the delegate the opportunity to write custom pasteboard types to the pasteboard for the represented objects in `objects`.

### Managing Menus for Represented Objects

- [tokenFieldCell:hasMenuForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the represented object provides a menu.
- [tokenFieldCell:menuForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cell

- [NSTokenFieldCell](nstokenfieldcell.md): A text field cell subclass that enables tokenized editing of an array of objects.
