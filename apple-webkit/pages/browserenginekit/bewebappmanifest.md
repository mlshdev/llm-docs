> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebappmanifest](https://developer.apple.com/documentation/browserenginekit/bewebappmanifest)

# BEWebAppManifest (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · macOS · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

An object that represents a web app manifest.

## Declaration

```swift
class BEWebAppManifest
```

<a id="overview"></a>

## Overview

To add a web app or bookmark to someone’s Home Screen:

1. Create a [SFAddToHomeScreenActivityItem](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem) that represents the web app or bookmark.
2. A web app indicates its manifest using a `<link/>` element with the attribute `rel=manifest`; the `href` attribute is a URL that locates the manifest JSON. If the website offers a web app manifest, initialize a `BEWebAppManifest` with the contents of the web app’s manifest.
3. Create a [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller) with the `SFAddToHomeScreenActivityItem` you created in step 1 in its list of activity items.
4. Present the `UIActivityViewController`.
5. When someone selects the Add to Home Screen activity, the system calls the activity item’s [getWebAppManifest(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem/getwebappmanifest%28completionhandler:%29) method. Pass the web app manifest you created in step 2 to the completion handler in your implementation, or `nil` if the website doesn’t offer a web app manifest or you can’t fetch the manifest.

## Topics

### Creating a web app manifest

- [init(JSONData:manifestURL:)](bewebappmanifest/init%28jsondata_manifesturl_%29-4zjpz.md)
- [init(jsonData:manifestURL:)](bewebappmanifest/init%28jsondata_manifesturl_%29-3azfg.md): Returns nil if manifestURL is invalid or jsonData cannot be parsed.

### Getting manifest information

- [jsonData](bewebappmanifest/jsondata.md)
- [manifestURL](bewebappmanifest/manifesturl.md)

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

### Web content

- [View and input coordination](view-coordination.md): Display content in the browser’s UI that an extension renders.
- [Text interaction](text-interaction.md): Integrate your web browser engine asynchronously with the text system.

# BEWebAppManifest (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · macOS · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

An object that represents a web app manifest.

## Declaration

```objectivec
@interface BEWebAppManifest : NSObject
```

<a id="overview"></a>

## Overview

To add a web app or bookmark to someone’s Home Screen:

1. Create a [SFAddToHomeScreenActivityItem](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem) that represents the web app or bookmark.
2. A web app indicates its manifest using a `<link/>` element with the attribute `rel=manifest`; the `href` attribute is a URL that locates the manifest JSON. If the website offers a web app manifest, initialize a `BEWebAppManifest` with the contents of the web app’s manifest.
3. Create a [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller) with the `SFAddToHomeScreenActivityItem` you created in step 1 in its list of activity items.
4. Present the `UIActivityViewController`.
5. When someone selects the Add to Home Screen activity, the system calls the activity item’s [getWebAppManifestWithCompletionHandler:](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem/getwebappmanifest%28completionhandler:%29) method. Pass the web app manifest you created in step 2 to the completion handler in your implementation, or `nil` if the website doesn’t offer a web app manifest or you can’t fetch the manifest.

## Topics

### Creating a web app manifest

- [initWithJSONData:manifestURL:](bewebappmanifest/init%28jsondata_manifesturl_%29-3azfg.md): Returns nil if manifestURL is invalid or jsonData cannot be parsed.

### Getting manifest information

- [jsonData](bewebappmanifest/jsondata.md)
- [manifestURL](bewebappmanifest/manifesturl.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web content

- [View and input coordination](view-coordination.md): Display content in the browser’s UI that an extension renders.
- [Text interaction](text-interaction.md): Integrate your web browser engine asynchronously with the text system.
