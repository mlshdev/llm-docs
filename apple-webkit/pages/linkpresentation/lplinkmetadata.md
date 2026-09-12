> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lplinkmetadata](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata)

# LPLinkMetadata (Swift)

**Framework:** Link Presentation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains metadata about a URL.

## Declaration

```swift
class LPLinkMetadata
```

<a id="overview"></a>

## Overview

Use [LPLinkMetadata](lplinkmetadata.md) to store the metadata about a URL, including its title, icon, images and video.

Fetch metadata using [LPMetadataProvider](lpmetadataprovider.md). For remote URLs, cache the metadata locally to avoid the data and performance cost of fetching it from the internet every time you present it. [LPLinkMetadata](lplinkmetadata.md) is serializable with [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding).

For local file URLs, the [Quick Look Thumbnailing](https://developer.apple.com/documentation/quicklookthumbnailing) API retrieves a representative thumbnail for the file, if possible.

<a id="Provide-custom-metadata"></a>

## Provide custom metadata

Say your app already has a database of links, with titles and images that weren’t fetched by [LPMetadataProvider](lpmetadataprovider.md). You don’t have to fetch new metadata from the internet in order to accelerate the share sheet or to present a rich link. Instead, you can fill in the fields of [LPLinkMetadata](lplinkmetadata.md) yourself.

Create an [LPLinkMetadata](lplinkmetadata.md) object, and fill in at least the [originalURL](lplinkmetadata/originalurl.md) and [url](lplinkmetadata/url.md) fields, plus whatever additional information you have.

```swift
func activityViewControllerLinkMetadata(_: UIActivityViewController) -> LPLinkMetadata? {
    let metadata = LPLinkMetadata()
    metadata.originalURL = URL(string: "https://www.example.com/apple-pie")
    metadata.url = metadata.originalURL
    metadata.title = "The Greatest Apple Pie In The World"
    metadata.imageProvider = NSItemProvider.init(contentsOf:
        Bundle.main.url(forResource: "apple-pie", withExtension: "jpg"))
    return metadata
}
```

<a id="Accelerate-the-share-sheet-preview"></a>

## Accelerate the share sheet preview

For existing apps that share URLs, the share sheet automatically presents a preview of the link. The preview first shows a placeholder link icon alongside the base URL while fetching the link’s metadata over the network. The preview updates once the link’s icon and title become available.

If you already have an [LPLinkMetadata](lplinkmetadata.md) object for a URL, pass it to the share sheet to present the preview instantly, without fetching data over the network. In your implementation of [activityViewControllerLinkMetadata(\_:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontrollerlinkmetadata%28_:%29), return the metadata object.

```swift
func activityViewControllerLinkMetadata(_:
UIActivityViewController) -> LPLinkMetadata? {
    return self.metadata
}
```

If the user chooses to share to Messages, the same metadata passes directly through, providing a smooth and seamless experience with no unnecessary loading.

## Topics

### Identifying the link

- [url](lplinkmetadata/url.md): The URL that returned the metadata, taking server-side redirects into account.
- [originalURL](lplinkmetadata/originalurl.md): The original URL of the metadata request.

### Getting the link’s title

- [title](lplinkmetadata/title.md): A representative title for the URL.

### Getting the link’s images

- [iconProvider](lplinkmetadata/iconprovider.md): An object that retrieves data corresponding to a representative icon for the URL.
- [imageProvider](lplinkmetadata/imageprovider.md): An object that retrieves data corresponding to a representative image for the URL.

### Getting the link’s video

- [remoteVideoURL](lplinkmetadata/remotevideourl.md): A remote URL corresponding to a representative video for the URL.
- [videoProvider](lplinkmetadata/videoprovider.md): An object that retrieves data corresponding to a representative video for the URL.

### Initializers

- [init(coder:)](lplinkmetadata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Link metadata

- [LPMetadataProvider](lpmetadataprovider.md): An object that retrieves metadata for a URL.

# LPLinkMetadata (Objective-C)

**Framework:** Link Presentation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains metadata about a URL.

## Declaration

```objectivec
@interface LPLinkMetadata : NSObject
```

<a id="overview"></a>

## Overview

Use [LPLinkMetadata](lplinkmetadata.md) to store the metadata about a URL, including its title, icon, images and video.

Fetch metadata using [LPMetadataProvider](lpmetadataprovider.md). For remote URLs, cache the metadata locally to avoid the data and performance cost of fetching it from the internet every time you present it. [LPLinkMetadata](lplinkmetadata.md) is serializable with [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding).

For local file URLs, the [Quick Look Thumbnailing](https://developer.apple.com/documentation/quicklookthumbnailing) API retrieves a representative thumbnail for the file, if possible.

<a id="Provide-custom-metadata"></a>

## Provide custom metadata

Say your app already has a database of links, with titles and images that weren’t fetched by [LPMetadataProvider](lpmetadataprovider.md). You don’t have to fetch new metadata from the internet in order to accelerate the share sheet or to present a rich link. Instead, you can fill in the fields of [LPLinkMetadata](lplinkmetadata.md) yourself.

Create an [LPLinkMetadata](lplinkmetadata.md) object, and fill in at least the [originalURL](lplinkmetadata/originalurl.md) and [URL](lplinkmetadata/url.md) fields, plus whatever additional information you have.

```swift
func activityViewControllerLinkMetadata(_: UIActivityViewController) -> LPLinkMetadata? {
    let metadata = LPLinkMetadata()
    metadata.originalURL = URL(string: "https://www.example.com/apple-pie")
    metadata.url = metadata.originalURL
    metadata.title = "The Greatest Apple Pie In The World"
    metadata.imageProvider = NSItemProvider.init(contentsOf:
        Bundle.main.url(forResource: "apple-pie", withExtension: "jpg"))
    return metadata
}
```

<a id="Accelerate-the-share-sheet-preview"></a>

## Accelerate the share sheet preview

For existing apps that share URLs, the share sheet automatically presents a preview of the link. The preview first shows a placeholder link icon alongside the base URL while fetching the link’s metadata over the network. The preview updates once the link’s icon and title become available.

If you already have an [LPLinkMetadata](lplinkmetadata.md) object for a URL, pass it to the share sheet to present the preview instantly, without fetching data over the network. In your implementation of [activityViewControllerLinkMetadata:](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontrollerlinkmetadata%28_:%29), return the metadata object.

```swift
func activityViewControllerLinkMetadata(_:
UIActivityViewController) -> LPLinkMetadata? {
    return self.metadata
}
```

If the user chooses to share to Messages, the same metadata passes directly through, providing a smooth and seamless experience with no unnecessary loading.

## Topics

### Identifying the link

- [URL](lplinkmetadata/url.md): The URL that returned the metadata, taking server-side redirects into account.
- [originalURL](lplinkmetadata/originalurl.md): The original URL of the metadata request.

### Getting the link’s title

- [title](lplinkmetadata/title.md): A representative title for the URL.

### Getting the link’s images

- [iconProvider](lplinkmetadata/iconprovider.md): An object that retrieves data corresponding to a representative icon for the URL.
- [imageProvider](lplinkmetadata/imageprovider.md): An object that retrieves data corresponding to a representative image for the URL.

### Getting the link’s video

- [remoteVideoURL](lplinkmetadata/remotevideourl.md): A remote URL corresponding to a representative video for the URL.
- [videoProvider](lplinkmetadata/videoprovider.md): An object that retrieves data corresponding to a representative video for the URL.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Link metadata

- [LPMetadataProvider](lpmetadataprovider.md): An object that retrieves metadata for a URL.
