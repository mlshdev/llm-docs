> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption/displayfrequency(_:)](https://developer.apple.com/documentation/tipkit/tips/configurationoption/displayfrequency(_:))

# displayFrequency(\_:)

**Framework:** TipKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Customizes how often new tips are presented in your app after another tip has been displayed.

## Declaration

```swift
static func displayFrequency(_ displayFrequency: Tips.ConfigurationOption.DisplayFrequency) -> Tips.ConfigurationOption
```

<a id="Overview"></a>

## Overview

Use `displayFrequency` to control how often new tips are displayed. For example, if display frequency is set to `.daily` and your `FavoriteLandmarkTip` is displayed, no new tips will be shown for at least 24 hours.

Display frequency only applies to tips that have not appeared. Previously displayed tips will still appear if their display [rules](../../tip/rules.md) are satisfied.

Individual tips can override this behavior by specifying [IgnoresDisplayFrequency](../ignoresdisplayfrequency.md) in their [options](../../tip/options.md).

The default value for this option is [immediate](displayfrequency/immediate.md).

Display frequency can be set using [configure(\_:)](../configure%28__%29.md):

```swift
@main
struct SampleApp: App {
    init() {
        do {
            // Configure your tips with a daily display frequency.
            try Tips.configure([
                .displayFrequency(.daily)
            ])
        }
        catch {
            // Handle TipKit errors
            print("Error initializing TipKit \(error.localizedDescription)")
        }
    }
}
```

<a id="Display-Frequency-Values"></a>

### Display Frequency Values

- [immediate](displayfrequency/immediate.md): An immediate display frequency.
- [daily](displayfrequency/daily.md): A daily display frequency.
- [hourly](displayfrequency/hourly.md): A hourly display frequency.
- [weekly](displayfrequency/weekly.md): A weekly display frequency.
- [monthly](displayfrequency/monthly.md): A monthly display frequency.

## See Also

### Configuration

- [configure(\_:)](../configure%28__%29.md): Loads and configures the persistent state of all tips in your app.
- [cloudKitContainer(\_:)](cloudkitcontainer%28__%29.md): Sets the CloudKit container used for syncing tips.
- [datastoreLocation(\_:)](datastorelocation%28__%29.md): Specify a custom location for your tips datastore.
