> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate](https://developer.apple.com/documentation/appkit/nstokenfielddelegate)

# NSTokenFieldDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSTokenField](nstokenfield.md) objects.

## Declaration

```swift
protocol NSTokenFieldDelegate : NSTextFieldDelegate
```

## Topics

### Displaying Tokenized Strings

- [tokenField(\_:displayStringForRepresentedObject:)](nstokenfielddelegate/tokenfield%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the given represented object.
- [tokenField(\_:styleForRepresentedObject:)](nstokenfielddelegate/tokenfield%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.

### Editing a Tokenized Strings

- [tokenField(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](nstokenfielddelegate/tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField(\_:editingStringForRepresentedObject:)](nstokenfielddelegate/tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField(\_:representedObjectForEditing:)](nstokenfielddelegate/tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
- [tokenField(\_:shouldAdd:at:)](nstokenfielddelegate/tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.

### Reading To and Writing From the Pasteboard

- [tokenField(\_:readFrom:)](nstokenfielddelegate/tokenfield%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from the specified pasteboard.
- [tokenField(\_:writeRepresentedObjects:to:)](nstokenfielddelegate/tokenfield%28__writerepresentedobjects_to_%29.md): Sent so the delegate can write represented objects to the pasteboard corresponding to a given array of display strings.

### Managing Menus for Represented Objects

- [tokenField(\_:hasMenuForRepresentedObject:)](nstokenfielddelegate/tokenfield%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the given represented object provides a menu.
- [tokenField(\_:menuForRepresentedObject:)](nstokenfielddelegate/tokenfield%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTextFieldDelegate](nstextfielddelegate.md)

# NSTokenFieldDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSTokenField](nstokenfield.md) objects.

## Declaration

```objectivec
@protocol NSTokenFieldDelegate <NSTextFieldDelegate>
```

## Topics

### Displaying Tokenized Strings

- [tokenField:displayStringForRepresentedObject:](nstokenfielddelegate/tokenfield%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the given represented object.
- [tokenField:styleForRepresentedObject:](nstokenfielddelegate/tokenfield%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.

### Editing a Tokenized Strings

- [tokenField:completionsForSubstring:indexOfToken:indexOfSelectedItem:](nstokenfielddelegate/tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField:editingStringForRepresentedObject:](nstokenfielddelegate/tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField:representedObjectForEditingString:](nstokenfielddelegate/tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
- [tokenField:shouldAddObjects:atIndex:](nstokenfielddelegate/tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.

### Reading To and Writing From the Pasteboard

- [tokenField:readFromPasteboard:](nstokenfielddelegate/tokenfield%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from the specified pasteboard.
- [tokenField:writeRepresentedObjects:toPasteboard:](nstokenfielddelegate/tokenfield%28__writerepresentedobjects_to_%29.md): Sent so the delegate can write represented objects to the pasteboard corresponding to a given array of display strings.

### Managing Menus for Represented Objects

- [tokenField:hasMenuForRepresentedObject:](nstokenfielddelegate/tokenfield%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the given represented object provides a menu.
- [tokenField:menuForRepresentedObject:](nstokenfielddelegate/tokenfield%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.

## Relationships

### Inherits From

- [NSTextFieldDelegate](nstextfielddelegate.md)
