> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configure(_:)](https://developer.apple.com/documentation/tipkit/tips/configure(_:))

# configure(\_:)

**Framework:** TipKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Loads and configures the persistent state of all tips in your app.

## Declaration

```swift
static func configure(_ configuration: [Tips.ConfigurationOption] = []) throws
```

## Parameters

- `configuration`: An array of options for customizing your tip’s datastore location and default frequency control interval.

<a id="Discussion"></a>

## Discussion

> **Note**

> This function must be called before tips display in your app.

Call this function during app initialization. By default, all tips persist to a default location with a display frequency of [immediate](configurationoption/displayfrequency/immediate.md).

```swift
@main
struct SampleApp: App {
    init() {
        do {
            // Configure tips in the app.
            try Tips.configure()
        }
        catch {
            // Handle TipKit errors
            print("Error initializing TipKit \(error.localizedDescription)")
        }
    }
}
```

To change the default location of where your tips persist use the convenience method [datastoreLocation(\_:)](configurationoption/datastorelocation%28__%29.md).

To change the display frequency use the convenience method [displayFrequency(\_:)](configurationoption/displayfrequency%28__%29.md).

```swift
do {
    // Configure tips in the app.
    try Tips.configure([
        .datastoreLocation(.groupContainer(identifier: "MyGroupContainer")),
        .displayFrequency(.hourly)
    ])
}
catch {
    // Handle TipKit errors
    print("Error initializing TipKit \(error.localizedDescription)")
}
```

## See Also

### Configuration

- [cloudKitContainer(\_:)](configurationoption/cloudkitcontainer%28__%29.md): Sets the CloudKit container used for syncing tips.
- [datastoreLocation(\_:)](configurationoption/datastorelocation%28__%29.md): Specify a custom location for your tips datastore.
- [displayFrequency(\_:)](configurationoption/displayfrequency%28__%29.md): Customizes how often new tips are presented in your app after another tip has been displayed.
