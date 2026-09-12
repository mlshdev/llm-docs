> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips](https://developer.apple.com/documentation/tipkit/tips)

# Tips

**Framework:** TipKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

TipKit namespace.

## Declaration

```swift
@frozen enum Tips
```

<a id="Overview"></a>

## Overview

A collection of objects for controlling the display of your tips.

## Topics

### Configuration

- [configure(\_:)](tips/configure%28__%29.md): Loads and configures the persistent state of all tips in your app.
- [ConfigurationOption](tips/configurationoption.md): A type that marks an object as a tip configuration.

### Testing

- [showAllTipsForTesting()](tips/showalltipsfortesting%28%29.md): Show all tips regardless of their display rule eligibility or display frequency status for UI testing of tips.
- [showTipsForTesting(\_:)](tips/showtipsfortesting%28__%29.md): Show specified tips regardless of their display rule eligibility or display frequency status for UI testing of certain tips.
- [hideAllTipsForTesting()](tips/hidealltipsfortesting%28%29.md): Hide all tips regardless of their display rule eligibility for UI testing without tips.
- [hideTipsForTesting(\_:)](tips/hidetipsfortesting%28__%29.md): Hide specified tips regardless of their display rule eligibility for UI testing without certain tips.
- [resetDatastore()](tips/resetdatastore%28%29.md): Resets the tips’ datastore to the initial state for re-testing tip display rules and eligibility.

### Actions

- [Action](tips/action.md): A type that describes a control associated with a tip.

### Rules

- [Rule](tips/rule.md): A condition to meet before displaying a tip.

### Events

- [Event](tips/event.md): A repeatable user-defined action.
- [DonationTimeRange](tips/donationtimerange.md): A duration of time for filtering event donations.
- [DonationLimit](tips/donationlimit.md): Specify the maximum number of donations for an event.
- [EmptyDonation](tips/emptydonation.md): An empty event donation.

### Parameters

- [Parameter](tips/parameter.md): A type that monitors the state of its wrapped value to reevaluate any dependent tip rules when the value changes.
- [ParameterOption](tips/parameteroption.md): A type that represents the various customizations that you can make to a tip parameter.

### Options

- [IgnoresDisplayFrequency](tips/ignoresdisplayfrequency.md): Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayCount](tips/maxdisplaycount.md): Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](tips/maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.

### Status

- [Status](tips/status.md): A type that describes the current display eligibility status for a tip.
- [InvalidationReason](tips/invalidationreason.md): A type that describes why the system permanently invalidated a tip.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
