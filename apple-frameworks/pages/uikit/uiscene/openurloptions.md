> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/openurloptions](https://developer.apple.com/documentation/uikit/uiscene/openurloptions)

# UIScene.OpenURLOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Options that UIKit provides when asking your app to open a URL.

## Declaration

```swift
@MainActor class OpenURLOptions
```

<a id="overview"></a>

## Overview

Don’t create a [UIScene.OpenURLOptions](openurloptions.md) object directly. UIKit creates one for you when your app receives a request to open a URL. Use the information in the object to determine how to respond to the URL.

## Topics

### Specifying the URL details

- [sourceApplication](openurloptions/sourceapplication.md): The bundle ID of the app that originated the request.
- [annotation](openurloptions/annotation.md): A property-list object that contains the annotation data provided by a document interaction controller.
- [eventAttribution](openurloptions/eventattribution.md): An event attribution associated with the URL to open.

### Specifying the behavior options

- [openInPlace](openurloptions/openinplace.md): A Boolean value that indicates whether you should open the URL at its current location instead of copying it to your app’s container.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting the URL

- [url](../uiopenurlcontext/url.md): The URL to open.
- [options](../uiopenurlcontext/options.md): Additional information for determining how to open the URL.

# UISceneOpenURLOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Options that UIKit provides when asking your app to open a URL.

## Declaration

```objectivec
@interface UISceneOpenURLOptions : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [UISceneOpenURLOptions](openurloptions.md) object directly. UIKit creates one for you when your app receives a request to open a URL. Use the information in the object to determine how to respond to the URL.

## Topics

### Specifying the URL details

- [sourceApplication](openurloptions/sourceapplication.md): The bundle ID of the app that originated the request.
- [annotation](openurloptions/annotation.md): A property-list object that contains the annotation data provided by a document interaction controller.
- [eventAttribution](openurloptions/eventattribution.md): An event attribution associated with the URL to open.

### Specifying the behavior options

- [openInPlace](openurloptions/openinplace.md): A Boolean value that indicates whether you should open the URL at its current location instead of copying it to your app’s container.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Getting the URL

- [URL](../uiopenurlcontext/url.md): The URL to open.
- [options](../uiopenurlcontext/options.md): Additional information for determining how to open the URL.
