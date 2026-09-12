> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument](https://developer.apple.com/documentation/uikit/uimanageddocument)

# UIManagedDocument (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A managed document object that integrates with Core Data.

## Declaration

```swift
@MainActor class UIManagedDocument
```

<a id="overview"></a>

## Overview

[UIManagedDocument](uimanageddocument.md) is a concrete subclass of [UIDocument](uidocument.md). When you initialize a managed document, you specify the URL for the document location. The document object then creates a Core Data stack to use to access the document’s persistent store using a managed object model from the app’s main bundle. [UIManagedDocument](uimanageddocument.md) performs all the basic setup you need for Core Data, and in some cases you may use instances of the class directly (without a need to subclass). You can supply configuration options for the creation of the coordinator using [persistentStoreOptions](uimanageddocument/persistentstoreoptions.md), and for the model using [modelConfiguration](uimanageddocument/modelconfiguration.md). You can also perform additional customization by creating a subclass of [UIManagedDocument](uimanageddocument.md):

- Override [persistentStoreName](uimanageddocument/persistentstorename.md) to customize the name of the persistent store file inside the document’s file package.
- Override [managedObjectModel](uimanageddocument/managedobjectmodel.md) to customize creation of the managed object model.

You do this if, for example, your app supports multiple document types, each of which uses a different model. You want to ensure that the models aren’t merged for each document class.

- Override [persistentStoreType(forFileType:)](uimanageddocument/persistentstoretype%28forfiletype_%29.md) to customize the type of persistent store used by a document.
- Override [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](uimanageddocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) to customize the loading or creation of a persistent store.

<a id="Handling-errors"></a>

### Handling errors

To enable your app to observe and handle errors in saving and validating a managed document, you must subclass the [UIManagedDocument](uimanageddocument.md) class and override one or both of the following two inherited methods from the [UIDocument](uidocument.md) class:

- [handleError(\_:userInteractionPermitted:)](uidocument/handleerror%28__userinteractionpermitted_%29.md)
- [finishedHandlingError(\_:recovered:)](uidocument/finishedhandlingerror%28__recovered_%29.md)

Overriding is required because otherwise, the only information your app receives on error is the [stateChangedNotification](uidocument/statechangednotification.md) notification, which doesn’t contain a `userInfo` dictionary and so doesn’t convey specific error information.

## Topics

### Managing the Core Data stack

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](uimanageddocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](uimanageddocument/managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](uimanageddocument/managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](uimanageddocument/persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](uimanageddocument/modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreType(forFileType:)](uimanageddocument/persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

### Customizing read and write operations

- [readAdditionalContent(from:)](uimanageddocument/readadditionalcontent%28from_%29.md): Handles reading non-Core Data content in the additional content directory in the document’s file package.
- [additionalContent(for:)](uimanageddocument/additionalcontent%28for_%29.md): Handles writing non-Core Data content to the additional content directory in the document’s file package.
- [writeAdditionalContent(\_:to:originalContentsURL:)](uimanageddocument/writeadditionalcontent%28__to_originalcontentsurl_%29.md): Handles writing non-Core Data content to the document’s file package.

### Naming the persistent store file

- [persistentStoreName](uimanageddocument/persistentstorename.md): Returns the name for the persistent store file inside the document’s file package.

## Relationships

### Inherits From

- [UIDocument](uidocument.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFilePresenter](../foundation/nsfilepresenter.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](../foundation/progressreporting.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Documents

- [UIDocument](uidocument.md): An abstract base class for managing discrete portions of your app’s data.
- [Synchronizing documents in the iCloud environment](synchronizing-documents-in-the-icloud-environment.md): Manage documents across multiple devices to create a seamless editing and collaboration experience.

# UIManagedDocument (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A managed document object that integrates with Core Data.

## Declaration

```objectivec
@interface UIManagedDocument : UIDocument
```

<a id="overview"></a>

## Overview

[UIManagedDocument](uimanageddocument.md) is a concrete subclass of [UIDocument](uidocument.md). When you initialize a managed document, you specify the URL for the document location. The document object then creates a Core Data stack to use to access the document’s persistent store using a managed object model from the app’s main bundle. [UIManagedDocument](uimanageddocument.md) performs all the basic setup you need for Core Data, and in some cases you may use instances of the class directly (without a need to subclass). You can supply configuration options for the creation of the coordinator using [persistentStoreOptions](uimanageddocument/persistentstoreoptions.md), and for the model using [modelConfiguration](uimanageddocument/modelconfiguration.md). You can also perform additional customization by creating a subclass of [UIManagedDocument](uimanageddocument.md):

- Override [persistentStoreName](uimanageddocument/persistentstorename.md) to customize the name of the persistent store file inside the document’s file package.
- Override [managedObjectModel](uimanageddocument/managedobjectmodel.md) to customize creation of the managed object model.

You do this if, for example, your app supports multiple document types, each of which uses a different model. You want to ensure that the models aren’t merged for each document class.

- Override [persistentStoreTypeForFileType:](uimanageddocument/persistentstoretype%28forfiletype_%29.md) to customize the type of persistent store used by a document.
- Override [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](uimanageddocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) to customize the loading or creation of a persistent store.

<a id="Handling-errors"></a>

### Handling errors

To enable your app to observe and handle errors in saving and validating a managed document, you must subclass the [UIManagedDocument](uimanageddocument.md) class and override one or both of the following two inherited methods from the [UIDocument](uidocument.md) class:

- [handleError:userInteractionPermitted:](uidocument/handleerror%28__userinteractionpermitted_%29.md)
- [finishedHandlingError:recovered:](uidocument/finishedhandlingerror%28__recovered_%29.md)

Overriding is required because otherwise, the only information your app receives on error is the [UIDocumentStateChangedNotification](uidocument/statechangednotification.md) notification, which doesn’t contain a `userInfo` dictionary and so doesn’t convey specific error information.

## Topics

### Managing the Core Data stack

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](uimanageddocument/configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](uimanageddocument/managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](uimanageddocument/managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](uimanageddocument/persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](uimanageddocument/modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreTypeForFileType:](uimanageddocument/persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

### Customizing read and write operations

- [readAdditionalContentFromURL:error:](uimanageddocument/readadditionalcontent%28from_%29.md): Handles reading non-Core Data content in the additional content directory in the document’s file package.
- [additionalContentForURL:error:](uimanageddocument/additionalcontent%28for_%29.md): Handles writing non-Core Data content to the additional content directory in the document’s file package.
- [writeAdditionalContent:toURL:originalContentsURL:error:](uimanageddocument/writeadditionalcontent%28__to_originalcontentsurl_%29.md): Handles writing non-Core Data content to the document’s file package.

### Naming the persistent store file

- [persistentStoreName](uimanageddocument/persistentstorename.md): Returns the name for the persistent store file inside the document’s file package.

## Relationships

### Inherits From

- [UIDocument](uidocument.md)

## See Also

### Documents

- [UIDocument](uidocument.md): An abstract base class for managing discrete portions of your app’s data.
- [Synchronizing documents in the iCloud environment](synchronizing-documents-in-the-icloud-environment.md): Manage documents across multiple devices to create a seamless editing and collaboration experience.
