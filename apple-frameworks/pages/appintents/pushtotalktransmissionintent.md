> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/pushtotalktransmissionintent](https://developer.apple.com/documentation/appintents/pushtotalktransmissionintent)

# PushToTalkTransmissionIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS

An intent that begins or ends an audio transmission with the Push to Talk framework.

## Declaration

```swift
protocol PushToTalkTransmissionIntent : SystemIntent
```

<a id="overview"></a>

## Overview

Create an app intent that confirms to this protocol to manually start or end an audio transmission that uses the Push to Talk framework. For additional information about transmitting audio with the Push to Talk framework, see [Push to Talk](https://developer.apple.com/documentation/pushtotalk).

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Communication actions

- [ProgressReportingIntent](progressreportingintent.md): An intent that reports progress to the system during its execution
- [ShowInAppSearchResultsIntent](showinappsearchresultsintent.md): An app intent that displays a set of search results in the app’s interface.
