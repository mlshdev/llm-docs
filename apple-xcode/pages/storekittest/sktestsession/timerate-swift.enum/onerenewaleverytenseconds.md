> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/timerate-swift.enum/onerenewaleverytenseconds](https://developer.apple.com/documentation/storekittest/sktestsession/timerate-swift.enum/onerenewaleverytenseconds)

# SKTestSession.TimeRate.oneRenewalEveryTenSeconds (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A rate of time in the test environment in which subscriptions of any time length renew every 10 seconds.

## Declaration

```swift
case oneRenewalEveryTenSeconds
```

<a id="discussion"></a>

## Discussion

This time rate renews subscriptions every ten seconds in the testing environment, regardless of actual renewal periods for each subscription.

The sandbox environment does not support this subscription renewal rate.

This time rate also affects the billing grace period and the billing retry period in the testing environment, as the table below shows:

| Type | Time Period |
| --- | --- |
| Grace period for subscriptions with all renewal periods | 10 seconds |
| Billing retry period | 20 seconds |

## See Also

### Fixed time rates for subscription renewals

- [SKTestSession.TimeRate.oneRenewalEveryFifteenMinutes](onerenewaleveryfifteenminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 15 minutes.
- [SKTestSession.TimeRate.oneRenewalEveryFiveMinutes](onerenewaleveryfiveminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 5 minutes.
- [SKTestSession.TimeRate.oneRenewalEveryMinute](onerenewaleveryminute.md): A rate of time in the test environment in which subscriptions of any time length renew every minute.
- [SKTestSession.TimeRate.oneRenewalEveryThirtySeconds](onerenewaleverythirtyseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 30 seconds.
- [SKTestSession.TimeRate.oneRenewalEveryTwoSeconds](onerenewaleverytwoseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 2 seconds.

# SKTestTimeRateOneRenewalEveryTenSeconds (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A rate of time in the test environment in which subscriptions of any time length renew every 10 seconds.

## Declaration

```objectivec
SKTestTimeRateOneRenewalEveryTenSeconds
```

<a id="discussion"></a>

## Discussion

This time rate renews subscriptions every ten seconds in the testing environment, regardless of actual renewal periods for each subscription.

The sandbox environment does not support this subscription renewal rate.

This time rate also affects the billing grace period and the billing retry period in the testing environment, as the table below shows:

| Type | Time Period |
| --- | --- |
| Grace period for subscriptions with all renewal periods | 10 seconds |
| Billing retry period | 20 seconds |

## See Also

### Fixed time rates for subscription renewals

- [SKTestTimeRateOneRenewalEveryFifteenMinutes](onerenewaleveryfifteenminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 15 minutes.
- [SKTestTimeRateOneRenewalEveryFiveMinutes](onerenewaleveryfiveminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 5 minutes.
- [SKTestTimeRateOneRenewalEveryMinute](onerenewaleveryminute.md): A rate of time in the test environment in which subscriptions of any time length renew every minute.
- [SKTestTimeRateOneRenewalEveryThirtySeconds](onerenewaleverythirtyseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 30 seconds.
- [SKTestTimeRateOneRenewalEveryTwoSeconds](onerenewaleverytwoseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 2 seconds.
