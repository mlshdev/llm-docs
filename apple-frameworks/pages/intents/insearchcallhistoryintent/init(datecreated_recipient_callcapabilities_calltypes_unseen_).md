> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent/init(datecreated:recipient:callcapabilities:calltypes:unseen:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/init(datecreated:recipient:callcapabilities:calltypes:unseen:))

# init(dateCreated:recipient:callCapabilities:callTypes:unseen:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 11.0+ (deprecated in 15.0) · watchOS 4.0+ (deprecated in 8.0)

Creates a search call history intent object with the specified search criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc convenience init(dateCreated: INDateComponentsRange? = nil, recipient: INPerson? = nil, callCapabilities: INCallCapabilityOptions, callTypes: INCallRecordTypeOptions, unseen: Bool? = nil)
```

## Parameters

- `dateCreated`: The dates associated with the call records. Use this parameter to specify the range of dates to search.
- `recipient`: The person who received the call. Match the information in this parameter against the user’s contacts.
- `callCapabilities`: The audio-video capabilities of the call. Use this parameter to specify whether you want to search audio-only calls, video calls, or both. You can combine the constants of the [INCallCapabilityOptions](../incallcapabilityoptions.md) type as needed.
- `callTypes`: The types of calls to search. Use this parameter to specify whether you want to search all calls or search only outgoing calls, missed calls, or received calls.
- `unseen`: A Boolean indicating whether the call has seen the call yet.

<a id="return-value"></a>

## Return Value

A new [INSearchCallHistoryIntent](../insearchcallhistoryintent.md) object.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to search their call history. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [init(callType:dateCreated:recipient:callCapabilities:)](init%28calltype_datecreated_recipient_callcapabilities_%29.md): Deprecated. Creates a search call history intent object with the specified search criteria.
