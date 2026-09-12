> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/timerate-swift.enum](https://developer.apple.com/documentation/storekittest/sktestsession/timerate-swift.enum)

# SKTestSession.TimeRate (Swift)

**Framework:** StoreKit Test  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The values for rates of time passing in the test environment.

## Declaration

```swift
enum TimeRate
```

<a id="overview"></a>

## Overview

The time rates that affect subscription renewals in the test environment match those in the sandbox environment with these exceptions:

- Only the test environment supports the [SKTestSession.TimeRate.monthlyRenewalEveryThirtySeconds](timerate-swift.enum/monthlyrenewaleverythirtyseconds.md) time rate.
- Only the test environment supports the fixed time rate options: [SKTestSession.TimeRate.oneRenewalEveryFifteenMinutes](timerate-swift.enum/onerenewaleveryfifteenminutes.md), [SKTestSession.TimeRate.oneRenewalEveryFiveMinutes](timerate-swift.enum/onerenewaleveryfiveminutes.md), [SKTestSession.TimeRate.oneRenewalEveryMinute](timerate-swift.enum/onerenewaleveryminute.md), [SKTestSession.TimeRate.oneRenewalEveryThirtySeconds](timerate-swift.enum/onerenewaleverythirtyseconds.md), [SKTestSession.TimeRate.oneRenewalEveryTenSeconds](timerate-swift.enum/onerenewaleverytenseconds.md), and [SKTestSession.TimeRate.oneRenewalEveryTwoSeconds](timerate-swift.enum/onerenewaleverytwoseconds.md).
- Only the sandbox environment supports a monthly renewal in 3 minutes.

For more information about time rates in the sandbox environment, see [Test in-app purchases](https://developer.apple.com/help/app-store-connect/test-in-app-purchases-main/test-in-app-purchases).

The time rates also affect the lengths of the billing retry period and the billing grace period in the testing environment. See the individual enumeration cases for the actual time values of the subscription renewal rates, billing retry periods, and billing grace periods.

## Topics

### Fixed time rates for subscription renewals

- [SKTestSession.TimeRate.oneRenewalEveryFifteenMinutes](timerate-swift.enum/onerenewaleveryfifteenminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 15 minutes.
- [SKTestSession.TimeRate.oneRenewalEveryFiveMinutes](timerate-swift.enum/onerenewaleveryfiveminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 5 minutes.
- [SKTestSession.TimeRate.oneRenewalEveryMinute](timerate-swift.enum/onerenewaleveryminute.md): A rate of time in the test environment in which subscriptions of any time length renew every minute.
- [SKTestSession.TimeRate.oneRenewalEveryThirtySeconds](timerate-swift.enum/onerenewaleverythirtyseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 30 seconds.
- [SKTestSession.TimeRate.oneRenewalEveryTenSeconds](timerate-swift.enum/onerenewaleverytenseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 10 seconds.
- [SKTestSession.TimeRate.oneRenewalEveryTwoSeconds](timerate-swift.enum/onerenewaleverytwoseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 2 seconds.

### Scaled time rates for subscription renewals

- [SKTestSession.TimeRate.realTime](timerate-swift.enum/realtime.md): A rate of time in which the test environment runs in real time.
- [SKTestSession.TimeRate.monthlyRenewalEveryHour](timerate-swift.enum/monthlyrenewaleveryhour.md): A rate of time in the test environment in which monthly subscriptions renew every hour.
- [SKTestSession.TimeRate.monthlyRenewalEveryThirtyMinutes](timerate-swift.enum/monthlyrenewaleverythirtyminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 30 minutes.
- [SKTestSession.TimeRate.monthlyRenewalEveryFifteenMinutes](timerate-swift.enum/monthlyrenewaleveryfifteenminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 15 minutes.
- [SKTestSession.TimeRate.monthlyRenewalEveryFiveMinutes](timerate-swift.enum/monthlyrenewaleveryfiveminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 5 minutes.
- [SKTestSession.TimeRate.monthlyRenewalEveryThirtySeconds](timerate-swift.enum/monthlyrenewaleverythirtyseconds.md): A rate of time in the test environment in which monthly subscriptions renew every 30 seconds.

### Deprecated

- [SKTestSession.TimeRate.oneHourIsOneDay](timerate-swift.enum/onehourisoneday.md): Deprecated. A rate of time in which 1 hour in the test environment represents one day.
- [SKTestSession.TimeRate.thirtyMinutesIsOneDay](timerate-swift.enum/thirtyminutesisoneday.md): Deprecated. A rate of time in which 30 minutes in the test environment represents one day.
- [SKTestSession.TimeRate.fiveMinutesIsOneDay](timerate-swift.enum/fiveminutesisoneday.md): Deprecated. A rate of time in which 5 minutes in the test environment represents one day.
- [SKTestSession.TimeRate.oneMinuteIsOneDay](timerate-swift.enum/oneminuteisoneday.md): Deprecated. A rate of time in which 1 minute in the test environment represents one day.
- [SKTestSession.TimeRate.thirtySecondsIsOneDay](timerate-swift.enum/thirtysecondsisoneday.md): Deprecated. A rate of time in which 30 seconds in the test environment represents one day.
- [SKTestSession.TimeRate.oneSecondIsOneDay](timerate-swift.enum/onesecondisoneday.md): Deprecated. A rate of time in which 1 second in the test environment represents one day.

### Initializers

- [init(rawValue:)](timerate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing subscription renewals

- [timeRate](timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [enableAutoRenewForTransaction(identifier:)](enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransaction(identifier:)](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscription(productIdentifier:)](forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscription(productIdentifier:)](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

# SKTestTimeRate (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The values for rates of time passing in the test environment.

## Declaration

```objectivec
enum SKTestTimeRate : NSInteger;
```

<a id="overview"></a>

## Overview

The time rates that affect subscription renewals in the test environment match those in the sandbox environment with these exceptions:

- Only the test environment supports the [SKTestTimeRateMonthlyRenewalEveryThirtySeconds](timerate-swift.enum/monthlyrenewaleverythirtyseconds.md) time rate.
- Only the test environment supports the fixed time rate options: [SKTestTimeRateOneRenewalEveryFifteenMinutes](timerate-swift.enum/onerenewaleveryfifteenminutes.md), [SKTestTimeRateOneRenewalEveryFiveMinutes](timerate-swift.enum/onerenewaleveryfiveminutes.md), [SKTestTimeRateOneRenewalEveryMinute](timerate-swift.enum/onerenewaleveryminute.md), [SKTestTimeRateOneRenewalEveryThirtySeconds](timerate-swift.enum/onerenewaleverythirtyseconds.md), [SKTestTimeRateOneRenewalEveryTenSeconds](timerate-swift.enum/onerenewaleverytenseconds.md), and [SKTestTimeRateOneRenewalEveryTwoSeconds](timerate-swift.enum/onerenewaleverytwoseconds.md).
- Only the sandbox environment supports a monthly renewal in 3 minutes.

For more information about time rates in the sandbox environment, see [Test in-app purchases](https://developer.apple.com/help/app-store-connect/test-in-app-purchases-main/test-in-app-purchases).

The time rates also affect the lengths of the billing retry period and the billing grace period in the testing environment. See the individual enumeration cases for the actual time values of the subscription renewal rates, billing retry periods, and billing grace periods.

## Topics

### Fixed time rates for subscription renewals

- [SKTestTimeRateOneRenewalEveryFifteenMinutes](timerate-swift.enum/onerenewaleveryfifteenminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 15 minutes.
- [SKTestTimeRateOneRenewalEveryFiveMinutes](timerate-swift.enum/onerenewaleveryfiveminutes.md): A rate of time in the test environment in which subscriptions of any time length renew every 5 minutes.
- [SKTestTimeRateOneRenewalEveryMinute](timerate-swift.enum/onerenewaleveryminute.md): A rate of time in the test environment in which subscriptions of any time length renew every minute.
- [SKTestTimeRateOneRenewalEveryThirtySeconds](timerate-swift.enum/onerenewaleverythirtyseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 30 seconds.
- [SKTestTimeRateOneRenewalEveryTenSeconds](timerate-swift.enum/onerenewaleverytenseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 10 seconds.
- [SKTestTimeRateOneRenewalEveryTwoSeconds](timerate-swift.enum/onerenewaleverytwoseconds.md): A rate of time in the test environment in which subscriptions of any time length renew every 2 seconds.

### Scaled time rates for subscription renewals

- [SKTestTimeRateRealTime](timerate-swift.enum/realtime.md): A rate of time in which the test environment runs in real time.
- [SKTestTimeRateMonthlyRenewalEveryHour](timerate-swift.enum/monthlyrenewaleveryhour.md): A rate of time in the test environment in which monthly subscriptions renew every hour.
- [SKTestTimeRateMonthlyRenewalEveryThirtyMinutes](timerate-swift.enum/monthlyrenewaleverythirtyminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 30 minutes.
- [SKTestTimeRateMonthlyRenewalEveryFifteenMinutes](timerate-swift.enum/monthlyrenewaleveryfifteenminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 15 minutes.
- [SKTestTimeRateMonthlyRenewalEveryFiveMinutes](timerate-swift.enum/monthlyrenewaleveryfiveminutes.md): A rate of time in the test environment in which monthly subscriptions renew every 5 minutes.
- [SKTestTimeRateMonthlyRenewalEveryThirtySeconds](timerate-swift.enum/monthlyrenewaleverythirtyseconds.md): A rate of time in the test environment in which monthly subscriptions renew every 30 seconds.

### Deprecated

- [SKTestTimeRateOneHourIsOneDay](timerate-swift.enum/onehourisoneday.md): Deprecated. A rate of time in which 1 hour in the test environment represents one day.
- [SKTestTimeRateThirtyMinutesIsOneDay](timerate-swift.enum/thirtyminutesisoneday.md): Deprecated. A rate of time in which 30 minutes in the test environment represents one day.
- [SKTestTimeRateFiveMinutesIsOneDay](timerate-swift.enum/fiveminutesisoneday.md): Deprecated. A rate of time in which 5 minutes in the test environment represents one day.
- [SKTestTimeRateOneMinuteIsOneDay](timerate-swift.enum/oneminuteisoneday.md): Deprecated. A rate of time in which 1 minute in the test environment represents one day.
- [SKTestTimeRateThirtySecondsIsOneDay](timerate-swift.enum/thirtysecondsisoneday.md): Deprecated. A rate of time in which 30 seconds in the test environment represents one day.
- [SKTestTimeRateOneSecondIsOneDay](timerate-swift.enum/onesecondisoneday.md): Deprecated. A rate of time in which 1 second in the test environment represents one day.

## See Also

### Testing subscription renewals

- [timeRate](timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [enableAutoRenewForTransactionWithIdentifier:error:](enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransactionWithIdentifier:error:](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscriptionWithProductIdentifier:error:](forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscriptionWithProductIdentifier:error:](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.
