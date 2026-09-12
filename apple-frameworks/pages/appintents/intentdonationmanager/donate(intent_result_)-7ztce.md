> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmanager/donate(intent:result:)-7ztce](https://developer.apple.com/documentation/appintents/intentdonationmanager/donate(intent:result:)-7ztce)

# donate(intent:result:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Donates the specified app intent and result to the system synchronously.

## Declaration

```swift
@discardableResult func donate(intent: some AppIntent, result: some IntentResult) -> IntentDonationIdentifier
```

## Parameters

- `intent`: An app intent for an action your app performed. Put enough information into the app intent that your app can replicate the action later.
- `result`: A significant result to the action. For example, specify a result that triggers a follow-up app intent.

<a id="return-value"></a>

## Return Value

A unique identifier you can use to refer to the donation later. The method returns this value whether the donation succeeds or fails.

<a id="discussion"></a>

## Discussion

When someone completes an action in your app, call this method to donate a matching app intent and result. The system doesn’t run the app intent you provide, but uses the information to predict future actions. If an error occurs during the donation process, this method ignores the error.

## See Also

### Donating intents to the system

- [donate(intent:)](donate%28intent_%29-57fg4.md): Donates the specified app intent to the system synchronously.
- [donate(intent:)](donate%28intent_%29-hly2.md): Donates the specified app intent to the system asynchronously.
- [donate(intent:result:)](donate%28intent_result_%29-1ltmi.md): Donates the specified app intent and result to the system asynchronously.
