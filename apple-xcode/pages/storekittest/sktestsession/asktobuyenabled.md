> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/asktobuyenabled](https://developer.apple.com/documentation/storekittest/sktestsession/asktobuyenabled)

# askToBuyEnabled (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that determines whether the testing environment simulates an Ask to Buy scenario.

## Declaration

```swift
var askToBuyEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Enabling this property causes all purchases to require approval until you disable it. To approve the purchase in the testing environment, call [approveAskToBuyTransaction(identifier:)](approveasktobuytransaction%28identifier_%29.md), and to decline it, call [declineAskToBuyTransaction(identifier:)](declineasktobuytransaction%28identifier_%29.md).

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState()](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Testing Ask To Buy transactions

- [approveAskToBuyTransaction(identifier:)](approveasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by approving the transaction.
- [declineAskToBuyTransaction(identifier:)](declineasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by declining the transaction.

# askToBuyEnabled (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that determines whether the testing environment simulates an Ask to Buy scenario.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL askToBuyEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Enabling this property causes all purchases to require approval until you disable it. To approve the purchase in the testing environment, call [approveAskToBuyTransactionWithIdentifier:error:](approveasktobuytransaction%28identifier_%29.md), and to decline it, call [declineAskToBuyTransactionWithIdentifier:error:](declineasktobuytransaction%28identifier_%29.md).

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Testing Ask To Buy transactions

- [approveAskToBuyTransactionWithIdentifier:error:](approveasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by approving the transaction.
- [declineAskToBuyTransactionWithIdentifier:error:](declineasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by declining the transaction.
