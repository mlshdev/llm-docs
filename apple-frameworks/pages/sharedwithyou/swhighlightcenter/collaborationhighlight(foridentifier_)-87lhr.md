> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/collaborationhighlight(foridentifier:)-87lhr](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/collaborationhighlight(foridentifier:)-87lhr)

# collaborationHighlight(forIdentifier:)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

Returns a collaboration highlight for a specified identifier string.

## Declaration

```swift
func collaborationHighlight(forIdentifier: String) throws -> SWCollaborationHighlight
```

## Parameters

- `forIdentifier`: The unique identifier that the system uses to find the [SWCollaborationHighlight](../swcollaborationhighlight.md).

<a id="return-value"></a>

## Return Value

The `SWCollaborationHighlight` associated with the `identifier`.

## See Also

### Retrieving collaboration highlights

- [isSystemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-23ytv.md): Returns a collaboration highlight for a specified collaboration identifier.
- [getCollaborationHighlight(for:completionHandler:)](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightFor(\_:completionHandler:)](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProof(for:using:completionHandler:)](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.
