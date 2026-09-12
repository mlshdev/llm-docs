> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent](https://developer.apple.com/documentation/intents/insearchcallhistoryintent)

# INSearchCallHistoryIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request to list the calls matching the specified criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSearchCallHistoryIntent
```

<a id="overview"></a>

## Overview

SiriKit creates [INSearchCallHistoryIntent](insearchcallhistoryintent.md) objects when the user asks to see previous calls from their call history. This intent object contains the values for you to match when searching the user’s call history. Users can search for calls involving a specific person, calls that occurred on specific dates, or calls that are of a specific type such as missed calls. When performing the search, use only the parameters provided and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md) protocol. Your handler confirms the request and creates an [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md) object with the results of the search. For successful searches, Siri offers the user a way to launch your app and see the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(dateCreated:recipient:callCapabilities:callTypes:unseen:)](insearchcallhistoryintent/init%28datecreated_recipient_callcapabilities_calltypes_unseen_%29.md): Deprecated. Creates a search call history intent object with the specified search criteria.
- [init(callType:dateCreated:recipient:callCapabilities:)](insearchcallhistoryintent/init%28calltype_datecreated_recipient_callcapabilities_%29.md): Deprecated. Creates a search call history intent object with the specified search criteria.

### Getting the Recipient

- [recipient](insearchcallhistoryintent/recipient.md): Deprecated. The person involved in the call.

### Getting the Call History Details

- [dateCreated](insearchcallhistoryintent/datecreated.md): Deprecated. The range of dates associated with the call records.
- [callTypes](insearchcallhistoryintent/calltypes.md): Deprecated. The types of calls to search.
- [callType](insearchcallhistoryintent/calltype.md): Deprecated. The call type.
- [callCapabilities](insearchcallhistoryintent/callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](insearchcallhistoryintent/unseen-9ua7o.md): Deprecated. A Boolean value that indicates whether the user has seen the call yet.

### Initializers

- [init(call:dateCreated:recipient:callCapabilities:)](insearchcallhistoryintent/init%28call_datecreated_recipient_callcapabilities_%29.md): Deprecated.

### Default Implementations

- [INSearchCallHistoryIntent Implementations](insearchcallhistoryintent/insearchcallhistoryintent-implementations.md)

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Call History Search

- [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md): Deprecated. The handler interface for searching the user’s call history.
- [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md): Deprecated. Your app’s response to a search call history intent.

# INSearchCallHistoryIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request to list the calls matching the specified criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSearchCallHistoryIntent : INIntent
```

<a id="overview"></a>

## Overview

SiriKit creates [INSearchCallHistoryIntent](insearchcallhistoryintent.md) objects when the user asks to see previous calls from their call history. This intent object contains the values for you to match when searching the user’s call history. Users can search for calls involving a specific person, calls that occurred on specific dates, or calls that are of a specific type such as missed calls. When performing the search, use only the parameters provided and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md) protocol. Your handler confirms the request and creates an [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md) object with the results of the search. For successful searches, Siri offers the user a way to launch your app and see the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithDateCreated:recipient:callCapabilities:callTypes:unseen:](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/initwithdatecreated:recipient:callcapabilities:calltypes:unseen:): Deprecated. Initializes the search call history intent object with the specified search criteria.

### Getting the Recipient

- [recipient](insearchcallhistoryintent/recipient.md): Deprecated. The person involved in the call.

### Getting the Call History Details

- [dateCreated](insearchcallhistoryintent/datecreated.md): Deprecated. The range of dates associated with the call records.
- [callTypes](insearchcallhistoryintent/calltypes.md): Deprecated. The types of calls to search.
- [callType](insearchcallhistoryintent/calltype.md): Deprecated. The call type.
- [callCapabilities](insearchcallhistoryintent/callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/unseen-1mohp): Deprecated. A Boolean value that indicates whether the user has seen the call yet.

### Instance Methods

- [initWithCallType:dateCreated:recipient:callCapabilities:](insearchcallhistoryintent/init%28call_datecreated_recipient_callcapabilities_%29.md): Deprecated.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Call History Search

- [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md): Deprecated. The handler interface for searching the user’s call history.
- [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md): Deprecated. Your app’s response to a search call history intent.
