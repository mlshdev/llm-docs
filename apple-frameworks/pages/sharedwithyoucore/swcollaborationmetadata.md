> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationmetadata](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata)

# SWCollaborationMetadata (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A model object for conveying data during a collaboration.

## Declaration

```swift
class SWCollaborationMetadata
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)
- [Adding shared content collaboration to your app](../sharedwithyou/adding-shared-content-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

Use `SWCollaborationMetadata` to share content without using iCloud. The system wraps the metadata object in an [NSItemProvider](../foundation/nsitemprovider.md) object to implement a custom collaboration infrastructure.

If your app uses SwiftUI, `SWCollaborationMetadata` is compatible with the [Transferable](../coretransferable/transferable.md) protocol and the [ShareLink](https://developer.apple.com/documentation/swiftui/sharelink) view.

## Topics

### Creating collaboration metadata

- [init(localIdentifier:)](swcollaborationmetadata/init%28localidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified local identifier.
- [init(collaborationIdentifier:)](swcollaborationmetadata/init%28collaborationidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified global identifier.

### Accessing metadata attributes

- [collaborationIdentifier](swcollaborationmetadata/collaborationidentifier.md): A globally unique identifier that the app hosting the collaboration provides.
- [defaultShareOptions](swcollaborationmetadata/defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](swcollaborationmetadata/initiatorhandle.md): The handle of the person who initiates the collaboration.
- [initiatorNameComponents](swcollaborationmetadata/initiatornamecomponents.md): The name of the person who initiates the collaboration.
- [localIdentifier](swcollaborationmetadata/localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](swcollaborationmetadata/title.md): The title of the content.
- [userSelectedShareOptions](swcollaborationmetadata/userselectedshareoptions.md): The selected collaboration options from the person who sends the invitation.

### Initializers

- [init(coder:)](swcollaborationmetadata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)

# SWCollaborationMetadata (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A model object for conveying data during a collaboration.

## Declaration

```objectivec
@interface SWCollaborationMetadata : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)
- [Adding shared content collaboration to your app](../sharedwithyou/adding-shared-content-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

Use `SWCollaborationMetadata` to share content without using iCloud. The system wraps the metadata object in an [NSItemProvider](../foundation/nsitemprovider.md) object to implement a custom collaboration infrastructure.

If your app uses SwiftUI, `SWCollaborationMetadata` is compatible with the [Transferable](../coretransferable/transferable.md) protocol and the [ShareLink](https://developer.apple.com/documentation/swiftui/sharelink) view.

## Topics

### Creating collaboration metadata

- [initWithLocalIdentifier:](swcollaborationmetadata/init%28localidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified local identifier.
- [initWithCollaborationIdentifier:](swcollaborationmetadata/init%28collaborationidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified global identifier.

### Accessing metadata attributes

- [collaborationIdentifier](swcollaborationmetadata/collaborationidentifier.md): A globally unique identifier that the app hosting the collaboration provides.
- [defaultShareOptions](swcollaborationmetadata/defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](swcollaborationmetadata/initiatorhandle.md): The handle of the person who initiates the collaboration.
- [initiatorNameComponents](swcollaborationmetadata/initiatornamecomponents.md): The name of the person who initiates the collaboration.
- [localIdentifier](swcollaborationmetadata/localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](swcollaborationmetadata/title.md): The title of the content.
- [userSelectedShareOptions](swcollaborationmetadata/userselectedshareoptions.md): The selected collaboration options from the person who sends the invitation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)
