> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekittest/skadtesterror/invalidcampaignid

# invalidCampaignId

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The campaign ID isn’t an integer between one and one hundred.

## Declaration

```swift
static var invalidCampaignId: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

A campaign ID is an integer that is greater than or equal to one and less than or equal to one hundred.

## See Also

### Getting Older Errors

- [signatureMissingCampaignId](signaturemissingcampaignid.md): The signature is missing the campaign identifier, in the testing environment.
- [conflictingSource](conflictingsource.md): This error code is unused.
