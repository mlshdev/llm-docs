> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/getcollaborationhighlight(for:completionhandler:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/getcollaborationhighlight(for:completionhandler:))

# getCollaborationHighlight(for:completionHandler:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Returns a collaboration highlight for a specified URL.

## Declaration

```swift
func getCollaborationHighlight(for URL: URL, completionHandler: @escaping @Sendable (SWCollaborationHighlight?, (any Error)?) -> Void)
```

```swift
func collaborationHighlight(for URL: URL) async throws -> SWCollaborationHighlight
```

## Parameters

- `URL`: The URL that the system uses to find the [SWCollaborationHighlight](../swcollaborationhighlight.md).
- `completionHandler`: Returns the [SWCollaborationHighlight](../swcollaborationhighlight.md). The system invokes the completion handler on the main thread.

## See Also

### Retrieving collaboration highlights

- [isSystemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-87lhr.md): Returns a collaboration highlight for a specified identifier string.
- [getHighlightFor(\_:completionHandler:)](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProof(for:using:completionHandler:)](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.

# getCollaborationHighlightForURL:completionHandler: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Returns a collaboration highlight for a specified URL.

## Declaration

```objectivec
- (void) getCollaborationHighlightForURL:(NSURL *) URL completionHandler:(void (^)(SWCollaborationHighlight *highlight, NSError *fetchError)) completionHandler;
```

## Parameters

- `URL`: The URL that the system uses to find the [SWCollaborationHighlight](../swcollaborationhighlight.md).
- `completionHandler`: Returns the [SWCollaborationHighlight](../swcollaborationhighlight.md). The system invokes the completion handler on the main thread.

## See Also

### Retrieving collaboration highlights

- [systemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlightForIdentifier:error:](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [getHighlightForURL:completionHandler:](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProofForCollaborationHighlight:usingData:completionHandler:](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.
