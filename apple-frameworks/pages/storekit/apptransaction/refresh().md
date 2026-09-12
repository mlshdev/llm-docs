> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/refresh()](https://developer.apple.com/documentation/storekit/apptransaction/refresh())

# refresh()

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Gets the App Store-signed app transaction information from the App Store server.

## Declaration

```swift
static func refresh() async throws -> VerificationResult<AppTransaction>
```

<a id="return-value"></a>

## Return Value

Returns a [VerificationResult](../verificationresult.md) with a single [AppTransaction](../apptransaction.md).

<a id="Discussion"></a>

## Discussion

This method queries the App Store server to refresh the app transaction information. This method returns a [VerificationResult](../verificationresult.md) that contains the App Store-signed app transaction information for your app.

> **Important**

>  Calling [refresh()](refresh%28%29.md) displays a system prompt that asks users to authenticate with their App Store credentials. Call this function only in response to an explicit user action, like tapping or clicking a button.

Use this method to get an [AppTransaction](../apptransaction.md) in the following cases:

- The [shared](shared.md) property throws an error.
- The [shared](shared.md) property returns an unverified ([VerificationResult.unverified(\_:\_:)](../verificationresult/unverified%28____%29.md) ) result.

This method throws an error if the user cancels the authentication prompt, if there’s no network connectivity, or if the call fails to update the app transaction.
