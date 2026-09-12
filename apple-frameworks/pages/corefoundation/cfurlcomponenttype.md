> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcomponenttype](https://developer.apple.com/documentation/corefoundation/cfurlcomponenttype)

# CFURLComponentType (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types of components in a URL.

## Declaration

```swift
enum CFURLComponentType
```

<a id="overview"></a>

## Overview

These constants are used by the [CFURLGetByteRangeForComponent(\_:\_:\_:)](cfurlgetbyterangeforcomponent%28______%29.md) function.

## Topics

### Constants

- [CFURLComponentType.scheme](cfurlcomponenttype/scheme.md): The URL’s scheme.
- [CFURLComponentType.netLocation](cfurlcomponenttype/netlocation.md): The URL’s network location.
- [CFURLComponentType.path](cfurlcomponenttype/path.md): The URL’s path component.
- [CFURLComponentType.resourceSpecifier](cfurlcomponenttype/resourcespecifier.md): The URL’s resource specifier.
- [CFURLComponentType.user](cfurlcomponenttype/user.md): The URL’s user.
- [CFURLComponentType.password](cfurlcomponenttype/password.md): The user’s password.
- [CFURLComponentType.userInfo](cfurlcomponenttype/userinfo.md): The user’s information.
- [CFURLComponentType.host](cfurlcomponenttype/host.md): The URL’s host.
- [CFURLComponentType.port](cfurlcomponenttype/port.md): The URL’s port.
- [CFURLComponentType.parameterString](cfurlcomponenttype/parameterstring.md): The URL’s parameter string.
- [CFURLComponentType.query](cfurlcomponenttype/query.md): The URL’s query.
- [CFURLComponentType.fragment](cfurlcomponenttype/fragment.md): The URL’s fragment.

### Initializers

- [init(rawValue:)](cfurlcomponenttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Miscellaneous

- [CFURLPathStyle](cfurlpathstyle.md): Options you can use to determine how CFURL functions parse a file system path name.

# CFURLComponentType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types of components in a URL.

## Declaration

```objectivec
enum CFURLComponentType : CFIndex;
```

<a id="overview"></a>

## Overview

These constants are used by the [CFURLGetByteRangeForComponent](cfurlgetbyterangeforcomponent%28______%29.md) function.

## Topics

### Constants

- [kCFURLComponentScheme](cfurlcomponenttype/scheme.md): The URL’s scheme.
- [kCFURLComponentNetLocation](cfurlcomponenttype/netlocation.md): The URL’s network location.
- [kCFURLComponentPath](cfurlcomponenttype/path.md): The URL’s path component.
- [kCFURLComponentResourceSpecifier](cfurlcomponenttype/resourcespecifier.md): The URL’s resource specifier.
- [kCFURLComponentUser](cfurlcomponenttype/user.md): The URL’s user.
- [kCFURLComponentPassword](cfurlcomponenttype/password.md): The user’s password.
- [kCFURLComponentUserInfo](cfurlcomponenttype/userinfo.md): The user’s information.
- [kCFURLComponentHost](cfurlcomponenttype/host.md): The URL’s host.
- [kCFURLComponentPort](cfurlcomponenttype/port.md): The URL’s port.
- [kCFURLComponentParameterString](cfurlcomponenttype/parameterstring.md): The URL’s parameter string.
- [kCFURLComponentQuery](cfurlcomponenttype/query.md): The URL’s query.
- [kCFURLComponentFragment](cfurlcomponenttype/fragment.md): The URL’s fragment.

## See Also

### Miscellaneous

- [CFURLPathStyle](cfurlpathstyle.md): Options you can use to determine how CFURL functions parse a file system path name.
