> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiopenurlcontext](https://developer.apple.com/documentation/uikit/uiopenurlcontext)

# UIOpenURLContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A system-provided object that contains the information you need to open a single URL.

## Declaration

```swift
@MainActor class UIOpenURLContext
```

<a id="overview"></a>

## Overview

UIKit provides a [UIOpenURLContext](uiopenurlcontext.md) object when your app receives a URL to open, such as in your implementation of [scene(\_:openURLContexts:)](uiscenedelegate/scene%28__openurlcontexts_%29.md). The object contains the URL itself and any options needed to handle the URL correctly. Don’t create [UIOpenURLContext](uiopenurlcontext.md) objects yourself.

## Topics

### Getting the URL

- [url](uiopenurlcontext/url.md): The URL to open.
- [options](uiopenurlcontext/options.md): Additional information for determining how to open the URL.
- [UIScene.OpenURLOptions](uiscene/openurloptions.md): Options that UIKit provides when asking your app to open a URL.

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

## See Also

### URL management

- [UIScene.OpenExternalURLOptions](uiscene/openexternalurloptions.md): Options you specify when asking a scene to open a URL.

# UIOpenURLContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A system-provided object that contains the information you need to open a single URL.

## Declaration

```objectivec
@interface UIOpenURLContext : NSObject
```

<a id="overview"></a>

## Overview

UIKit provides a [UIOpenURLContext](uiopenurlcontext.md) object when your app receives a URL to open, such as in your implementation of [scene:openURLContexts:](uiscenedelegate/scene%28__openurlcontexts_%29.md). The object contains the URL itself and any options needed to handle the URL correctly. Don’t create [UIOpenURLContext](uiopenurlcontext.md) objects yourself.

## Topics

### Getting the URL

- [URL](uiopenurlcontext/url.md): The URL to open.
- [options](uiopenurlcontext/options.md): Additional information for determining how to open the URL.
- [UISceneOpenURLOptions](uiscene/openurloptions.md): Options that UIKit provides when asking your app to open a URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### URL management

- [UISceneOpenExternalURLOptions](uiscene/openexternalurloptions.md): Options you specify when asking a scene to open a URL.
