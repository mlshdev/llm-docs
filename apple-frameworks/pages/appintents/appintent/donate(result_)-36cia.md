> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/donate(result:)-36cia](https://developer.apple.com/documentation/appintents/appintent/donate(result:)-36cia)

# donate(result:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Donates the app intent and a result to the system asynchronously.

## Declaration

```swift
@discardableResult func donate(result: some IntentResult) async throws -> IntentDonationIdentifier
```

## Parameters

- `result`: The effective result of the intent. Use this parameter to specify the result your intent would have returned. For example, if the action opened another item, include a result with a related [OpenIntent](../openintent.md) type.

<a id="return-value"></a>

## Return Value

An opaque identifier you can use to manage the donation later using an [IntentDonationManager](../intentdonationmanager.md) type.

<a id="discussion"></a>

## Discussion

When someone interacts with your app’s interface, create an app intent for the interaction and call this method. Use this method when the result of the intent is also relevant, such as when the result of the action triggers another app intent. Donating intents helps the system predict future actions and improve the overall system experience. Don’t donate app intents that the system creates and asks you to handle.

## See Also

### Donating the intent to the system

- [donate()](donate%28%29-1e60c.md): Donates the app intent to the system asynchronously.
- [donate()](donate%28%29-jp6k.md): Donates the app intent to the system.
- [donate(result:)](donate%28result_%29-9b25i.md): Donates the app intent and a result to the system asynchronously.
- [callAsFunction(donate:)](callasfunction%28donate_%29-3qvbt.md): Runs the intent’s action after resolving any parameters, returns the resulting value, and optionally donates the intent to the system.
- [callAsFunction(donate:)](callasfunction%28donate_%29-7v1om.md): Runs the intent’s action after resolving any parameters, and optionally donates the intent to the system.
