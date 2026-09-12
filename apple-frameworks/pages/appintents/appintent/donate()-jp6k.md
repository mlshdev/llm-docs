> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/donate()-jp6k](https://developer.apple.com/documentation/appintents/appintent/donate()-jp6k)

# donate()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Donates the app intent to the system.

## Declaration

```swift
@discardableResult func donate() -> IntentDonationIdentifier
```

<a id="return-value"></a>

## Return Value

An opaque identifier you can use to manage the donation later using an [IntentDonationManager](../intentdonationmanager.md) type.

<a id="discussion"></a>

## Discussion

When someone interacts with your app’s interface, create an app intent for the interaction and call this method. Donating intents helps the system predict future actions and improve the overall system experience. Don’t donate app intents that the system creates and asks you to handle.

Call this method to donate the intent synchronously, which you might do if you’re not using Swift concurrency. The system ignores any exceptions it encounters during the donation process.

## See Also

### Donating the intent to the system

- [donate()](donate%28%29-1e60c.md): Donates the app intent to the system asynchronously.
- [donate(result:)](donate%28result_%29-36cia.md): Donates the app intent and a result to the system asynchronously.
- [donate(result:)](donate%28result_%29-9b25i.md): Donates the app intent and a result to the system asynchronously.
- [callAsFunction(donate:)](callasfunction%28donate_%29-3qvbt.md): Runs the intent’s action after resolving any parameters, returns the resulting value, and optionally donates the intent to the system.
- [callAsFunction(donate:)](callasfunction%28donate_%29-7v1om.md): Runs the intent’s action after resolving any parameters, and optionally donates the intent to the system.
