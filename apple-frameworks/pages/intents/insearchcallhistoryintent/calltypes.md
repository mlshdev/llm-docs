> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent/calltypes](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/calltypes)

# callTypes (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The types of calls to search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var callTypes: INCallRecordTypeOptions { get }
```

## See Also

### Getting the Call History Details

- [dateCreated](datecreated.md): Deprecated. The range of dates associated with the call records.
- [callType](calltype.md): Deprecated. The call type.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](unseen-9ua7o.md): Deprecated. A Boolean value that indicates whether the user has seen the call yet.

# callTypes (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The types of calls to search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallRecordTypeOptions callTypes;
```

```objectivec
@property (atomic, assign, readonly) INCallRecordTypeOptions callTypes;
```

## See Also

### Getting the Call History Details

- [dateCreated](datecreated.md): Deprecated. The range of dates associated with the call records.
- [callType](calltype.md): Deprecated. The call type.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/unseen-1mohp): Deprecated. A Boolean value that indicates whether the user has seen the call yet.
