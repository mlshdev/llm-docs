> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmanager/donate(intent:)-57fg4](https://developer.apple.com/documentation/appintents/intentdonationmanager/donate(intent:)-57fg4)

# donate(intent:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Donates the specified app intent to the system synchronously.

## Declaration

```swift
@discardableResult func donate(intent: some AppIntent) -> IntentDonationIdentifier
```

## Parameters

- `intent`: An app intent for an action the person performed. Include enough information in the app intent for you to recreate the action later.

<a id="return-value"></a>

## Return Value

A unique identifier you can use to refer to the donation later. The method returns this value whether the donation succeeds or fails.

<a id="discussion"></a>

## Discussion

When someone completes an action in your app, call this method to donate a matching app intent. The system doesn’t run the app intent you provide, but uses the information to predict future actions. If an error occurs during the donation process, this method ignores the error.

## See Also

### Donating intents to the system

- [donate(intent:)](donate%28intent_%29-hly2.md): Donates the specified app intent to the system asynchronously.
- [donate(intent:result:)](donate%28intent_result_%29-1ltmi.md): Donates the specified app intent and result to the system asynchronously.
- [donate(intent:result:)](donate%28intent_result_%29-7ztce.md): Donates the specified app intent and result to the system synchronously.
