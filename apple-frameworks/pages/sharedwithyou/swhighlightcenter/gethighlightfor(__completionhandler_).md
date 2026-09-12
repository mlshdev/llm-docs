> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/gethighlightfor(_:completionhandler:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/gethighlightfor(_:completionhandler:))

# getHighlightFor(\_:completionHandler:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a highlight for a specified URL.

## Declaration

```swift
func getHighlightFor(_ URL: URL, completionHandler: @escaping @Sendable (SWHighlight?, (any Error)?) -> Void)
```

```swift
func highlight(for URL: URL) async throws -> SWHighlight
```

## Parameters

- `URL`: The URL that the system uses to find the [SWHighlight](../swhighlight.md).
- `completionHandler`: Returns the [SWHighlight](../swhighlight.md). The system invokes the completion handler on the main thread.

## See Also

### Retrieving collaboration highlights

- [isSystemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-87lhr.md): Returns a collaboration highlight for a specified identifier string.
- [getCollaborationHighlight(for:completionHandler:)](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getSignedIdentityProof(for:using:completionHandler:)](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.

# getHighlightForURL:completionHandler: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a highlight for a specified URL.

## Declaration

```objectivec
- (void) getHighlightForURL:(NSURL *) URL completionHandler:(void (^)(SWHighlight *highlight, NSError *fetchError)) completionHandler;
```

## Parameters

- `URL`: The URL that the system uses to find the [SWHighlight](../swhighlight.md).
- `completionHandler`: Returns the [SWHighlight](../swhighlight.md). The system invokes the completion handler on the main thread.

## See Also

### Retrieving collaboration highlights

- [systemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlightForIdentifier:error:](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [getCollaborationHighlightForURL:completionHandler:](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getSignedIdentityProofForCollaborationHighlight:usingData:completionHandler:](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.
