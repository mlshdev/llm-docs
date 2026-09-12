> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfuniversallink](https://developer.apple.com/documentation/safariservices/sfuniversallink)

# SFUniversalLink (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that provides browsers with the ability to discover associations between an app and a website.

## Declaration

```swift
class SFUniversalLink
```

<a id="overview"></a>

## Overview

Universal links are a bridge between an app and a website that have related content, such as products or services. Typically, clicking a link in a browser takes a person to a website. However, the person may have an app that provides the same content and a better experience.

A web browser uses the `SFUniversalLink` class to discover such applications and provide the person with additional options for interaction beyond the default browser behavior.

In order to use universal links, you need to use the entitlement [com.apple.developer.associated-domains.applinks.read-write](../bundleresources/entitlements/com.apple.developer.associated-domains.applinks.read-write.md) with a value of `true`. Before you submit an app with the entitlement to the App Store, you need to get permission to use the entitlement. Request permission at [https://developer.apple.com/contact/request/browser-universal-links-request](https://developer.apple.com/contact/request/browser-universal-links-request).

## Topics

### Initializing a Link

- [init(webpageURL:)](sfuniversallink/init%28webpageurl_%29.md): Creates a universal link object with the URL.

### Configuring Universal Links

- [applicationURL](sfuniversallink/applicationurl.md): The URL to the app that can open this universal link.
- [isEnabled](sfuniversallink/isenabled.md): A flag that indicates whether the universal link is enabled.
- [webpageURL](sfuniversallink/webpageurl.md): The URL specified when initializing the receiver.

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

## See Also

### Associated domains

- [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains): Connect your app and a website to provide both a native app and a browser experience.
- [Associated Domains Entitlement](../bundleresources/entitlements/com.apple.developer.associated-domains.md): The associated domains for specific services, such as shared web credentials, universal links, and App Clips.

# SFUniversalLink (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that provides browsers with the ability to discover associations between an app and a website.

## Declaration

```objectivec
@interface SFUniversalLink : NSObject
```

<a id="overview"></a>

## Overview

Universal links are a bridge between an app and a website that have related content, such as products or services. Typically, clicking a link in a browser takes a person to a website. However, the person may have an app that provides the same content and a better experience.

A web browser uses the `SFUniversalLink` class to discover such applications and provide the person with additional options for interaction beyond the default browser behavior.

In order to use universal links, you need to use the entitlement [com.apple.developer.associated-domains.applinks.read-write](../bundleresources/entitlements/com.apple.developer.associated-domains.applinks.read-write.md) with a value of `true`. Before you submit an app with the entitlement to the App Store, you need to get permission to use the entitlement. Request permission at [https://developer.apple.com/contact/request/browser-universal-links-request](https://developer.apple.com/contact/request/browser-universal-links-request).

## Topics

### Initializing a Link

- [initWithWebpageURL:](sfuniversallink/init%28webpageurl_%29.md): Creates a universal link object with the URL.

### Configuring Universal Links

- [applicationURL](sfuniversallink/applicationurl.md): The URL to the app that can open this universal link.
- [enabled](sfuniversallink/isenabled.md): A flag that indicates whether the universal link is enabled.
- [webpageURL](sfuniversallink/webpageurl.md): The URL specified when initializing the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Associated domains

- [Associated Domains Entitlement](../bundleresources/entitlements/com.apple.developer.associated-domains.md): The associated domains for specific services, such as shared web credentials, universal links, and App Clips.
