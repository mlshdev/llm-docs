> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslot/makesmartcard()](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot/makesmartcard())

# makeSmartCard() (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new [TKSmartCard](../tksmartcard.md) object representing the currently inserted Smart Card.

## Declaration

```swift
func makeSmartCard() -> TKSmartCard?
```

<a id="return-value"></a>

## Return Value

A new [TKSmartCard](../tksmartcard.md) object, or `nil` if no Smart Card is currently inserted.

<a id="Discussion"></a>

## Discussion

You can create multiple instances of `TKSmartCard` that represent the same Smart Card. Exclusivity of data transfer is handled by sessions on the individual `TKSmartCard` objects.

# makeSmartCard (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new [TKSmartCard](../tksmartcard.md) object representing the currently inserted Smart Card.

## Declaration

```objectivec
- (TKSmartCard *) makeSmartCard;
```

<a id="return-value"></a>

## Return Value

A new [TKSmartCard](../tksmartcard.md) object, or `nil` if no Smart Card is currently inserted.

<a id="Discussion"></a>

## Discussion

You can create multiple instances of `TKSmartCard` that represent the same Smart Card. Exclusivity of data transfer is handled by sessions on the individual `TKSmartCard` objects.
