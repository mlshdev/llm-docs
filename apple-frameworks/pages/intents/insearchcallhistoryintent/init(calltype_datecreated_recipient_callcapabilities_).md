> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent/init(calltype:datecreated:recipient:callcapabilities:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/init(calltype:datecreated:recipient:callcapabilities:))

# init(callType:dateCreated:recipient:callCapabilities:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Creates a search call history intent object with the specified search criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
convenience init(callType: INCallRecordType, dateCreated: INDateComponentsRange?, recipient: INPerson?, callCapabilities: INCallCapabilityOptions = [])
```

## Parameters

- `callType`: The type of call to search. Use this parameter to specify whether you want to search all calls or search only outgoing calls, missed calls, or received calls.
- `dateCreated`: The dates associated with the call records. Use this parameter to specify the range of dates to search.
- `recipient`: The person who received the call. Match the information in this parameter against the user’s contacts.
- `callCapabilities`: The audio-video capabilities of the call. Use this parameter to specify whether you want to search audio-only calls, video calls, or both. You can combine the constants of the [INCallCapabilityOptions](../incallcapabilityoptions.md) type as needed.

<a id="return-value"></a>

## Return Value

A new [INSearchCallHistoryIntent](../insearchcallhistoryintent.md) object.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to search their call history. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [init(dateCreated:recipient:callCapabilities:callTypes:unseen:)](init%28datecreated_recipient_callcapabilities_calltypes_unseen_%29.md): Deprecated. Creates a search call history intent object with the specified search criteria.
