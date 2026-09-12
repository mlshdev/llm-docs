> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationhighlight](https://developer.apple.com/documentation/sharedwithyou/swcollaborationhighlight)

# SWCollaborationHighlight (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A highlight object that represents an active collaboration.

## Declaration

```swift
class SWCollaborationHighlight
```

## Mentioned In

- [Adding custom collaboration to your app](adding-custom-collaboration-to-your-app.md)
- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

## Topics

### Accessing collaboration attributes

- [collaborationIdentifier](swcollaborationhighlight/collaborationidentifier.md): A unique identifier that the app hosting the collaboration provides.
- [contentType](swcollaborationhighlight/contenttype.md): The UTI type for this collaboration highlight.
- [creationDate](swcollaborationhighlight/creationdate.md): The date the system creates this file.
- [title](swcollaborationhighlight/title.md): The title of the collaboration highlight.

## Relationships

### Inherits From

- [SWHighlight](swhighlight.md)

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

### Collaboration attributes

- [SWCollaborationMetadata](../sharedwithyoucore/swcollaborationmetadata.md): A model object for conveying data during a collaboration.
- [SWCollaborationIdentifier](../sharedwithyoucore/swcollaborationidentifier.md): A unique identifier for a collaboration.
- [SWLocalCollaborationIdentifier](../sharedwithyoucore/swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [SWCollaborationMetadataTypeIdentifier](swcollaborationmetadatatypeidentifier.md): A string constant for the metadata type identifier.

# SWCollaborationHighlight (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A highlight object that represents an active collaboration.

## Declaration

```objectivec
@interface SWCollaborationHighlight : SWHighlight
```

## Mentioned In

- [Adding custom collaboration to your app](adding-custom-collaboration-to-your-app.md)
- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

## Topics

### Accessing collaboration attributes

- [collaborationIdentifier](swcollaborationhighlight/collaborationidentifier.md): A unique identifier that the app hosting the collaboration provides.
- [contentType](swcollaborationhighlight/contenttype.md): The UTI type for this collaboration highlight.
- [creationDate](swcollaborationhighlight/creationdate.md): The date the system creates this file.
- [title](swcollaborationhighlight/title.md): The title of the collaboration highlight.

## Relationships

### Inherits From

- [SWHighlight](swhighlight.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Collaboration attributes

- [SWCollaborationMetadata](../sharedwithyoucore/swcollaborationmetadata.md): A model object for conveying data during a collaboration.
- [SWCollaborationIdentifier](../sharedwithyoucore/swcollaborationidentifier.md): A unique identifier for a collaboration.
- [SWLocalCollaborationIdentifier](../sharedwithyoucore/swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [SWCollaborationMetadataTypeIdentifier](swcollaborationmetadatatypeidentifier.md): A string constant for the metadata type identifier.
