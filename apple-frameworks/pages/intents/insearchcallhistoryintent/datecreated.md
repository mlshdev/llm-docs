> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent/datecreated](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/datecreated)

# dateCreated (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The range of dates associated with the call records.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var dateCreated: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit your search to calls that occurred within the specified range of dates. Include the start and end dates in your search.

## See Also

### Getting the Call History Details

- [callTypes](calltypes.md): Deprecated. The types of calls to search.
- [callType](calltype.md): Deprecated. The call type.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](unseen-9ua7o.md): Deprecated. A Boolean value that indicates whether the user has seen the call yet.

# dateCreated (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The range of dates associated with the call records.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * dateCreated;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * dateCreated;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit your search to calls that occurred within the specified range of dates. Include the start and end dates in your search.

## See Also

### Getting the Call History Details

- [callTypes](calltypes.md): Deprecated. The types of calls to search.
- [callType](calltype.md): Deprecated. The call type.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
- [unseen](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/unseen-1mohp): Deprecated. A Boolean value that indicates whether the user has seen the call yet.
