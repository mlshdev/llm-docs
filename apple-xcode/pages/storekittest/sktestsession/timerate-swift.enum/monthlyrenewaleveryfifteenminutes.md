> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/timerate-swift.enum/monthlyrenewaleveryfifteenminutes](https://developer.apple.com/documentation/storekittest/sktestsession/timerate-swift.enum/monthlyrenewaleveryfifteenminutes)

# SKTestSession.TimeRate.monthlyRenewalEveryFifteenMinutes (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.3+

A rate of time in the test environment in which monthly subscriptions renew every 15 minutes.

## Declaration

```swift
case monthlyRenewalEveryFifteenMinutes
```

<a id="discussion"></a>

## Discussion

The following table shows how this time rate affects subscriptions with various renewal periods in the testing environment:

| Subscription renewal period | Renewal time |
| --- | --- |
| Weekly | 5 minutes |
| Monthly | 15 minutes |
| Bimonthly | 30 minutes |
| Quarterly | 45 minutes |
| Semiannually | 1 hour 30 minutes |
| Annually | 3 hours |

The sandbox environment also supports this subscription renewal rate. For more information about renewal rates in the sandbox environment, see [Test in-app purchases](https://help.apple.com/app-store-connect/#/dev7e89e149d).

The time rate also affects the billing grace period and the billing retry period in the testing environment, as the table below shows:

| Type | Time period |
| --- | --- |
| Grace period for subscriptions with a weekly renewal period | 4 minutes 17 seconds |
| Grace period for subscriptions with all other renewal periods | 7 minutes 30 seconds |
| Billing retry period | 30 minutes |

## See Also

### Scaled time rates for subscription renewals

- [SKTestSession.TimeRate.realTime](realtime.md): A rate of time in which the test environment runs in real time.
- [SKTestSession.TimeRate.monthlyRenewalEveryHour](monthlyrenewaleveryhour.md): A rate of time in the test environment in which monthly subscriptions renew every hour.
- [SKTestSession.TimeRate.monthlyRenewalEveryThirtyMinutes](monthlyrenewaleverythirtyminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 30 minutes.
- [SKTestSession.TimeRate.monthlyRenewalEveryFiveMinutes](monthlyrenewaleveryfiveminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 5 minutes.
- [SKTestSession.TimeRate.monthlyRenewalEveryThirtySeconds](monthlyrenewaleverythirtyseconds.md): A rate of time in the test environment in which monthly subscriptions renew every 30 seconds.

# SKTestTimeRateMonthlyRenewalEveryFifteenMinutes (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.3+

A rate of time in the test environment in which monthly subscriptions renew every 15 minutes.

## Declaration

```objectivec
SKTestTimeRateMonthlyRenewalEveryFifteenMinutes
```

<a id="discussion"></a>

## Discussion

The following table shows how this time rate affects subscriptions with various renewal periods in the testing environment:

| Subscription renewal period | Renewal time |
| --- | --- |
| Weekly | 5 minutes |
| Monthly | 15 minutes |
| Bimonthly | 30 minutes |
| Quarterly | 45 minutes |
| Semiannually | 1 hour 30 minutes |
| Annually | 3 hours |

The sandbox environment also supports this subscription renewal rate. For more information about renewal rates in the sandbox environment, see [Test in-app purchases](https://help.apple.com/app-store-connect/#/dev7e89e149d).

The time rate also affects the billing grace period and the billing retry period in the testing environment, as the table below shows:

| Type | Time period |
| --- | --- |
| Grace period for subscriptions with a weekly renewal period | 4 minutes 17 seconds |
| Grace period for subscriptions with all other renewal periods | 7 minutes 30 seconds |
| Billing retry period | 30 minutes |

## See Also

### Scaled time rates for subscription renewals

- [SKTestTimeRateRealTime](realtime.md): A rate of time in which the test environment runs in real time.
- [SKTestTimeRateMonthlyRenewalEveryHour](monthlyrenewaleveryhour.md): A rate of time in the test environment in which monthly subscriptions renew every hour.
- [SKTestTimeRateMonthlyRenewalEveryThirtyMinutes](monthlyrenewaleverythirtyminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 30 minutes.
- [SKTestTimeRateMonthlyRenewalEveryFiveMinutes](monthlyrenewaleveryfiveminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 5 minutes.
- [SKTestTimeRateMonthlyRenewalEveryThirtySeconds](monthlyrenewaleverythirtyseconds.md): A rate of time in the test environment in which monthly subscriptions renew every 30 seconds.
