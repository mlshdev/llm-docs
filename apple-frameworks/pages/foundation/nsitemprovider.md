> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider](https://developer.apple.com/documentation/foundation/nsitemprovider)

# NSItemProvider (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An item provider for conveying data or a file between processes during drag-and-drop or copy-and-paste activities, or from a host app to an app extension.

## Declaration

```swift
class NSItemProvider
```

<a id="overview"></a>

## Overview

Starting in iOS 11, item providers play a central role in drag and drop, and in copy and paste. They continue to play a role with app extensions.

The system uses an internal queue when calling the completion blocks for the `NSItemProvider` class. When using an item provider with drag and drop, ensure that UI updates take place on the main queue as follows:

```swift
DispatchQueue.main.async {
    // Work that impacts the user interface.
}
```

<a id="App-extension-support"></a>

### App extension support

An app extension typically encounters item providers when examining the [attachments](nsextensionitem/attachments.md) property of an [NSExtensionItem](nsextensionitem.md) object. During that examination, the extension can use the [hasItemConformingToTypeIdentifier(\_:)](nsitemprovider/hasitemconformingtotypeidentifier%28__%29.md) method to look for data that it recognizes. Item providers use [Uniform Type Identifiers](../uniformtypeidentifiers.md) values to identify the data they contain. After finding a type of data that your extension can use, it calls the [loadItem(forTypeIdentifier:options:completionHandler:)](nsitemprovider/loaditem%28fortypeidentifier_options_completionhandler_%29.md) method to load the actual data, which is delivered to the provided completion handler.

You can create item providers to vend data to another process. An extension that modifies an original data item can create a new `NSItemProvider` object to send back to the host app. When creating data items, you specify your data object and the type of that object. You can optionally use the [previewImageHandler](nsitemprovider/previewimagehandler.md) property to generate a preview image for your data.

A single item provider may use custom blocks to provide its data in many different formats. When configuring an item provider, use the [registerItem(forTypeIdentifier:loadHandler:)](nsitemprovider/registeritem%28fortypeidentifier_loadhandler_%29.md) method to register your blocks and the formats each one supports. When a client requests data in a particular format, the item provider executes the corresponding block, which is then responsible for coercing the data to the appropriate type and returning it to the client.

## Topics

### Creating an item provider

- [init(contentsOf:)](nsitemprovider/init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [init(contentsOf:contentType:openInPlace:coordinated:visibility:)](nsitemprovider/init%28contentsof_contenttype_openinplace_coordinated_visibility_%29.md): Provides data-backed content from an existing file with the specified parameters.
- [init(item:typeIdentifier:)](nsitemprovider/init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init()](nsitemprovider/init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [init(object:)](nsitemprovider/init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

### Configuring the provider

- [preferredPresentationSize](nsitemprovider/preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](nsitemprovider/preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [NSItemProvider.PreferredPresentationStyle](nsitemprovider/preferredpresentationstyle-swift.enum.md): The presentation styles that determine how a view shows an item provider’s data.
- [suggestedName](nsitemprovider/suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](nsitemprovider/teamdata.md): The collection of data an app uses to hold private team information during drag and drop.

### Querying the provider’s contents

- [canLoadObject(ofClass:)](nsitemprovider/canloadobject%28ofclass_%29-3eig9.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [canLoadObject(ofClass:)](nsitemprovider/canloadobject%28ofclass_%29-40grc.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasItemConformingToTypeIdentifier(\_:)](nsitemprovider/hasitemconformingtotypeidentifier%28__%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.
- [hasRepresentationConforming(toTypeIdentifier:fileOptions:)](nsitemprovider/hasrepresentationconforming%28totypeidentifier_fileoptions_%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.
- [registeredTypeIdentifiers](nsitemprovider/registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiers(fileOptions:)](nsitemprovider/registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.

### Loading the provider’s contents

- [loadItem(forTypeIdentifier:options:completionHandler:)](nsitemprovider/loaditem%28fortypeidentifier_options_completionhandler_%29.md): Deprecated. Loads the item’s data and coerces it to the specified type.
- [loadDataRepresentation(forTypeIdentifier:completionHandler:)](nsitemprovider/loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentation(for:completionHandler:)](nsitemprovider/loaddatarepresentation%28for_completionhandler_%29.md): Asynchronously copies the universal type data into a generic data object, returning a progress object.
- [loadFileRepresentation(forTypeIdentifier:completionHandler:)](nsitemprovider/loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentation(for:openInPlace:completionHandler:)](nsitemprovider/loadfilerepresentation%28for_openinplace_completionhandler_%29.md): Asynchronously writes a copy of the universal type data to a temporary file, returning a progress object.
- [loadInPlaceFileRepresentation(forTypeIdentifier:completionHandler:)](nsitemprovider/loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously opens a file in place, if possible, returning a progress object.
- [loadObject(ofClass:completionHandler:)](nsitemprovider/loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadObject(ofClass:completionHandler:)](nsitemprovider/loadobject%28ofclass_completionhandler_%29-6pysm.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadTransferable(type:completionHandler:)](nsitemprovider/loadtransferable%28type_completionhandler_%29.md): Asynchronously loads an object of a specified transferable type to an item provider, returning a progress object.

### Loading a preview image

- [loadPreviewImage(options:completionHandler:)](nsitemprovider/loadpreviewimage%28options_completionhandler_%29.md): Loads the preview image for the item that the item provider represents.
- [previewImageHandler](nsitemprovider/previewimagehandler.md): The custom preview image handler block for the item provider.

### Registering CloudKit shares

- [registerCloudKitShare(\_:container:)](nsitemprovider/registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCloudKitShare(preparationHandler:)](nsitemprovider/registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShare(\_:container:allowedSharingOptions:)](nsitemprovider/registerckshare%28__container_allowedsharingoptions_%29.md): Registers an existing collaboration object on a server.
- [registerCKShare(container:allowedSharingOptions:preparationHandler:)](nsitemprovider/registerckshare%28container_allowedsharingoptions_preparationhandler_%29.md): Creates and registers a new collaboration object using a collection of records to share.

### Registering content types

- [registeredContentTypes](nsitemprovider/registeredcontenttypes.md): Registered content types in the order the app registers each type.
- [registeredContentTypesForOpenInPlace](nsitemprovider/registeredcontenttypesforopeninplace.md): Registered content types that the system can load as open-in-place files.
- [registeredContentTypes(conformingTo:)](nsitemprovider/registeredcontenttypes%28conformingto_%29.md): Returns an array of registered content types that conform to a specified content type.

### Registering data

- [registerDataRepresentation(forTypeIdentifier:visibility:loadHandler:)](nsitemprovider/registerdatarepresentation%28fortypeidentifier_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerDataRepresentation(for:visibility:loadHandler:)](nsitemprovider/registerdatarepresentation%28for_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerItem(forTypeIdentifier:loadHandler:)](nsitemprovider/registeritem%28fortypeidentifier_loadhandler_%29.md): Deprecated. Lazily registers an item, according to the item provider type coercion policy.

### Registering files

- [registerFileRepresentation(forTypeIdentifier:fileOptions:visibility:loadHandler:)](nsitemprovider/registerfilerepresentation%28fortypeidentifier_fileoptions_visibility_loadhandler_%29.md): Registers a file-backed representation for an item, specifying file options, item visibility, and a load handler.
- [registerFileRepresentation(for:visibility:openInPlace:loadHandler:)](nsitemprovider/registerfilerepresentation%28for_visibility_openinplace_loadhandler_%29.md): Registers a file-backed representation for an item with item visibility, an open-in-place option, and a load handler.

### Registering group activities

- [registerGroupActivity(\_:)](nsitemprovider/registergroupactivity%28__%29.md): Registers a group activity instance with the specificed options.
- [registerGroupActivity(preparationHandler:)](nsitemprovider/registergroupactivity%28preparationhandler_%29.md): Registers a group activity instance asynchronously with the specified options.

### Registering objects

- [registerObject(\_:visibility:)](nsitemprovider/registerobject%28__visibility_%29.md): Adds representations of a specified object to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObject(ofClass:visibility:loadHandler:)](nsitemprovider/registerobject%28ofclass_visibility_loadhandler_%29-9sndn.md): Lazily adds representations of a specified object class to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObject(ofClass:visibility:loadHandler:)](nsitemprovider/registerobject%28ofclass_visibility_loadhandler_%29-133rx.md): Lazily adds representations of a specified object type to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [register(\_:)](nsitemprovider/register%28__%29.md): Adds representations of a specified transferable type to an item provider.

### Getting the provider’s frame

- [sourceFrame](nsitemprovider/sourceframe.md): The rectangle that the item occupies in the host app’s source window.
- [containerFrame](nsitemprovider/containerframe.md): The rectangle of the item’s visible content.

### Constants

- [NSItemProvider.CompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProvider.LoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [errorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProvider.ErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.

### Initializers

- [init(contentsOfURL:)](nsitemprovider/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Attachments

- [NSExtensionItem](nsextensionitem.md): An immutable collection of values representing different aspects of an item for an extension to act upon.
- [Add Functionality to Finder with Action Extensions](https://developer.apple.com/documentation/appkit/add-functionality-to-finder-with-action-extensions): Implement Action Extensions to provide quick access to commonly used features of your app.

# NSItemProvider (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An item provider for conveying data or a file between processes during drag-and-drop or copy-and-paste activities, or from a host app to an app extension.

## Declaration

```objectivec
@interface NSItemProvider : NSObject
```

<a id="overview"></a>

## Overview

Starting in iOS 11, item providers play a central role in drag and drop, and in copy and paste. They continue to play a role with app extensions.

The system uses an internal queue when calling the completion blocks for the `NSItemProvider` class. When using an item provider with drag and drop, ensure that UI updates take place on the main queue as follows:

```swift
DispatchQueue.main.async {
    // Work that impacts the user interface.
}
```

<a id="App-extension-support"></a>

### App extension support

An app extension typically encounters item providers when examining the [attachments](nsextensionitem/attachments.md) property of an [NSExtensionItem](nsextensionitem.md) object. During that examination, the extension can use the [hasItemConformingToTypeIdentifier:](nsitemprovider/hasitemconformingtotypeidentifier%28__%29.md) method to look for data that it recognizes. Item providers use [Uniform Type Identifiers](../uniformtypeidentifiers.md) values to identify the data they contain. After finding a type of data that your extension can use, it calls the [loadItemForTypeIdentifier:options:completionHandler:](nsitemprovider/loaditem%28fortypeidentifier_options_completionhandler_%29.md) method to load the actual data, which is delivered to the provided completion handler.

You can create item providers to vend data to another process. An extension that modifies an original data item can create a new `NSItemProvider` object to send back to the host app. When creating data items, you specify your data object and the type of that object. You can optionally use the [previewImageHandler](nsitemprovider/previewimagehandler.md) property to generate a preview image for your data.

A single item provider may use custom blocks to provide its data in many different formats. When configuring an item provider, use the [registerItemForTypeIdentifier:loadHandler:](nsitemprovider/registeritem%28fortypeidentifier_loadhandler_%29.md) method to register your blocks and the formats each one supports. When a client requests data in a particular format, the item provider executes the corresponding block, which is then responsible for coercing the data to the appropriate type and returning it to the client.

## Topics

### Creating an item provider

- [initWithContentsOfURL:](nsitemprovider/init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [initWithContentsOfURL:contentType:openInPlace:coordinated:visibility:](nsitemprovider/initwithcontentsofurl_contenttype_openinplace_coordinated_visibility_.md): Provides data-backed content from an existing file with the specified parameters.
- [initWithItem:typeIdentifier:](nsitemprovider/init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init](nsitemprovider/init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [initWithObject:](nsitemprovider/init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

### Configuring the provider

- [preferredPresentationSize](nsitemprovider/preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](nsitemprovider/preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [suggestedName](nsitemprovider/suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](nsitemprovider/teamdata.md): The collection of data an app uses to hold private team information during drag and drop.

### Querying the provider’s contents

- [canLoadObjectOfClass:](nsitemprovider/canloadobject%28ofclass_%29-3eig9.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasItemConformingToTypeIdentifier:](nsitemprovider/hasitemconformingtotypeidentifier%28__%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.
- [hasRepresentationConformingToTypeIdentifier:fileOptions:](nsitemprovider/hasrepresentationconforming%28totypeidentifier_fileoptions_%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.
- [registeredTypeIdentifiers](nsitemprovider/registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiersWithFileOptions:](nsitemprovider/registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.

### Loading the provider’s contents

- [loadItemForTypeIdentifier:options:completionHandler:](nsitemprovider/loaditem%28fortypeidentifier_options_completionhandler_%29.md): Deprecated. Loads the item’s data and coerces it to the specified type.
- [loadDataRepresentationForTypeIdentifier:completionHandler:](nsitemprovider/loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentationForContentType:completionHandler:](nsitemprovider/loaddatarepresentationforcontenttype_completionhandler_.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadFileRepresentationForTypeIdentifier:completionHandler:](nsitemprovider/loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentationForContentType:openInPlace:completionHandler:](nsitemprovider/loadfilerepresentationforcontenttype_openinplace_completionhandler_.md): Asynchronously copies the content type data into a generic data object with the specified parameters.
- [loadInPlaceFileRepresentationForTypeIdentifier:completionHandler:](nsitemprovider/loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously opens a file in place, if possible, returning a progress object.
- [loadObjectOfClass:completionHandler:](nsitemprovider/loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.

### Loading a preview image

- [loadPreviewImageWithOptions:completionHandler:](nsitemprovider/loadpreviewimage%28options_completionhandler_%29.md): Loads the preview image for the item that the item provider represents.
- [previewImageHandler](nsitemprovider/previewimagehandler.md): The custom preview image handler block for the item provider.

### Registering CloudKit shares

- [registerCloudKitShare:container:](nsitemprovider/registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCloudKitShareWithPreparationHandler:](nsitemprovider/registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShare:container:allowedSharingOptions:](nsitemprovider/registerckshare_container_allowedsharingoptions_.md): Registers an existing collaboration object on a server.
- [registerCKShareWithContainer:allowedSharingOptions:preparationHandler:](nsitemprovider/registercksharewithcontainer_allowedsharingoptions_preparationhandler_.md): Creates and registers a new collaboration object using a collection of records to share.

### Registering content types

- [registeredContentTypes](nsitemprovider/registeredcontenttypes.md): Registered content types in the order the app registers each type.
- [registeredContentTypesForOpenInPlace](nsitemprovider/registeredcontenttypesforopeninplace.md): Registered content types that the system can load as open-in-place files.
- [registeredContentTypesConformingToContentType:](nsitemprovider/registeredcontenttypes%28conformingto_%29.md): Returns an array of registered content types that conform to a specified content type.

### Registering data

- [registerDataRepresentationForTypeIdentifier:visibility:loadHandler:](nsitemprovider/registerdatarepresentation%28fortypeidentifier_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerItemForTypeIdentifier:loadHandler:](nsitemprovider/registeritem%28fortypeidentifier_loadhandler_%29.md): Deprecated. Lazily registers an item, according to the item provider type coercion policy.
- [registerDataRepresentationForContentType:visibility:loadHandler:](nsitemprovider/registerdatarepresentationforcontenttype_visibility_loadhandler_.md): Lazily registers an item, according to the item provider type coercion policy.

### Registering files

- [registerFileRepresentationForTypeIdentifier:fileOptions:visibility:loadHandler:](nsitemprovider/registerfilerepresentation%28fortypeidentifier_fileoptions_visibility_loadhandler_%29.md): Registers a file-backed representation for an item, specifying file options, item visibility, and a load handler.
- [registerFileRepresentationForContentType:visibility:openInPlace:loadHandler:](nsitemprovider/registerfilerepresentationforcontenttype_visibility_openinplace_loadhandler_.md): Registers a file-backed representation for an item with item visibility, an open-in-place option, and a load handler.

### Registering objects

- [registerObject:visibility:](nsitemprovider/registerobject%28__visibility_%29.md): Adds representations of a specified object to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObjectOfClass:visibility:loadHandler:](nsitemprovider/registerobject%28ofclass_visibility_loadhandler_%29-9sndn.md): Lazily adds representations of a specified object class to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.

### Getting the provider’s frame

- [sourceFrame](nsitemprovider/sourceframe.md): The rectangle that the item occupies in the host app’s source window.
- [containerFrame](nsitemprovider/containerframe.md): The rectangle of the item’s visible content.

### Constants

- [NSItemProviderCompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProviderLoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [NSItemProviderErrorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProviderErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)

## See Also

### Attachments

- [NSExtensionItem](nsextensionitem.md): An immutable collection of values representing different aspects of an item for an extension to act upon.
