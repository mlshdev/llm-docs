> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinib](https://developer.apple.com/documentation/uikit/uinib)

# UINib (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

An object that contains Interface Builder nib files.

## Declaration

```swift
@MainActor class UINib
```

<a id="overview"></a>

## Overview

A [UINib](uinib.md) object caches the contents of a nib file in memory, ready for unarchiving and instantiation. When your app needs to instantiate the contents of the nib file, it can do so without having to load the data from the nib file first, which improves performance. The [UINib](uinib.md) object can automatically release this cached nib data to free up memory for your app under low-memory conditions, reloading that data the next time your app instantiates the nib.

Your app should use [UINib](uinib.md) objects whenever it needs to repeatedly instantiate the same nib data. For example, if your table view uses a nib file to instantiate table view cells, caching the nib in a [UINib](uinib.md) object can improve performance.

When you create a [UINib](uinib.md) object using the contents of a nib file, the object loads the object graph in the referenced nib file, but it doesn’t unarchive it yet. To unarchive all of the nib data and instantiate the nib, your app calls the [instantiate(withOwner:options:)](uinib/instantiate%28withowner_options_%29.md) method. For more information about the steps that the [UINib](uinib.md) object follows to instantiate the nib’s object graph, see [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

## Topics

### Creating a nib object

- [init(nibName:bundle:)](uinib/init%28nibname_bundle_%29.md): Deprecated. Returns a nib object from the nib file in the specified bundle.
- [init(data:bundle:)](uinib/init%28data_bundle_%29.md): Deprecated. Creates a nib object from nib data stored in memory.

### Retrieving objects from the nib file

- [instantiate(withOwner:options:)](uinib/instantiate%28withowner_options_%29.md): Deprecated. Unarchives and instantiates the in-memory contents of the nib object’s nib file, creating a distinct object tree and set of top-level objects.
- [UINib.OptionsKey](uinib/optionskey.md): Options that specify how to unarchive and instantiate the nib.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UINib (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

An object that contains Interface Builder nib files.

## Declaration

```objectivec
@interface UINib : NSObject
```

<a id="overview"></a>

## Overview

A [UINib](uinib.md) object caches the contents of a nib file in memory, ready for unarchiving and instantiation. When your app needs to instantiate the contents of the nib file, it can do so without having to load the data from the nib file first, which improves performance. The [UINib](uinib.md) object can automatically release this cached nib data to free up memory for your app under low-memory conditions, reloading that data the next time your app instantiates the nib.

Your app should use [UINib](uinib.md) objects whenever it needs to repeatedly instantiate the same nib data. For example, if your table view uses a nib file to instantiate table view cells, caching the nib in a [UINib](uinib.md) object can improve performance.

When you create a [UINib](uinib.md) object using the contents of a nib file, the object loads the object graph in the referenced nib file, but it doesn’t unarchive it yet. To unarchive all of the nib data and instantiate the nib, your app calls the [instantiateWithOwner:options:](uinib/instantiate%28withowner_options_%29.md) method. For more information about the steps that the [UINib](uinib.md) object follows to instantiate the nib’s object graph, see [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

## Topics

### Creating a nib object

- [nibWithNibName:bundle:](uinib/init%28nibname_bundle_%29.md): Deprecated. Returns a nib object from the nib file in the specified bundle.
- [nibWithData:bundle:](uinib/init%28data_bundle_%29.md): Deprecated. Creates a nib object from nib data stored in memory.

### Retrieving objects from the nib file

- [instantiateWithOwner:options:](uinib/instantiate%28withowner_options_%29.md): Deprecated. Unarchives and instantiates the in-memory contents of the nib object’s nib file, creating a distinct object tree and set of top-level objects.
- [UINibOptionsKey](uinib/optionskey.md): Options that specify how to unarchive and instantiate the nib.

### Deprecated

- [UINibProxiedObjectsKey](uinibproxiedobjectskey.md): Deprecated. The runtime replacement objects for any proxy objects in the nib file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
