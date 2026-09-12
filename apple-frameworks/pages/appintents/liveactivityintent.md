> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/liveactivityintent](https://developer.apple.com/documentation/appintents/liveactivityintent)

# LiveActivityIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

An intent that starts, pauses, or otherwise modifies a Live Activity when it runs.

## Declaration

```swift
protocol LiveActivityIntent : SystemIntent
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](configuring-the-runtime-behavior-of-your-app-intents.md)

<a id="overview"></a>

## Overview

To gain permission for starting Live Activities, conform to this protocol. In general, your app needs to be in the foreground to start a Live Activity. However, you can use a `LiveActivityIntent` and start the Live Activity in its [perform()](appintent/perform%28%29.md) method. When the system performs the intent, the system launches your app process without opening the app, performs the intent, and starts the Live Activity. For example, people might place a control in Control Center that performs a `LiveActivityIntent` and starts the activity without opening your app. For more information about app intents, refer to [App Intents](../appintents.md) and [Getting started with the App Intents framework](getting-started-with-the-app-intents-framework.md).

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Live Activities

- [Live Activities](../widgetkit/liveactivities-collection.md): Let people track updates from your app with Live Activities.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.
