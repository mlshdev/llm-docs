> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lpmetadataprovider](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider)

# LPMetadataProvider (Swift)

**Framework:** Link Presentation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

An object that retrieves metadata for a URL.

## Declaration

```swift
class LPMetadataProvider
```

<a id="overview"></a>

## Overview

Use [LPMetadataProvider](lpmetadataprovider.md) to fetch metadata for a URL, including its title, icon, and image or video links. All properties on the resulting [LPLinkMetadata](lplinkmetadata.md) instance are optional.

> **Note**

> To enable macOS clients to fetch metadata for remote URLs, add the [com.apple.security.network.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.network.client) entitlement.

<a id="Fetch-link-metadata-from-a-URL"></a>

## Fetch link metadata from a URL

For each metadata request, create an instance of [LPMetadataProvider](lpmetadataprovider.md) and call [startFetchingMetadata(for:completionHandler:)](lpmetadataprovider/startfetchingmetadata%28for_completionhandler_%29-54z5i.md).

In the completion handler, check the error. If your user doesn’t have a network connection, the fetch can fail. If the server doesn’t respond or is too slow, the fetch can time out. Alternatively, the app may cancel the request, or an unknown error may occur.

Otherwise, use the metadata however you want, for example, to populate the title for a table view cell.

```swift
let metadataProvider = LPMetadataProvider()
let url = URL(string: "https://www.apple.com/ipad")!

metadataProvider.startFetchingMetadata(for: url) { metadata, error in
    if error != nil {
        // The fetch failed; handle the error.
        return
    }

    // Make use of fetched metadata.
}
```

For more information about handling errors, see [LPError](lperror.md).

## Topics

### Fetching metadata

- [startFetchingMetadata(for:completionHandler:)](lpmetadataprovider/startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [cancel()](lpmetadataprovider/cancel%28%29.md): Cancels a metadata request.
- [shouldFetchSubresources](lpmetadataprovider/shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
- [timeout](lpmetadataprovider/timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.

### Instance Methods

- [startFetchingMetadata(for:completionHandler:)](lpmetadataprovider/startfetchingmetadata%28for_completionhandler_%29-9e6s8.md): Fetches metadata for the given `NSURLRequest`.

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

## See Also

### Link metadata

- [LPLinkMetadata](lplinkmetadata.md): An object that contains metadata about a URL.

# LPMetadataProvider (Objective-C)

**Framework:** Link Presentation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

An object that retrieves metadata for a URL.

## Declaration

```objectivec
@interface LPMetadataProvider : NSObject
```

<a id="overview"></a>

## Overview

Use [LPMetadataProvider](lpmetadataprovider.md) to fetch metadata for a URL, including its title, icon, and image or video links. All properties on the resulting [LPLinkMetadata](lplinkmetadata.md) instance are optional.

> **Note**

> To enable macOS clients to fetch metadata for remote URLs, add the [com.apple.security.network.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.network.client) entitlement.

<a id="Fetch-link-metadata-from-a-URL"></a>

## Fetch link metadata from a URL

For each metadata request, create an instance of [LPMetadataProvider](lpmetadataprovider.md) and call [startFetchingMetadataForURL:completionHandler:](lpmetadataprovider/startfetchingmetadata%28for_completionhandler_%29-54z5i.md).

In the completion handler, check the error. If your user doesn’t have a network connection, the fetch can fail. If the server doesn’t respond or is too slow, the fetch can time out. Alternatively, the app may cancel the request, or an unknown error may occur.

Otherwise, use the metadata however you want, for example, to populate the title for a table view cell.

```swift
let metadataProvider = LPMetadataProvider()
let url = URL(string: "https://www.apple.com/ipad")!

metadataProvider.startFetchingMetadata(for: url) { metadata, error in
    if error != nil {
        // The fetch failed; handle the error.
        return
    }

    // Make use of fetched metadata.
}
```

For more information about handling errors, see [LPError](lperror.md).

## Topics

### Fetching metadata

- [startFetchingMetadataForURL:completionHandler:](lpmetadataprovider/startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [cancel](lpmetadataprovider/cancel%28%29.md): Cancels a metadata request.
- [shouldFetchSubresources](lpmetadataprovider/shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
- [timeout](lpmetadataprovider/timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.

### Instance Methods

- [startFetchingMetadataForRequest:completionHandler:](lpmetadataprovider/startfetchingmetadata%28for_completionhandler_%29-9e6s8.md): Fetches metadata for the given `NSURLRequest`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Link metadata

- [LPLinkMetadata](lplinkmetadata.md): An object that contains metadata about a URL.
