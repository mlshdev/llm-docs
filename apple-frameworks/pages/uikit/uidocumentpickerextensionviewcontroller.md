> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller)

# UIDocumentPickerExtensionViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The principal class for the Document Picker View Controller extension.

> Use [NSFileProviderExtension](../fileprovider/nsfileproviderextension.md) instead.

## Declaration

```swift
@MainActor class UIDocumentPickerExtensionViewController
```

<a id="overview"></a>

## Overview

The Document Picker View Controller extension can perform *import* and *export* operations on its own. If you want to support *open* and *move* operations, you must pair it with a File Provider extension.

When creating a Document Picker extension, you must subclass [UIDocumentPickerExtensionViewController](uidocumentpickerextensionviewcontroller.md) to provide the document picker’s user interface. Your subclass presents a list of available documents and destinations to the user. When the user makes a selection, you trigger the file transfer and pass the selected URL back to the host app.

For more information on creating Document Picker extensions, see [Document Provider](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/FileProvider.html#//apple_ref/doc/uid/TP40014214-CH18).

## Topics

### Managing the user interface

- [dismissGrantingAccess(to:)](uidocumentpickerextensionviewcontroller/dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](uidocumentpickerextensionviewcontroller/documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](uidocumentpickerextensionviewcontroller/documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](uidocumentpickerextensionviewcontroller/originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentation(in:)](uidocumentpickerextensionviewcontroller/prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](uidocumentpickerextensionviewcontroller/provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](uidocumentpickerextensionviewcontroller/validtypes.md): Deprecated. An array of valid uniform type identifiers.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Document provider

- [NSFileProviderExtension](../fileprovider/nsfileproviderextension.md): The principal class for the nonreplicated File Provider extension.

# UIDocumentPickerExtensionViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The principal class for the Document Picker View Controller extension.

> Use [NSFileProviderExtension](../fileprovider/nsfileproviderextension.md) instead.

## Declaration

```objectivec
@interface UIDocumentPickerExtensionViewController : UIViewController
```

<a id="overview"></a>

## Overview

The Document Picker View Controller extension can perform *import* and *export* operations on its own. If you want to support *open* and *move* operations, you must pair it with a File Provider extension.

When creating a Document Picker extension, you must subclass [UIDocumentPickerExtensionViewController](uidocumentpickerextensionviewcontroller.md) to provide the document picker’s user interface. Your subclass presents a list of available documents and destinations to the user. When the user makes a selection, you trigger the file transfer and pass the selected URL back to the host app.

For more information on creating Document Picker extensions, see [Document Provider](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/FileProvider.html#//apple_ref/doc/uid/TP40014214-CH18).

## Topics

### Managing the user interface

- [dismissGrantingAccessToURL:](uidocumentpickerextensionviewcontroller/dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](uidocumentpickerextensionviewcontroller/documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](uidocumentpickerextensionviewcontroller/documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](uidocumentpickerextensionviewcontroller/originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentationInMode:](uidocumentpickerextensionviewcontroller/prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](uidocumentpickerextensionviewcontroller/provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](uidocumentpickerextensionviewcontroller/validtypes.md): Deprecated. An array of valid uniform type identifiers.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Document provider

- [NSFileProviderExtension](../fileprovider/nsfileproviderextension.md): The principal class for the nonreplicated File Provider extension.
