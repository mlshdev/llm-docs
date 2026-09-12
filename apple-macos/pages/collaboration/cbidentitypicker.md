> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentitypicker](https://developer.apple.com/documentation/collaboration/cbidentitypicker)

# CBIdentityPicker (Swift)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

A `CBIdentityPicker` object allows a user to select identities—for example, user or group objects—that it wants one or more services or shared resources to have access to. An identity picker can be displayed either as an application-modal dialog or as a sheet attached to a document window. An identity picker returns the selected records to be added to access control lists using Collaboration. If a selected record is not a user or group identity, then an identity picker prompts the user for additional information—such as a password—to promote that record to a sharing account.

## Declaration

```swift
class CBIdentityPicker
```

## Topics

### Running an Identity Picker

- [runModal(for:modalDelegate:didEnd:contextInfo:)](cbidentitypicker/runmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the receiver modally as a sheet attached to a specified window.
- [runModal(for:completionHandler:)](cbidentitypicker/runmodal%28for_completionhandler_%29.md): Runs the identity picker modally as a sheet attached to a specified window.
- [runModal()](cbidentitypicker/runmodal%28%29.md): Runs the receiver as an application-modal dialog.

### Retrieving Identities

- [identities](cbidentitypicker/identities.md): The array of identities (represented by `CBIdentity` objects) selected using the identity picker.

### Setting and Getting Properties

- [title](cbidentitypicker/title.md): The title of the identity picker.
- [allowsMultipleSelection](cbidentitypicker/allowsmultipleselection.md): A Boolean value indicating whether the user is allowed to select multiple identities.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# CBIdentityPicker (Objective-C)

**Framework:** Collaboration  
**Kind:** Class  
**Availability:** macOS 10.5+

A `CBIdentityPicker` object allows a user to select identities—for example, user or group objects—that it wants one or more services or shared resources to have access to. An identity picker can be displayed either as an application-modal dialog or as a sheet attached to a document window. An identity picker returns the selected records to be added to access control lists using Collaboration. If a selected record is not a user or group identity, then an identity picker prompts the user for additional information—such as a password—to promote that record to a sharing account.

## Declaration

```objectivec
@interface CBIdentityPicker : NSObject
```

## Topics

### Running an Identity Picker

- [runModalForWindow:modalDelegate:didEndSelector:contextInfo:](cbidentitypicker/runmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the receiver modally as a sheet attached to a specified window.
- [runModalForWindow:completionHandler:](cbidentitypicker/runmodal%28for_completionhandler_%29.md): Runs the identity picker modally as a sheet attached to a specified window.
- [runModal](cbidentitypicker/runmodal%28%29.md): Runs the receiver as an application-modal dialog.

### Retrieving Identities

- [identities](cbidentitypicker/identities.md): The array of identities (represented by `CBIdentity` objects) selected using the identity picker.

### Setting and Getting Properties

- [title](cbidentitypicker/title.md): The title of the identity picker.
- [allowsMultipleSelection](cbidentitypicker/allowsmultipleselection.md): A Boolean value indicating whether the user is allowed to select multiple identities.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
