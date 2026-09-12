> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter)

# SWHighlightCenter (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that contains a priority-ordered list of universal links to share with the current user.

## Declaration

```swift
class SWHighlightCenter
```

## Mentioned In

- [Adding custom collaboration to your app](adding-custom-collaboration-to-your-app.md)
- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)
- [Making your app content shareable](making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

The system determines which links it surfaces. The app is responsible for updating its UI to reflect the latest highlights list that the system provides.

## Topics

### Setting the delegate

- [delegate](swhighlightcenter/delegate.md): The delegate object for the highlight center.
- [SWHighlightCenterDelegate](swhighlightcenterdelegate.md): The protocol you use to notify the delegate when the list or rank order of surfaced highlights changes.

### Accessing highlights

- [highlights](swhighlightcenter/highlights.md): An array of shared highlights.
- [highlightCollectionTitle](swhighlightcenter/highlightcollectiontitle.md): A localized title to display with a collection of highlights.

### Retrieving collaboration highlights

- [isSystemCollaborationSupportAvailable](swhighlightcenter/issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlight(forIdentifier:)](swhighlightcenter/collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [collaborationHighlight(forIdentifier:)](swhighlightcenter/collaborationhighlight%28foridentifier_%29-87lhr.md): Returns a collaboration highlight for a specified identifier string.
- [getCollaborationHighlight(for:completionHandler:)](swhighlightcenter/getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightFor(\_:completionHandler:)](swhighlightcenter/gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProof(for:using:completionHandler:)](swhighlightcenter/getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.

### Posting highlight events

- [postNotice(for:)](swhighlightcenter/postnotice%28for_%29.md): Posts a specified event to the highlight center for display.
- [clearNotices(for:)](swhighlightcenter/clearnotices%28for_%29.md): Clears the notices for a specified collaboration highlight.

### Handling errors

- [SWHighlightCenterErrorCode](swhighlightcentererrorcode.md): The error codes for the highlight center.

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

### Highlights

- [SWHighlight](swhighlight.md): An object that represents a universal link to share by any number of contacts in one or more conversations.

# SWHighlightCenter (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that contains a priority-ordered list of universal links to share with the current user.

## Declaration

```objectivec
@interface SWHighlightCenter : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](adding-custom-collaboration-to-your-app.md)
- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)
- [Making your app content shareable](making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

The system determines which links it surfaces. The app is responsible for updating its UI to reflect the latest highlights list that the system provides.

## Topics

### Setting the delegate

- [delegate](swhighlightcenter/delegate.md): The delegate object for the highlight center.
- [SWHighlightCenterDelegate](swhighlightcenterdelegate.md): The protocol you use to notify the delegate when the list or rank order of surfaced highlights changes.

### Accessing highlights

- [highlights](swhighlightcenter/highlights.md): An array of shared highlights.
- [highlightCollectionTitle](swhighlightcenter/highlightcollectiontitle.md): A localized title to display with a collection of highlights.

### Retrieving collaboration highlights

- [systemCollaborationSupportAvailable](swhighlightcenter/issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlightForIdentifier:error:](swhighlightcenter/collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [getCollaborationHighlightForURL:completionHandler:](swhighlightcenter/getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightForURL:completionHandler:](swhighlightcenter/gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProofForCollaborationHighlight:usingData:completionHandler:](swhighlightcenter/getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.

### Posting highlight events

- [postNoticeForHighlightEvent:](swhighlightcenter/postnotice%28for_%29.md): Posts a specified event to the highlight center for display.
- [clearNoticesForHighlight:](swhighlightcenter/clearnotices%28for_%29.md): Clears the notices for a specified collaboration highlight.

### Handling errors

- [SWHighlightCenterErrorCode](swhighlightcentererrorcode.md): The error codes for the highlight center.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Highlights

- [SWHighlight](swhighlight.md): An object that represents a universal link to share by any number of contacts in one or more conversations.
