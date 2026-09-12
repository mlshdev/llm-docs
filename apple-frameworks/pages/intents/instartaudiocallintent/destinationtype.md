> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintent/destinationtype](https://developer.apple.com/documentation/intents/instartaudiocallintent/destinationtype)

# destinationType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

The type of call to place.

## Declaration

```swift
var destinationType: INCallDestinationType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to differentiate regular calls from specialized types of calls. For example, when the value of this property is [voicemailDestination](../incalldestinationtype/voicemaildestination.md), the user is attempting to connect to their voicemail messages.

## See Also

### Getting the Call Attributes

- [contacts](contacts.md): Deprecated. The users to call.

# destinationType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

The type of call to place.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallDestinationType destinationType;
```

```objectivec
@property (atomic, assign, readonly) INCallDestinationType destinationType;
```

<a id="Discussion"></a>

## Discussion

Use this property to differentiate regular calls from specialized types of calls. For example, when the value of this property is [INCallDestinationTypeVoicemailDestination](../incalldestinationtype/voicemaildestination.md), the user is attempting to connect to their voicemail messages.

## See Also

### Getting the Call Attributes

- [contacts](contacts.md): Deprecated. The users to call.
