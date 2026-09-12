> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintent/signals](https://developer.apple.com/documentation/intents/inactivatecarsignalintent/signals)

# signals (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The set of signals to activate.

## Declaration

```swift
var signals: INCarSignalOptions { get }
```

<a id="Discussion"></a>

## Discussion

For a list of valid signals, see [INCarSignalOptions](../incarsignaloptions.md).

When this property contains a valid [INCarSignalOptions](../incarsignaloptions.md) set, activate only the specified audible or visual signals.

# signals (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The set of signals to activate.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCarSignalOptions signals;
```

```objectivec
@property (atomic, assign, readonly) INCarSignalOptions signals;
```

<a id="Discussion"></a>

## Discussion

For a list of valid signals, see [INCarSignalOptions](../incarsignaloptions.md).

When this property contains a valid [INCarSignalOptions](../incarsignaloptions.md) set, activate only the specified audible or visual signals.
