> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlight](https://developer.apple.com/documentation/sharedwithyou/swhighlight)

# SWHighlight (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a universal link to share by any number of contacts in one or more conversations.

## Declaration

```swift
class SWHighlight
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)
- [Making your app content shareable](making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

The system doesn’t expose the identities of the contacts to the app. It tracks shared universal links for the current user and determines which links to elevate for consumption in an app. When the system deems a link to be useful, it surfaces that link to the hosting app in the form of an `SWHighlight` object.

## Topics

### Viewing highlight attributes

- [identifier](swhighlight/identifier.md): The unique identifier for the highlight.
- [url](swhighlight/url.md): The surfaced content URL for the highlight.

### Initializers

- [init(coder:)](swhighlight/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWCollaborationHighlight](swcollaborationhighlight.md)

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

### Highlights

- [SWHighlightCenter](swhighlightcenter.md): An object that contains a priority-ordered list of universal links to share with the current user.

# SWHighlight (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a universal link to share by any number of contacts in one or more conversations.

## Declaration

```objectivec
@interface SWHighlight : NSObject
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)
- [Making your app content shareable](making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

The system doesn’t expose the identities of the contacts to the app. It tracks shared universal links for the current user and determines which links to elevate for consumption in an app. When the system deems a link to be useful, it surfaces that link to the hosting app in the form of an `SWHighlight` object.

## Topics

### Viewing highlight attributes

- [identifier](swhighlight/identifier.md): The unique identifier for the highlight.
- [URL](swhighlight/url.md): The surfaced content URL for the highlight.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWCollaborationHighlight](swcollaborationhighlight.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Highlights

- [SWHighlightCenter](swhighlightcenter.md): An object that contains a priority-ordered list of universal links to share with the current user.
