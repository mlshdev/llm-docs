> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/issystemcollaborationsupportavailable](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/issystemcollaborationsupportavailable)

# isSystemCollaborationSupportAvailable (Swift)

**Framework:** Shared with You  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that represents full support for Messages collaboration features.

## Declaration

```swift
class var isSystemCollaborationSupportAvailable: Bool { get }
```

## See Also

### Retrieving collaboration highlights

- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-87lhr.md): Returns a collaboration highlight for a specified identifier string.
- [getCollaborationHighlight(for:completionHandler:)](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightFor(\_:completionHandler:)](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProof(for:using:completionHandler:)](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.

# systemCollaborationSupportAvailable (Objective-C)

**Framework:** Shared with You  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that represents full support for Messages collaboration features.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSystemCollaborationSupportAvailable) BOOL systemCollaborationSupportAvailable;
```

## See Also

### Retrieving collaboration highlights

- [collaborationHighlightForIdentifier:error:](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [getCollaborationHighlightForURL:completionHandler:](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightForURL:completionHandler:](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProofForCollaborationHighlight:usingData:completionHandler:](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.
