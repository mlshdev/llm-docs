> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/incallrecordfilter/init(participants:calltypes:callcapability:)

# init(participants:callTypes:callCapability:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a filtered call record with the details about a call.

## Declaration

```swift
init(participants: [INPerson]?, callTypes: INCallRecordTypeOptions = [], callCapability: INCallCapability)
```

## Parameters

- `participants`: The recipient of the user’s call request.
- `callTypes`: The various call options that the user can request.
- `callCapability`: An indicator of whether the call supports audio or video.

<a id="return-value"></a>

## Return Value

An initialized [INCallRecordFilter](../incallrecordfilter.md) object or `nil` if the object could not be initialized.

# initWithParticipants:callTypes:callCapability: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a filtered call record with the details about a call.

## Declaration

```objectivec
- (instancetype) initWithParticipants:(NSArray<INPerson *> *) participants callTypes:(INCallRecordTypeOptions) callTypes callCapability:(INCallCapability) callCapability;
```

## Parameters

- `participants`: The recipient of the user’s call request.
- `callTypes`: The various call options that the user can request.
- `callCapability`: An indicator of whether the call supports audio or video.

<a id="return-value"></a>

## Return Value

An initialized [INCallRecordFilter](../incallrecordfilter.md) object or `nil` if the object could not be initialized.
