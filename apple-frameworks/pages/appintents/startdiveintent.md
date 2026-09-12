> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/startdiveintent](https://developer.apple.com/documentation/appintents/startdiveintent)

# StartDiveIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** watchOS 9.0+

An App Intent that lets people start a dive session when they press the Action button on Apple Watch Ultra.

## Declaration

```swift
protocol StartDiveIntent : SystemIntent
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md)

<a id="overview"></a>

## Overview

To implement the start dive action, create a structure that adopts the `StartDiveIntent` protocol.

```swift
struct MyStartDiveIntent: StartDiveIntent {

    static var title: LocalizedStringResource = "Starting a dive session."

    func perform() async throws -> some IntentResult {
        logger.debug("*** Starting a dive session. ***")

        await DiveManager.shared.start()
        return .result(actionButtonIntent: StartDive())
    }
}
```

This intent needs a [title](appintent/title.md) property that provides a localized description of the action, and a [perform()](appintent/perform%28%29.md) method, which the system calls when it triggers the intent.

To read live depth, water pressure, and water temperature data, see [Accessing submersion data](../coremotion/accessing-submersion-data.md).

> **Important**

> Before you can access live dive data, your app needs to include an entitlement to access submersion data. For more information, see [Express interest in the Submerged Depth and Pressure API](https://developer.apple.com/contact/request/submerged-depth-pressure-api/).

For more information, see [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md).

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)
