> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/datarecord](https://developer.apple.com/documentation/webkit/wkwebextension/datarecord)

# WKWebExtension.DataRecord (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that represents a record of stored data for a specific web extension context.

## Declaration

```swift
@MainActor class DataRecord
```

<a id="overview"></a>

## Overview

Contains properties and methods to query the data types and sizes.

## Topics

### Structures

- [WKWebExtension.DataRecord.Error](datarecord/error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](datarecord.md) domain.

### Instance Properties

- [containedDataTypes](datarecord/containeddatatypes.md): The set of data types contained in this data record.
- [displayName](datarecord/displayname.md): The display name for the web extension to which this data record belongs.
- [errors](datarecord/errors.md): An array of errors that may have occurred when either calculating or deleting storage.
- [totalSizeInBytes](datarecord/totalsizeinbytes.md): The total size in bytes of all data types contained in this data record.
- [uniqueIdentifier](datarecord/uniqueidentifier.md): Unique identifier for the web extension context to which this data record belongs.

### Instance Methods

- [sizeInBytes(ofTypes:)](datarecord/sizeinbytes%28oftypes_%29.md): Retrieves the size in bytes of the specific data types in this data record.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.TabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionDataRecord (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that represents a record of stored data for a specific web extension context.

## Declaration

```objectivec
@interface WKWebExtensionDataRecord : NSObject
```

<a id="overview"></a>

## Overview

Contains properties and methods to query the data types and sizes.

## Topics

### Errors

- [WKWebExtensionDataRecordError](datarecord/error/code.md): Constants that indicate errors in the [WKWebExtensionDataRecord](datarecord.md) domain.
- [WKWebExtensionDataRecordErrorDomain](datarecord/errordomain.md): Indicates a [WKWebExtensionDataRecord](datarecord.md) error.

### Instance Properties

- [containedDataTypes](datarecord/containeddatatypes.md): The set of data types contained in this data record.
- [displayName](datarecord/displayname.md): The display name for the web extension to which this data record belongs.
- [errors](datarecord/errors.md): An array of errors that may have occurred when either calculating or deleting storage.
- [totalSizeInBytes](datarecord/totalsizeinbytes.md): The total size in bytes of all data types contained in this data record.
- [uniqueIdentifier](datarecord/uniqueidentifier.md): Unique identifier for the web extension context to which this data record belongs.

### Instance Methods

- [sizeInBytesOfTypes:](datarecord/sizeinbytes%28oftypes_%29.md): Retrieves the size in bytes of the specific data types in this data record.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionTabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
