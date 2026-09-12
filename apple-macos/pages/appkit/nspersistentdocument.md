> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument](https://developer.apple.com/documentation/appkit/nspersistentdocument)

# NSPersistentDocument (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A document object that can integrate with Core Data.

## Declaration

```swift
class NSPersistentDocument
```

<a id="overview"></a>

## Overview

The [NSPersistentDocument](nspersistentdocument.md) class is a subclass of [NSDocument](nsdocument.md) that is designed to easily integrate into the Core Data framework. It provides methods to access a document-wide [NSManagedObjectContext](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext) object, and provides default implementations of methods to read and write files using the persistence framework. In a persistent document, the undo manager functionality is taken over by managed object context.

Standard document behavior is implemented as follows:

- Opening a document invokes [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](nspersistentdocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) with the new URL, and adds a store of the default type (XML). Objects are loaded from the persistent store on demand through the document’s context.
- Saving a new document adds a store of the default type with the chosen URL and invokes save: on the context. For an existing document, a save just invokes [save()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/save%28%29) on the context.
- Save As for a new document simply invokes save. For an opened document, it migrates the persistent store to the new URL and invokes [save()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/save%28%29) on the context.
- Revert resets the document’s managed object context. Objects are subsequently loaded from the persistent store on demand, as with opening a new document.

By default an [NSPersistentDocument](nspersistentdocument.md) instance creates its own ready-to-use persistence stack including managed object context, persistent object store coordinator and persistent store. There is a one-to-one mapping between the document and the backing object store.

You can customize the architecture of the persistence stack by overriding the [managedObjectModel](nspersistentdocument/managedobjectmodel.md) property and [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](nspersistentdocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) method. You might wish to do this, for example, to specify a particular managed object model.

> **Important**

>  [NSPersistentDocument](nspersistentdocument.md) does not support some document behaviors:
>
> - File wrappers.
> - [NSDocument.SaveOperationType.saveToOperation](nsdocument/saveoperationtype/savetooperation.md) operation type.
>
> Core Data does not support saving changes to a new document while maintaining the unsaved state in the current document.
>
> - Asynchronous saving.
>
> [NSPersistentDocument](nspersistentdocument.md) does not support the asynchronous saving API of [NSDocument](nsdocument.md) because that API requires accessing the document’s state on multiple threads and that violates the requirements of the [NSManagedObjectContext](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext) class. Do not override [canAsynchronouslyWrite(to:ofType:for:)](nsdocument/canasynchronouslywrite%28to_oftype_for_%29.md).

<a id="Undo-Support"></a>

### Undo Support

The persistent document uses the managed object context’s undo manager.

> **Important**

> Do not override the following properties, their getters, or their setters:
>
> - [hasUndoManager](nsdocument/hasundomanager.md)
> - [undoManager](nsdocument/undomanager.md)

The [isDocumentEdited](nsdocument/isdocumentedited.md) method returns [true](https://developer.apple.com/documentation/swift/true) if the persistent document’s managed object context, or editors registered with the context, have uncommitted changes, otherwise it returns [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Managing the Persistence Objects

- [managedObjectContext](nspersistentdocument/managedobjectcontext.md): The managed object context for the document.
- [managedObjectModel](nspersistentdocument/managedobjectmodel.md): The managed object model of the document.
- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](nspersistentdocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreType(forFileType:)](nspersistentdocument/persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

### Document Content Management

- [read(from:ofType:)](nspersistentdocument/read%28from_oftype_%29.md): Sets the contents of the receiver by reading from a file of a given type located by a given URL.
- [revert(toContentsOf:ofType:)](nspersistentdocument/revert%28tocontentsof_oftype_%29.md): Overridden to clean up the managed object context and controllers during a revert.
- [write(to:ofType:for:originalContentsURL:)](nspersistentdocument/write%28to_oftype_for_originalcontentsurl_%29.md): Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.

## Relationships

### Inherits From

- [NSDocument](nsdocument.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSEditorRegistration](nseditorregistration.md)
- [NSFilePresenter](https://developer.apple.com/documentation/foundation/nsfilepresenter)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Documents

- [Developing a Document-Based App](developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
- [NSDocument](nsdocument.md): An abstract class that defines the interface for macOS documents.
- [NSDocumentController](nsdocumentcontroller.md): An object that manages an app’s documents.

# NSPersistentDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A document object that can integrate with Core Data.

## Declaration

```objectivec
@interface NSPersistentDocument : NSDocument
```

<a id="overview"></a>

## Overview

The [NSPersistentDocument](nspersistentdocument.md) class is a subclass of [NSDocument](nsdocument.md) that is designed to easily integrate into the Core Data framework. It provides methods to access a document-wide [NSManagedObjectContext](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext) object, and provides default implementations of methods to read and write files using the persistence framework. In a persistent document, the undo manager functionality is taken over by managed object context.

Standard document behavior is implemented as follows:

- Opening a document invokes [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](nspersistentdocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) with the new URL, and adds a store of the default type (XML). Objects are loaded from the persistent store on demand through the document’s context.
- Saving a new document adds a store of the default type with the chosen URL and invokes save: on the context. For an existing document, a save just invokes [save:](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/save%28%29) on the context.
- Save As for a new document simply invokes save. For an opened document, it migrates the persistent store to the new URL and invokes [save:](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/save%28%29) on the context.
- Revert resets the document’s managed object context. Objects are subsequently loaded from the persistent store on demand, as with opening a new document.

By default an [NSPersistentDocument](nspersistentdocument.md) instance creates its own ready-to-use persistence stack including managed object context, persistent object store coordinator and persistent store. There is a one-to-one mapping between the document and the backing object store.

You can customize the architecture of the persistence stack by overriding the [managedObjectModel](nspersistentdocument/managedobjectmodel.md) property and [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](nspersistentdocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) method. You might wish to do this, for example, to specify a particular managed object model.

> **Important**

>  [NSPersistentDocument](nspersistentdocument.md) does not support some document behaviors:
>
> - File wrappers.
> - [NSSaveToOperation](nsdocument/saveoperationtype/savetooperation.md) operation type.
>
> Core Data does not support saving changes to a new document while maintaining the unsaved state in the current document.
>
> - Asynchronous saving.
>
> [NSPersistentDocument](nspersistentdocument.md) does not support the asynchronous saving API of [NSDocument](nsdocument.md) because that API requires accessing the document’s state on multiple threads and that violates the requirements of the [NSManagedObjectContext](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext) class. Do not override [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](nsdocument/canasynchronouslywrite%28to_oftype_for_%29.md).

<a id="Undo-Support"></a>

### Undo Support

The persistent document uses the managed object context’s undo manager.

> **Important**

> Do not override the following properties, their getters, or their setters:
>
> - [hasUndoManager](nsdocument/hasundomanager.md)
> - [undoManager](nsdocument/undomanager.md)

The [documentEdited](nsdocument/isdocumentedited.md) method returns [true](https://developer.apple.com/documentation/swift/true) if the persistent document’s managed object context, or editors registered with the context, have uncommitted changes, otherwise it returns [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Managing the Persistence Objects

- [managedObjectContext](nspersistentdocument/managedobjectcontext.md): The managed object context for the document.
- [managedObjectModel](nspersistentdocument/managedobjectmodel.md): The managed object model of the document.
- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](nspersistentdocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreTypeForFileType:](nspersistentdocument/persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

### Document Content Management

- [readFromURL:ofType:error:](nspersistentdocument/read%28from_oftype_%29.md): Sets the contents of the receiver by reading from a file of a given type located by a given URL.
- [revertToContentsOfURL:ofType:error:](nspersistentdocument/revert%28tocontentsof_oftype_%29.md): Overridden to clean up the managed object context and controllers during a revert.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](nspersistentdocument/write%28to_oftype_for_originalcontentsurl_%29.md): Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.

### Deprecated

- [configurePersistentStoreCoordinatorForURL:ofType:error:](nspersistentdocument/configurepersistentstorecoordinatorforurl_oftype_error_.md): Deprecated. Configures the receiver’s persistent store coordinator for a given URL and document type.

## Relationships

### Inherits From

- [NSDocument](nsdocument.md)

## See Also

### Documents

- [Developing a Document-Based App](developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
- [NSDocument](nsdocument.md): An abstract class that defines the interface for macOS documents.
- [NSDocumentController](nsdocumentcontroller.md): An object that manages an app’s documents.
