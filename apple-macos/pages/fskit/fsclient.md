> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsclient](https://developer.apple.com/documentation/fskit/fsclient)

# FSClient (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An interface for apps and daemons to interact with FSKit.

## Declaration

```swift
class FSClient
```

<a id="overview"></a>

## Overview

FSClient is the primary management interface for FSKit. Use this class to discover FSKit extensions installed on the system, including your own.

> **Important**

> Don’t subclass `FSClient`.

## Topics

### Obtaining the shared instance

- [shared](fsclient/shared.md): The shared instance of the FSKit client class.

### Discovering installed extensions

- [fetchInstalledExtensions(completionHandler:)](fsclient/fetchinstalledextensions%28completionhandler_%29.md): Asynchronously retrieves an list of installed file system modules.
- [FSModuleIdentity](fsmoduleidentity.md): An installed file system module.

### Performing single-volume mounting

- [mountSingleVolume(resource:bundleID:options:completionHandler:)](fsclient/mountsinglevolume%28resource_bundleid_options_completionhandler_%29.md): Asynchronously mounts a single volume file system with a given resource.
- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.

### Accessing file system extension settings

- [openFileSystemExtensionsSettings()](fsclient/openfilesystemextensionssettings%28%29.md): Opens the File System Extensions settings in System Settings.

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

# FSClient (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An interface for apps and daemons to interact with FSKit.

## Declaration

```objectivec
@interface FSClient : NSObject
```

<a id="overview"></a>

## Overview

FSClient is the primary management interface for FSKit. Use this class to discover FSKit extensions installed on the system, including your own.

> **Important**

> Don’t subclass `FSClient`.

## Topics

### Obtaining the shared instance

- [sharedInstance](fsclient/shared.md): The shared instance of the FSKit client class.

### Discovering installed extensions

- [fetchInstalledExtensionsWithCompletionHandler:](fsclient/fetchinstalledextensions%28completionhandler_%29.md): Asynchronously retrieves an list of installed file system modules.
- [FSModuleIdentity](fsmoduleidentity.md): An installed file system module.

### Performing single-volume mounting

- [mountSingleVolumeForResource:bundleID:options:completionHandler:](fsclient/mountsinglevolume%28resource_bundleid_options_completionhandler_%29.md): Asynchronously mounts a single volume file system with a given resource.
- [FSResource](fsresource.md): An abstract resource a file system uses to provide data for a volume.

### Accessing file system extension settings

- [openFileSystemExtensionsSettings](fsclient/openfilesystemextensionssettings%28%29.md): Opens the File System Extensions settings in System Settings.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
