> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/collaborationhighlight(foridentifier:)-23ytv](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/collaborationhighlight(foridentifier:)-23ytv)

# collaborationHighlight(forIdentifier:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Returns a collaboration highlight for a specified collaboration identifier.

## Declaration

```swift
func collaborationHighlight(forIdentifier collaborationIdentifier: SWCollaborationIdentifier) throws -> SWCollaborationHighlight
```

## Parameters

- `collaborationIdentifier`: The unique identifier that the system uses to find the [SWCollaborationHighlight](../swcollaborationhighlight.md).

<a id="return-value"></a>

## Return Value

The `SWCollaborationHighlight` associated with the `identifier`.

## See Also

### Retrieving collaboration highlights

- [isSystemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [collaborationHighlight(forIdentifier:)](collaborationhighlight%28foridentifier_%29-87lhr.md): Returns a collaboration highlight for a specified identifier string.
- [getCollaborationHighlight(for:completionHandler:)](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightFor(\_:completionHandler:)](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProof(for:using:completionHandler:)](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.

# collaborationHighlightForIdentifier:error: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Returns a collaboration highlight for a specified collaboration identifier.

## Declaration

```objectivec
- (SWCollaborationHighlight *) collaborationHighlightForIdentifier:(SWCollaborationIdentifier) collaborationIdentifier error:(NSError **) error;
```

## Parameters

- `collaborationIdentifier`: The unique identifier that the system uses to find the [SWCollaborationHighlight](../swcollaborationhighlight.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The `SWCollaborationHighlight` associated with the `identifier`. On failure, this method returns `nil`.

## See Also

### Retrieving collaboration highlights

- [systemCollaborationSupportAvailable](issystemcollaborationsupportavailable.md): A Boolean value that represents full support for Messages collaboration features.
- [getCollaborationHighlightForURL:completionHandler:](getcollaborationhighlight%28for_completionhandler_%29.md): Returns a collaboration highlight for a specified URL.
- [getHighlightForURL:completionHandler:](gethighlightfor%28__completionhandler_%29.md): Returns a highlight for a specified URL.
- [getSignedIdentityProofForCollaborationHighlight:usingData:completionHandler:](getsignedidentityproof%28for_using_completionhandler_%29.md): Signs passed-in data with the local device’s private key.
