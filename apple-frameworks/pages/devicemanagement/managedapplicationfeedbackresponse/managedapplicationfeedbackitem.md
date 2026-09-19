> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/managedapplicationfeedbackresponse/managedapplicationfeedbackitem

# ManagedApplicationFeedbackResponse.ManagedApplicationFeedbackItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+

A dictionary that contains a managed app’s feedback item.

## Declaration

```
object ManagedApplicationFeedbackResponse.ManagedApplicationFeedbackItem
```

## Properties

- `Feedback` — `ManagedApplicationFeedbackResponse.ManagedApplicationFeedbackItem.Feedback`: The app’s feedback.
- `Identifier` — `string` (required): The app’s bundle identifier.

## Topics

### Objects

- [ManagedApplicationFeedbackResponse.ManagedApplicationFeedbackItem.Feedback](managedapplicationfeedbackitem/feedback-data.dictionary.md): A dictionary that contains a managed app’s feedback items.

## See Also

### Objects

- [ManagedApplicationFeedbackResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
