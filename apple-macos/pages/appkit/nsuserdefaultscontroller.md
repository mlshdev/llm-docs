> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller)

# NSUserDefaultsController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A controller that accesses user preference information for your app from the user’s defaults database.

## Declaration

```swift
class NSUserDefaultsController
```

<a id="overview"></a>

## Overview

[NSUserDefaultsController](nsuserdefaultscontroller.md) is a Cocoa bindings–compatible controller class. Properties of the shared instance of this class can be bound to user interface elements to access and modify values stored in [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults).

## Topics

### Obtaining the shared instance

- [shared](nsuserdefaultscontroller/shared.md): Returns the shared instance of NSUserDefaultsController, creating it if necessary.

### Initializing a user defaults controller

- [init(defaults:initialValues:)](nsuserdefaultscontroller/init%28defaults_initialvalues_%29.md): Returns an initialized NSUserDefaultsController object using the NSUserDefaults instance specified in `defaults` and the initial default values contained in the `initialValues` dictionary.
- [init(coder:)](nsuserdefaultscontroller/init%28coder_%29.md)

### Managing user defaults values

- [defaults](nsuserdefaultscontroller/defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](nsuserdefaultscontroller/initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](nsuserdefaultscontroller/hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](nsuserdefaultscontroller/appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](nsuserdefaultscontroller/values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert(\_:)](nsuserdefaultscontroller/revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues(\_:)](nsuserdefaultscontroller/reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](nsuserdefaultscontroller/initialvalues.md) dictionary.
- [save(\_:)](nsuserdefaultscontroller/save%28__%29.md): Saves the values of the receiver’s user default properties.

## Relationships

### Inherits From

- [NSController](nscontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSEditorRegistration](nseditorregistration.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User Preferences

- [NSUbiquitousKeyValueStore](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore): An iCloud-based container of key-value pairs you share among instances of your app running on a person’s devices.

# NSUserDefaultsController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A controller that accesses user preference information for your app from the user’s defaults database.

## Declaration

```objectivec
@interface NSUserDefaultsController : NSController
```

<a id="overview"></a>

## Overview

[NSUserDefaultsController](nsuserdefaultscontroller.md) is a Cocoa bindings–compatible controller class. Properties of the shared instance of this class can be bound to user interface elements to access and modify values stored in [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults).

## Topics

### Obtaining the shared instance

- [sharedUserDefaultsController](nsuserdefaultscontroller/shared.md): Returns the shared instance of NSUserDefaultsController, creating it if necessary.

### Initializing a user defaults controller

- [initWithDefaults:initialValues:](nsuserdefaultscontroller/init%28defaults_initialvalues_%29.md): Returns an initialized NSUserDefaultsController object using the NSUserDefaults instance specified in `defaults` and the initial default values contained in the `initialValues` dictionary.
- [initWithCoder:](nsuserdefaultscontroller/init%28coder_%29.md)

### Managing user defaults values

- [defaults](nsuserdefaultscontroller/defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](nsuserdefaultscontroller/initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](nsuserdefaultscontroller/hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](nsuserdefaultscontroller/appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](nsuserdefaultscontroller/values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert:](nsuserdefaultscontroller/revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues:](nsuserdefaultscontroller/reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](nsuserdefaultscontroller/initialvalues.md) dictionary.
- [save:](nsuserdefaultscontroller/save%28__%29.md): Saves the values of the receiver’s user default properties.

## Relationships

### Inherits From

- [NSController](nscontroller.md)

## See Also

### User Preferences

- [NSUbiquitousKeyValueStore](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore): An iCloud-based container of key-value pairs you share among instances of your app running on a person’s devices.
