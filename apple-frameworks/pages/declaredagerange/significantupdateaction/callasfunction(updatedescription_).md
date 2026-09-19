> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/declaredagerange/significantupdateaction/callasfunction(updatedescription:)

# callAsFunction(updateDescription:)

**Framework:** Declared Age Range  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Shows the significant update acknowledgment interface.

## Declaration

```swift
func callAsFunction(updateDescription: String) async throws
```

## Parameters

- `updateDescription`: A clear description of what changed in your app and why acknowledgment is required.

<a id="Discussion"></a>

## Discussion

Call this method when you need to inform people about significant changes to your app that require their acknowledgment and consent before proceeding. For a code example, refer to [showSignificantUpdateAcknowledgment](https://developer.apple.com/documentation/swiftui/environmentvalues/showsignificantupdateacknowledgment).

> **Throws**

>  An error if the request fails.
