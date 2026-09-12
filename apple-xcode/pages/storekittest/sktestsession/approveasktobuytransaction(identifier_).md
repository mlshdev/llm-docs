> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/approveasktobuytransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/approveasktobuytransaction(identifier:))

# approveAskToBuyTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Resolves an Ask to Buy test scenario by approving the transaction.

## Declaration

```swift
func approveAskToBuyTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the Ask to Buy transaction.

## See Also

### Testing Ask To Buy transactions

- [askToBuyEnabled](asktobuyenabled.md): A Boolean value that determines whether the testing environment simulates an Ask to Buy scenario.
- [declineAskToBuyTransaction(identifier:)](declineasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by declining the transaction.

# approveAskToBuyTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Resolves an Ask to Buy test scenario by approving the transaction.

## Declaration

```objectivec
- (BOOL) approveAskToBuyTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the Ask to Buy transaction.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing Ask To Buy transactions

- [askToBuyEnabled](asktobuyenabled.md): A Boolean value that determines whether the testing environment simulates an Ask to Buy scenario.
- [declineAskToBuyTransactionWithIdentifier:error:](declineasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by declining the transaction.
