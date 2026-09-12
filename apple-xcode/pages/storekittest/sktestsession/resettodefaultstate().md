> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/resettodefaultstate()](https://developer.apple.com/documentation/storekittest/sktestsession/resettodefaultstate())

# resetToDefaultState() (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes all property overrides and resets all test session settings to their default state.

## Declaration

```swift
func resetToDefaultState()
```

<a id="discussion"></a>

## Discussion

During testing, your tests may override the property settings such as the [timeRate](timerate-swift.property.md), [askToBuyEnabled](asktobuyenabled.md), [interruptedPurchasesEnabled](interruptedpurchasesenabled.md), and [billingGracePeriodIsEnabled](billinggraceperiodisenabled.md). Call this method to revert all the property settings to the states defined in the StoreKit configuration file that you use to initialize this [SKTestSession](../sktestsession.md) instance.

See [clearTransactions()](cleartransactions%28%29.md) to remove all transactions from the testing environment.

## See Also

### Initializing test sessions

- [init(configurationFileNamed:)](init%28configurationfilenamed_%29.md): Initializes the test session with the provided configuration file that you include in your application’s bundle.
- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the test session with a configuration file you provide through a URL.

# resetToDefaultState (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes all property overrides and resets all test session settings to their default state.

## Declaration

```objectivec
- (void) resetToDefaultState;
```

<a id="discussion"></a>

## Discussion

During testing, your tests may override the property settings such as the [timeRate](timerate-swift.property.md), [askToBuyEnabled](asktobuyenabled.md), [interruptedPurchasesEnabled](interruptedpurchasesenabled.md), and [billingGracePeriodEnabled](billinggraceperiodisenabled.md). Call this method to revert all the property settings to the states defined in the StoreKit configuration file that you use to initialize this [SKTestSession](../sktestsession.md) instance.

See [clearTransactions](cleartransactions%28%29.md) to remove all transactions from the testing environment.

## See Also

### Initializing test sessions

- [initWithConfigurationFileNamed:error:](init%28configurationfilenamed_%29.md): Initializes the test session with the provided configuration file that you include in your application’s bundle.
- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Initializes the test session with a configuration file you provide through a URL.
