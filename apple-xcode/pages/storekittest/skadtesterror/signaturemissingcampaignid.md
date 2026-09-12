> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/signaturemissingcampaignid](https://developer.apple.com/documentation/storekittest/skadtesterror/signaturemissingcampaignid)

# signatureMissingCampaignId

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The signature is missing the campaign identifier, in the testing environment.

## Declaration

```swift
static var signatureMissingCampaignId: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

Be sure to include the campaign identifier when you create and validate an ad impression in the testing environment.

## See Also

### Getting Older Errors

- [invalidCampaignId](invalidcampaignid.md): The campaign ID isn’t an integer between one and one hundred.
- [conflictingSource](conflictingsource.md): This error code is unused.
