> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/contactresolver](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/contactresolver)

# contactResolver

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A custom type you use to identify the owner of your app’s data.

## Declaration

```swift
var contactResolver: (any ContactResolver)?
```

<a id="discussion"></a>

## Discussion

Use this property to provide additional context about the person using your app. The model uses this information to help resolve first-person pronouns in prompts that indicate ownership of a particular data item. Provide any information about the person that makes sense for your app. For example, a communications app might include the person’s name and the phone number or email associated with their account.

For information about how to create a contact resolver, see [Making your indexed content available to Foundation Models](../../making-your-indexed-content-available-to-foundation-models.md).
