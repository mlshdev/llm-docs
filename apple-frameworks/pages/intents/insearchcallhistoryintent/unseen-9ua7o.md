> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insearchcallhistoryintent/unseen-9ua7o

# unseen

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 11.0+ (deprecated in 15.0) · watchOS 4.0+ (deprecated in 8.0)

A Boolean value that indicates whether the user has seen the call yet.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var unseen: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

## See Also

### Getting the Call History Details

- [dateCreated](datecreated.md): Deprecated. The range of dates associated with the call records.
- [callTypes](calltypes.md): Deprecated. The types of calls to search.
- [callType](calltype.md): Deprecated. The call type.
- [callCapabilities](callcapabilities.md): Deprecated. The audio-video capabilities of the call.
