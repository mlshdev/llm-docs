> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsfiletransfermetadata/disposition-swift.enum/attachment

# RCSFileTransferMetadata.Disposition.attachment

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The attachment disposition, directing the receiving app to not automatically render the file.

## Declaration

```swift
case attachment
```

<a id="discussion"></a>

## Discussion

The code that receives a file with this disposition needs to wait for another action by the person using the app before rendering or otherwise handling the file.

## See Also

### Working with dispositions

- [RCSFileTransferMetadata.Disposition.render](render.md): The render disposition, directing the receiving app to render the file automatically.
