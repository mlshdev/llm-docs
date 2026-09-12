> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/linkmetadata](https://developer.apple.com/documentation/linkpresentation/linkmetadata)

# LinkMetadata

**Framework:** Link Presentation  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

A structure containing metadata about a URL.

## Declaration

```swift
nonisolated struct LinkMetadata
```

<a id="overview"></a>

## Overview

Use [LinkMetadata](linkmetadata.md) to store metadata about a URL, including its title, icon, images, and video.

Fetch metadata using [LPMetadataProvider](lpmetadataprovider.md). For remote URLs, cache the metadata locally to avoid the data and performance cost of fetching it from the internet every time you present it. [LinkMetadata](linkmetadata.md) is also serializable and conforms to `Codable`.

## Topics

### Structures

- [LinkMetadata.Attachment](linkmetadata/attachment.md): Describes a kind of attachment to the metadata.

### Initializers

- [init(\_:)](linkmetadata/init%28__%29.md): Creates a [LinkMetadata](linkmetadata.md) value from a [LPLinkMetadata](lplinkmetadata.md) instance.
- [init(fetching:timeout:includeSubresources:)](linkmetadata/init%28fetching_timeout_includesubresources_%29-69bj2.md): Creates a [LinkMetadata](linkmetadata.md) value from the specified properties by fetching the specified URL.
- [init(fetching:timeout:includeSubresources:)](linkmetadata/init%28fetching_timeout_includesubresources_%29-7rkd9.md): Creates a [LinkMetadata](linkmetadata.md) value from the specified properties by fetching the URL using the specified request.
- [init(url:)](linkmetadata/init%28url_%29.md): Creates a new [LinkMetadata](linkmetadata.md) value for the specified URL.

### Instance Properties

- [originalURL](linkmetadata/originalurl.md): The original URL of the metadata request.
- [remoteVideo](linkmetadata/remotevideo.md): A remote URL corresponding to a representative video for the URL
- [title](linkmetadata/title.md): A representative title for the URL.
- [url](linkmetadata/url.md): The URL that returned the metadata, taking server-side redirects into account.

### Instance Methods

- [containsMedia(\_:exportableAs:)](linkmetadata/containsmedia%28__exportableas_%29.md): Determines if a specific `Transferable` type can be loaded for an attachment in the metadata.
- [media(\_:as:)](linkmetadata/media%28__as_%29.md): Loads the media data of this metadata for an attachment as the specified Transferable type if possible.
- [setMedia(\_:for:)](linkmetadata/setmedia%28__for_%29.md): Sets the media data in the metadata for an attachment.

### Type Aliases

- [LinkMetadata.Specification](linkmetadata/specification.md)
- [LinkMetadata.UnwrappedType](linkmetadata/unwrappedtype.md)
- [LinkMetadata.ValueType](linkmetadata/valuetype.md)

### Type Properties

- [defaultResolverSpecification](linkmetadata/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](https://developer.apple.com/documentation/foundation/customlocalizedstringresourceconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](https://developer.apple.com/documentation/appintents/displayrepresentable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](https://developer.apple.com/documentation/appintents/instancedisplayrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [PersistentlyIdentifiable](https://developer.apple.com/documentation/appintents/persistentlyidentifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)
- [TypeDisplayRepresentable](https://developer.apple.com/documentation/appintents/typedisplayrepresentable)
