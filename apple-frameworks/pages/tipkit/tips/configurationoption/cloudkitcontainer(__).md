> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption/cloudkitcontainer(_:)](https://developer.apple.com/documentation/tipkit/tips/configurationoption/cloudkitcontainer(_:))

# cloudKitContainer(\_:)

**Framework:** TipKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the CloudKit container used for syncing tips.

## Declaration

```swift
static func cloudKitContainer(_ cloudKitContainer: Tips.ConfigurationOption.CloudKitContainer?) -> Tips.ConfigurationOption
```

## Parameters

- `cloudKitContainer`: The option to use for specifying TipKit’s CloudKit datastore. Use `nil` to disable CloudKit syncing.

<a id="Overview"></a>

## Overview

Use `cloudKitContainer` to sync TipKit’s datastore across devices.

In order to avoid record collisions between your app and TipKit, it is recommended that you use a separate container for syncing tips.

By default, TipKit’s datastore does not sync with CloudKit.

<a id="Discussion"></a>

## Discussion

Syncing TipKit’s datastore requires two separate capabilities in your app’s entitlements: the iCloud capability which lets you specify a CloudKit container, and the Background Modes capability, which lets your app receive remote notifications from CloudKit that contain information about new changes on the server.

![A screenshot of Xcode showing the entitlements for enabling TipKit's CloudKit syncing.](https://developer.apple.com/images/com.apple.TipKit/xcode_cloudkit_entitlements@2x.png)

```swift
@main
struct TipKitTrails: App {
    init() {
        do {
            // Sync the TipKit datastore using CloudKit.
            try Tips.configure([
                .cloudKitContainer(.named("iCloud.com.apple.TipKitTrails.tips"))
            ])
        }
        catch {
            // Handle TipKit errors
            print("Error initializing TipKit \(error.localizedDescription)")
        }
    }
}
```

<a id="CloudKit-Container-Values"></a>

### CloudKit Container Values

- [automatic](cloudkitcontainer/automatic.md): Syncs the TipKit datastore using the first container in your app’s entitlements with a “.tips” suffix or, if none is available, the primary container is used.
- [named(\_:)](cloudkitcontainer/named%28__%29.md): Syncs the TipKit datastore using the specified CloudKit container.

## See Also

### Configuration

- [configure(\_:)](../configure%28__%29.md): Loads and configures the persistent state of all tips in your app.
- [datastoreLocation(\_:)](datastorelocation%28__%29.md): Specify a custom location for your tips datastore.
- [displayFrequency(\_:)](displayfrequency%28__%29.md): Customizes how often new tips are presented in your app after another tip has been displayed.
