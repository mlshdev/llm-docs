> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/appentityidentifier](https://developer.apple.com/documentation/foundation/nsuseractivity/appentityidentifier)

# appEntityIdentifier

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

The identifier of an app entity that you associate with the user activity.

## Declaration

```swift
var appEntityIdentifier: EntityIdentifier? { get set }
```

<a id="discussion"></a>

## Discussion

By associating an app entity with a user activity, you make the entity available to Siri and Apple Intelligence. To clear the association with the app entity, set `appEntityIdentifier` to `nil`.

For more information, refer to doc://com.apple.documentation/documentation/appintents/Making-onscreen-content-available-to-siri-and-apple-intelligence and [App Intents](../../appintents.md).

## See Also

### Specifying app identifiers

- [targetContentIdentifier](targetcontentidentifier.md): A string that identifies the user activity’s content.
- [externalMediaContentIdentifier](externalmediacontentidentifier.md): A unique identifier from the app’s media content catalog for the currently displayed media item.
