> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/interruptedpurchasesenabled](https://developer.apple.com/documentation/storekittest/sktestsession/interruptedpurchasesenabled)

# interruptedPurchasesEnabled (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that determines whether the test environment simulates an interrupted purchase.

## Declaration

```swift
var interruptedPurchasesEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Enabling this property causes all purchases to fail until you disable it.

During testing, resolve the interrupted purchase by calling [resolveIssueForTransaction(identifier:)](resolveissuefortransaction%28identifier_%29.md) for the affected transaction.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState()](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Testing interrupted purchases

- [resolveIssueForTransaction(identifier:)](resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

# interruptedPurchasesEnabled (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that determines whether the test environment simulates an interrupted purchase.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL interruptedPurchasesEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Enabling this property causes all purchases to fail until you disable it.

During testing, resolve the interrupted purchase by calling [resolveIssueForTransactionWithIdentifier:error:](resolveissuefortransaction%28identifier_%29.md) for the affected transaction.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Testing interrupted purchases

- [resolveIssueForTransactionWithIdentifier:error:](resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.
