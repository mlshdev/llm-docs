> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersync-swift.class](https://developer.apple.com/documentation/findersync/fifindersync-swift.class)

# FIFinderSync (Swift)

**Framework:** Finder Sync  
**Kind:** Class  
**Availability:** macOS 10.10+

A type to subclass to add badges, custom shortcut menus, and toolbar buttons to the Finder.

## Declaration

```swift
class FIFinderSync
```

<a id="overview"></a>

## Overview

Subclass the FIFinderSync class when you want to customize the appearance of the Finder. Although the FIFinderSync class doesn’t provide any developer accessible API, it does adopt the [FIFinderSyncProtocol](fifindersyncprotocol.md) protocol. This protocol declares methods you can implement to modify the appearance of the Finder. For more information on these methods, see [FIFinderSyncProtocol](fifindersyncprotocol.md). To learn more about creating a Finder Sync extension, see [Finder Sync](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Finder.html#//apple_ref/doc/uid/TP40014214-CH15) in [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FIFinderSyncProtocol](fifindersyncprotocol.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [FIFinderSyncProtocol](fifindersyncprotocol.md): The group of methods to implement for modifying the Finder user interface to express file synchronization status and control.

### Classes

- [FIFinderSyncController](fifindersynccontroller.md): A controller that acts as a bridge between your Finder Sync extension and the Finder itself.

# FIFinderSync (Objective-C)

**Framework:** Finder Sync  
**Kind:** Class  
**Availability:** macOS 10.10+

A type to subclass to add badges, custom shortcut menus, and toolbar buttons to the Finder.

## Declaration

```objectivec
@interface FIFinderSync : NSObject
```

<a id="overview"></a>

## Overview

Subclass the FIFinderSync class when you want to customize the appearance of the Finder. Although the FIFinderSync class doesn’t provide any developer accessible API, it does adopt the [FIFinderSync](fifindersyncprotocol.md) protocol. This protocol declares methods you can implement to modify the appearance of the Finder. For more information on these methods, see [FIFinderSync](fifindersyncprotocol.md). To learn more about creating a Finder Sync extension, see [Finder Sync](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Finder.html#//apple_ref/doc/uid/TP40014214-CH15) in [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [FIFinderSync](fifindersyncprotocol.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)

## See Also

### Related Documentation

- [FIFinderSync](fifindersyncprotocol.md): The group of methods to implement for modifying the Finder user interface to express file synchronization status and control.

### Classes

- [FIFinderSyncController](fifindersynccontroller.md): A controller that acts as a bridge between your Finder Sync extension and the Finder itself.
