> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintent/recipient](https://developer.apple.com/documentation/intents/insearchcallhistoryintent/recipient)

# recipient (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The person involved in the call.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var recipient: INPerson? { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the person with whom the call occurred. Use this property to limit your search only to records containing the specified person.

# recipient (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The person involved in the call.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * recipient;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * recipient;
```

<a id="Discussion"></a>

## Discussion

This property represents the person with whom the call occurred. Use this property to limit your search only to records containing the specified person.
