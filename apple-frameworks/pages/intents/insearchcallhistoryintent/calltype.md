> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent/calltype](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/calltype)

# callType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The call type.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var callType: INCallRecordType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit your search to the specified type of calls. If the value of this property is [INCallRecordType.unknown](../incallrecordtype/unknown.md), search all call types.

## See Also

### Getting the Call History Details

- [dateCreated](datecreated.md): Deprecated. The range of dates associated with the call records.
- [callTypes](calltypes.md): Deprecated. The types of calls to search.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](unseen-9ua7o.md): Deprecated. A Boolean value that indicates whether the user has seen the call yet.

# callType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The call type.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallRecordType callType;
```

```objectivec
@property (atomic, assign, readonly) INCallRecordType callType;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit your search to the specified type of calls. If the value of this property is [INCallRecordTypeUnknown](../incallrecordtype/unknown.md), search all call types.

## See Also

### Getting the Call History Details

- [dateCreated](datecreated.md): Deprecated. The range of dates associated with the call records.
- [callTypes](calltypes.md): Deprecated. The types of calls to search.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/unseen-1mohp): Deprecated. A Boolean value that indicates whether the user has seen the call yet.
