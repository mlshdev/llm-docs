> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller](https://developer.apple.com/documentation/appkit/nsobjectcontroller)

# NSObjectController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A controller that can manage an object’s properties referenced by key-value paths.

## Declaration

```swift
class NSObjectController
```

<a id="overview"></a>

## Overview

[NSObjectController](nsobjectcontroller.md) is a Cocoa bindings–compatible controller class. Properties of the content object of instances of this class can be bound to user interface elements to access and modify their values.

By default, the content of an [NSObjectController](nsobjectcontroller.md) instance is an [NSMutableDictionary](https://developer.apple.com/documentation/foundation/nsmutabledictionary) object. This allows a single [NSObjectController](nsobjectcontroller.md) instance to be used to manage many different properties referenced by key-value paths. The default content object class can be changed by calling [objectClass](nsobjectcontroller/objectclass.md), which subclasses must override. Your application should use a custom data class that is key-value compliant whenever possible.

<a id="Object-Controllers-Entity-Mode-and-Lazy-Fetching"></a>

### Object Controllers, Entity Mode, and Lazy Fetching

`NSObjectController` and its subclasses, when in entity mode, can now fetch lazily. With lazy fetching enabled using the property [usesLazyFetching](nsobjectcontroller/useslazyfetching.md), the controller will try to fetch only a small amount of data from available persistent stores. This can provide a significant improvement in memory use when a large amount of content is stored on disk but just a subset of that data is required in memory.

When set to use lazy fetching, a controller will fetch objects in batches. You can change the default batch size for your application by setting a value for the the user default “`com.apple.CocoaBindings.LazyFetchBatchSize`”. If you have table views bound to an array controller set to use lazy fetching, the size of the controller’s batch size will grow as the table views’ visible row count grows.

Add, Insert, and Remove operations on controllers that use lazy fetching behave similarly to the same operations on a regular controller. The difference is that it is faster to sort an array controller using lazy fetching if:

- All of the keys in the `sortDescriptors` array are modeled, non transient properties.
- All of the selectors in the `sortDescriptors` array are `compare:` or `caseInsensitiveCompare:`.
- There are no changes in the controller’s managed object context

## Topics

### Initializing an object controller

- [init(content:)](nsobjectcontroller/init%28content_%29.md): Initializes and returns an `NSObjectController` object with the given content.

### Managing content

- [content](nsobjectcontroller/content.md): The receiver’s content object.
- [automaticallyPreparesContent](nsobjectcontroller/automaticallypreparescontent.md): A Boolean that shows whether the receiver automatically creates and inserts new content objects automatically when loading from a nib file.
- [prepareContent()](nsobjectcontroller/preparecontent%28%29.md): Typically overridden by subclasses that require additional control over the creation of new objects.

### Setting the content class

- [objectClass](nsobjectcontroller/objectclass.md): The object class to use when creating new objects.

### Managing objects

- [newObject()](nsobjectcontroller/newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject(\_:)](nsobjectcontroller/addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject(\_:)](nsobjectcontroller/removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add(\_:)](nsobjectcontroller/add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](nsobjectcontroller/canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](nsobjectcontroller/add%28__%29.md).
- [remove(\_:)](nsobjectcontroller/remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](nsobjectcontroller/canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

### Managing editing

- [isEditable](nsobjectcontroller/iseditable.md): A Boolean that indicates whether the receiver allows adding and removing objects.

### Core Data support

- [entityName](nsobjectcontroller/entityname.md): The entity name used by the receiver to create new objects.
- [fetch(\_:)](nsobjectcontroller/fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](nsobjectcontroller/useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest()](nsobjectcontroller/defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](nsobjectcontroller/fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](nsobjectcontroller/managedobjectcontext.md): The receiver’s managed object context.
- [fetch(with:merge:)](nsobjectcontroller/fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

### Obtaining selections

- [selectedObjects](nsobjectcontroller/selectedobjects.md): An array of all objects to be affected by editing.
- [selection](nsobjectcontroller/selection.md): A proxy object representing the receiver’s selection.

### Validating user interface items

- [validateUserInterfaceItem(\_:)](nsobjectcontroller/validateuserinterfaceitem%28__%29.md): Returns whether the receiver can handle the action method for a user interface item.

### Initializers

- [init(coder:)](nsobjectcontroller/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSController](nscontroller.md)

### Inherited By

- [NSArrayController](nsarraycontroller.md)
- [NSTreeController](nstreecontroller.md)

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

### Core Controllers

- [NSController](nscontroller.md): An abstract class that implements the [NSEditor](nseditor.md) and [NSEditorRegistration](nseditorregistration.md) informal protocols required for controller classes.

# NSObjectController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A controller that can manage an object’s properties referenced by key-value paths.

## Declaration

```objectivec
@interface NSObjectController : NSController
```

<a id="overview"></a>

## Overview

[NSObjectController](nsobjectcontroller.md) is a Cocoa bindings–compatible controller class. Properties of the content object of instances of this class can be bound to user interface elements to access and modify their values.

By default, the content of an [NSObjectController](nsobjectcontroller.md) instance is an [NSMutableDictionary](https://developer.apple.com/documentation/foundation/nsmutabledictionary) object. This allows a single [NSObjectController](nsobjectcontroller.md) instance to be used to manage many different properties referenced by key-value paths. The default content object class can be changed by calling [objectClass](nsobjectcontroller/objectclass.md), which subclasses must override. Your application should use a custom data class that is key-value compliant whenever possible.

<a id="Object-Controllers-Entity-Mode-and-Lazy-Fetching"></a>

### Object Controllers, Entity Mode, and Lazy Fetching

`NSObjectController` and its subclasses, when in entity mode, can now fetch lazily. With lazy fetching enabled using the property [usesLazyFetching](nsobjectcontroller/useslazyfetching.md), the controller will try to fetch only a small amount of data from available persistent stores. This can provide a significant improvement in memory use when a large amount of content is stored on disk but just a subset of that data is required in memory.

When set to use lazy fetching, a controller will fetch objects in batches. You can change the default batch size for your application by setting a value for the the user default “`com.apple.CocoaBindings.LazyFetchBatchSize`”. If you have table views bound to an array controller set to use lazy fetching, the size of the controller’s batch size will grow as the table views’ visible row count grows.

Add, Insert, and Remove operations on controllers that use lazy fetching behave similarly to the same operations on a regular controller. The difference is that it is faster to sort an array controller using lazy fetching if:

- All of the keys in the `sortDescriptors` array are modeled, non transient properties.
- All of the selectors in the `sortDescriptors` array are `compare:` or `caseInsensitiveCompare:`.
- There are no changes in the controller’s managed object context

## Topics

### Initializing an object controller

- [initWithContent:](nsobjectcontroller/init%28content_%29.md): Initializes and returns an `NSObjectController` object with the given content.

### Managing content

- [content](nsobjectcontroller/content.md): The receiver’s content object.
- [automaticallyPreparesContent](nsobjectcontroller/automaticallypreparescontent.md): A Boolean that shows whether the receiver automatically creates and inserts new content objects automatically when loading from a nib file.
- [prepareContent](nsobjectcontroller/preparecontent%28%29.md): Typically overridden by subclasses that require additional control over the creation of new objects.

### Setting the content class

- [objectClass](nsobjectcontroller/objectclass.md): The object class to use when creating new objects.

### Managing objects

- [newObject](nsobjectcontroller/newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject:](nsobjectcontroller/addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject:](nsobjectcontroller/removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add:](nsobjectcontroller/add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](nsobjectcontroller/canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](nsobjectcontroller/add%28__%29.md).
- [remove:](nsobjectcontroller/remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](nsobjectcontroller/canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

### Managing editing

- [editable](nsobjectcontroller/iseditable.md): A Boolean that indicates whether the receiver allows adding and removing objects.

### Core Data support

- [entityName](nsobjectcontroller/entityname.md): The entity name used by the receiver to create new objects.
- [fetch:](nsobjectcontroller/fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](nsobjectcontroller/useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest](nsobjectcontroller/defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](nsobjectcontroller/fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](nsobjectcontroller/managedobjectcontext.md): The receiver’s managed object context.
- [fetchWithRequest:merge:error:](nsobjectcontroller/fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

### Obtaining selections

- [selectedObjects](nsobjectcontroller/selectedobjects.md): An array of all objects to be affected by editing.
- [selection](nsobjectcontroller/selection.md): A proxy object representing the receiver’s selection.

### Validating user interface items

- [validateUserInterfaceItem:](nsobjectcontroller/validateuserinterfaceitem%28__%29.md): Returns whether the receiver can handle the action method for a user interface item.

### Initializers

- [initWithCoder:](nsobjectcontroller/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSController](nscontroller.md)

### Inherited By

- [NSArrayController](nsarraycontroller.md)
- [NSTreeController](nstreecontroller.md)

## See Also

### Core Controllers

- [NSController](nscontroller.md): An abstract class that implements the [NSEditor](nseditor.md) and [NSEditorRegistration](nseditorregistration.md) informal protocols required for controller classes.
