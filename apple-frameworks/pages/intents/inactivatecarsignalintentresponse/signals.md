> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponse/signals](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponse/signals)

# signals (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The type of signal produced (audible or visual).

## Declaration

```swift
var signals: INCarSignalOptions { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, you assign a value to this property only after handling the intent.

# signals (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The type of signal produced (audible or visual).

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INCarSignalOptions signals;
```

```objectivec
@property (atomic, assign, readwrite) INCarSignalOptions signals;
```

<a id="Discussion"></a>

## Discussion

Typically, you assign a value to this property only after handling the intent.
