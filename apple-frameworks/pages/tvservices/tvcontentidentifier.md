> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentidentifier](https://developer.apple.com/documentation/tvservices/tvcontentidentifier)

# TVContentIdentifier (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An object that uniquely identifies media content in either a single piece or a collection.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```swift
class TVContentIdentifier
```

<a id="overview"></a>

## Overview

Every content identifier is represented by two parts: a string identifier ([identifier](tvcontentidentifier/identifier.md)) and a container identifier ([container](tvcontentidentifier/container.md)). The container identifier may be `nil`, which indicates that the content lives at the top level of the container hierarchy. You are responsible for organizing your content into a hierarchy and creating identifiers that uniquely identify each piece of content.

When designing your content identifiers, follow this guidance:

- A given content identifier must be unique for a particular content item, across *all* past, current, and future content items, even if the user no longer has access to that item.
- The uniqueness of a content identifier comes from the uniqueness of its two parts. The [identifier](tvcontentidentifier/identifier.md) property of a content identifier need not be universally unique across all of the app’s content identifiers, as long as items that share the same identifier string are contained in different containers.

## Topics

### Initializing a Content Identifier

- [init(identifier:container:)](tvcontentidentifier/init%28identifier_container_%29.md): Deprecated. Creates a new content identifier.
- [init(coder:)](tvcontentidentifier/init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.

### Inspecting an Identifier’s Contents

- [identifier](tvcontentidentifier/identifier.md): Deprecated. The string that identifies this content item.
- [container](tvcontentidentifier/container.md): Deprecated. The container that this content item is contained in.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Content

- [TVContentItem](tvcontentitem.md): Deprecated. An object that describes either a piece of content or a container for other content items.
- [TVTopShelfImageSize(shape:style:)](tvtopshelfimagesize%28shape_style_%29.md): Deprecated. Returns the ideal size for an image, according to its particular shape and style.

# TVContentIdentifier (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An object that uniquely identifies media content in either a single piece or a collection.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```objectivec
@interface TVContentIdentifier : NSObject
```

<a id="overview"></a>

## Overview

Every content identifier is represented by two parts: a string identifier ([identifier](tvcontentidentifier/identifier.md)) and a container identifier ([container](tvcontentidentifier/container.md)). The container identifier may be `nil`, which indicates that the content lives at the top level of the container hierarchy. You are responsible for organizing your content into a hierarchy and creating identifiers that uniquely identify each piece of content.

When designing your content identifiers, follow this guidance:

- A given content identifier must be unique for a particular content item, across *all* past, current, and future content items, even if the user no longer has access to that item.
- The uniqueness of a content identifier comes from the uniqueness of its two parts. The [identifier](tvcontentidentifier/identifier.md) property of a content identifier need not be universally unique across all of the app’s content identifiers, as long as items that share the same identifier string are contained in different containers.

## Topics

### Initializing a Content Identifier

- [initWithIdentifier:container:](tvcontentidentifier/init%28identifier_container_%29.md): Deprecated. Creates a new content identifier.
- [initWithCoder:](tvcontentidentifier/init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.

### Inspecting an Identifier’s Contents

- [identifier](tvcontentidentifier/identifier.md): Deprecated. The string that identifies this content item.
- [container](tvcontentidentifier/container.md): Deprecated. The container that this content item is contained in.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Content

- [TVContentItem](tvcontentitem.md): Deprecated. An object that describes either a piece of content or a container for other content items.
- [TVTopShelfImageSizeForShape](tvtopshelfimagesize%28shape_style_%29.md): Deprecated. Returns the ideal size for an image, according to its particular shape and style.
