> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface](https://developer.apple.com/documentation/iosurface)

# IOSurface (Swift)

**Framework:** IOSurface  
**Kind:** Framework  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Share hardware-accelerated buffer data (framebuffers and textures) across multiple processes. Manage image memory more efficiently.

<a id="overview"></a>

## Overview

The IOSurface framework provides a framebuffer object suitable for sharing across process boundaries. It is commonly used to allow applications to move complex image decompression and draw logic into a separate process to enhance security.

## Topics

### Classes

- [IOSurface](iosurface/iosurface.md): Data type representing an IOSurface opaque object.
- [IOSurfaceRef](iosurface/iosurfaceref.md): Data type representing an IOSurface opaque object.

### Structures

- [IOSurfaceLockOptions](iosurface/iosurfacelockoptions.md)
- [IOSurfacePropertyKey](iosurface/iosurfacepropertykey.md)
- [IOSurfacePurgeabilityState](iosurface/iosurfacepurgeabilitystate.md)

### Reference

- [IOSurface Structures](iosurface/iosurface-structures.md)
- [IOSurface Constants](iosurface/iosurface-constants.md)
- [IOSurface Functions](iosurface/iosurface-functions.md)

### Variables

- [kIOSurfaceContentHeadroom](iosurface/kiosurfacecontentheadroom.md)
- [kIOSurfaceCopybackCache](iosurface/kiosurfacecopybackcache.md)
- [kIOSurfaceCopybackInnerCache](iosurface/kiosurfacecopybackinnercache.md)
- [kIOSurfaceDefaultCache](iosurface/kiosurfacedefaultcache.md)
- [kIOSurfaceInhibitCache](iosurface/kiosurfaceinhibitcache.md)
- [kIOSurfaceMapCacheShift](iosurface/kiosurfacemapcacheshift.md)
- [kIOSurfaceMapCopybackCache](iosurface/kiosurfacemapcopybackcache.md)
- [kIOSurfaceMapCopybackInnerCache](iosurface/kiosurfacemapcopybackinnercache.md)
- [kIOSurfaceMapDefaultCache](iosurface/kiosurfacemapdefaultcache.md)
- [kIOSurfaceMapInhibitCache](iosurface/kiosurfacemapinhibitcache.md)
- [kIOSurfaceMapWriteCombineCache](iosurface/kiosurfacemapwritecombinecache.md)
- [kIOSurfaceMapWriteThruCache](iosurface/kiosurfacemapwritethrucache.md)
- [kIOSurfaceWriteCombineCache](iosurface/kiosurfacewritecombinecache.md)
- [kIOSurfaceWriteThruCache](iosurface/kiosurfacewritethrucache.md)

# IOSurface (Objective-C)

**Framework:** IOSurface  
**Kind:** Framework  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Share hardware-accelerated buffer data (framebuffers and textures) across multiple processes. Manage image memory more efficiently.

<a id="overview"></a>

## Overview

The IOSurface framework provides a framebuffer object suitable for sharing across process boundaries. It is commonly used to allow applications to move complex image decompression and draw logic into a separate process to enhance security.

## Topics

### Classes

- [IOSurface](iosurface/iosurface.md): Data type representing an IOSurface opaque object.
- [IOSurfaceRef](iosurface/iosurfaceref.md): Data type representing an IOSurface opaque object.

### Structures

- [IOSurfaceLockOptions](iosurface/iosurfacelockoptions.md)
- [IOSurfacePropertyKey](iosurface/iosurfacepropertykey.md)
- [IOSurfacePurgeabilityState](iosurface/iosurfacepurgeabilitystate.md)

### Reference

- [IOSurface Structures](iosurface/iosurface-structures.md)
- [IOSurface Enumerations](iosurface/iosurface-enumerations.md)
- [IOSurface Constants](iosurface/iosurface-constants.md)
- [IOSurface Functions](iosurface/iosurface-functions.md)
- [IOSurface Data Types](iosurface/iosurface-data-types.md)

### Variables

- [kIOSurfaceContentHeadroom](iosurface/kiosurfacecontentheadroom.md)

### Macros

- [IOSFC_SWIFT_NONSENDABLE](iosurface/iosfc_swift_nonsendable.md)
- [IOSFC_SWIFT_SENDABLE](iosurface/iosfc_swift_sendable.md)

### Enumeration Cases

- [kIOSurfaceCopybackCache](iosurface/kiosurfacecopybackcache.md)
- [kIOSurfaceCopybackInnerCache](iosurface/kiosurfacecopybackinnercache.md)
- [kIOSurfaceDefaultCache](iosurface/kiosurfacedefaultcache.md)
- [kIOSurfaceInhibitCache](iosurface/kiosurfaceinhibitcache.md)
- [kIOSurfaceMapCacheShift](iosurface/kiosurfacemapcacheshift.md)
- [kIOSurfaceMapCopybackCache](iosurface/kiosurfacemapcopybackcache.md)
- [kIOSurfaceMapCopybackInnerCache](iosurface/kiosurfacemapcopybackinnercache.md)
- [kIOSurfaceMapDefaultCache](iosurface/kiosurfacemapdefaultcache.md)
- [kIOSurfaceMapInhibitCache](iosurface/kiosurfacemapinhibitcache.md)
- [kIOSurfaceMapWriteCombineCache](iosurface/kiosurfacemapwritecombinecache.md)
- [kIOSurfaceMapWriteThruCache](iosurface/kiosurfacemapwritethrucache.md)
- [kIOSurfaceWriteCombineCache](iosurface/kiosurfacewritecombinecache.md)
- [kIOSurfaceWriteThruCache](iosurface/kiosurfacewritethrucache.md)
