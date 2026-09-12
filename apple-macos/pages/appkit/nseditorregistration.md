> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nseditorregistration](https://developer.apple.com/documentation/appkit/nseditorregistration)

# NSEditorRegistration (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.

## Declaration

```swift
protocol NSEditorRegistration : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An implementor is responsible for tracking which editors have uncommitted changes, and sending those editors [commitEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitediting) and [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting) messages, as appropriate, to force the editor to submit, or discard, their values.

[NSController](nscontroller.md) provides an implementation of this informal protocol. You would implement this protocol if you wanted to provide your own controller class without subclassing [NSController](nscontroller.md).

## Topics

### Instance Methods

- [objectDidBeginEditing(\_:)](nseditorregistration/objectdidbeginediting%28__%29.md)
- [objectDidEndEditing(\_:)](nseditorregistration/objectdidendediting%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSArrayController](nsarraycontroller.md)
- [NSController](nscontroller.md)
- [NSDictionaryController](nsdictionarycontroller.md)
- [NSDocument](nsdocument.md)
- [NSObjectController](nsobjectcontroller.md)
- [NSPersistentDocument](nspersistentdocument.md)
- [NSTreeController](nstreecontroller.md)
- [NSUserDefaultsController](nsuserdefaultscontroller.md)

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.

# NSEditorRegistration (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.

## Declaration

```objectivec
@protocol NSEditorRegistration <NSObject>
```

<a id="overview"></a>

## Overview

An implementor is responsible for tracking which editors have uncommitted changes, and sending those editors [commitEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitediting) and [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting) messages, as appropriate, to force the editor to submit, or discard, their values.

[NSController](nscontroller.md) provides an implementation of this informal protocol. You would implement this protocol if you wanted to provide your own controller class without subclassing [NSController](nscontroller.md).

## Topics

### Instance Methods

- [objectDidBeginEditing:](nseditorregistration/objectdidbeginediting%28__%29.md)
- [objectDidEndEditing:](nseditorregistration/objectdidendediting%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSController](nscontroller.md)
- [NSDocument](nsdocument.md)

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditor](nseditor-deprecated-symbols.md): A set of methods that controllers and UI elements can implement to manage editing.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.
