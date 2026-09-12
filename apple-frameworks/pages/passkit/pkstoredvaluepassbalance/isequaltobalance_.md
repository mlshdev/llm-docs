> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/isequaltobalance:](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/isequaltobalance:)

# isEqualToBalance:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean value that indicates whether two pass balance objects contain the same values.

## Declaration

```objectivec
- (BOOL) isEqualToBalance:(PKStoredValuePassBalance *) balance;
```

## Parameters

- `balance`: A pass balance object.

<a id="return-value"></a>

## Return Value

True when the two balance objects contain the same settings, false otherwise.
