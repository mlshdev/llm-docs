> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupcomingmediamanager](https://developer.apple.com/documentation/intents/inupcomingmediamanager)

# INUpcomingMediaManager (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The manager object you use to suggest media to the user.

## Declaration

```swift
class INUpcomingMediaManager
```

<a id="overview"></a>

## Overview

Use this class to provide Siri a list of media intents for content that the user hasn’t listened to or watched, but might be interested in. For example, a podcast app may provide the latest episodes of the podcast, or a video app may provide the most recent episodes of TV shows, or suggest new movies.

## Topics

### Getting the Upcoming-Media Manager

- [shared](inupcomingmediamanager/shared.md): The shared upcoming media manager.

### Suggesting Media Intent Shortcuts

- [setSuggestedMediaIntents(\_:)](inupcomingmediamanager/setsuggestedmediaintents%28__%29.md): Provides Siri with a list of media intents to suggest to the user.

### Setting Prediction Modes

- [setPredictionMode(\_:for:)](inupcomingmediamanager/setpredictionmode%28__for_%29.md): Suggests how Siri should predict media intent shortcuts.
- [INUpcomingMediaPredictionMode](inupcomingmediapredictionmode.md): Prediction modes for upcoming media intent shortcuts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# INUpcomingMediaManager (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The manager object you use to suggest media to the user.

## Declaration

```objectivec
@interface INUpcomingMediaManager : NSObject
```

<a id="overview"></a>

## Overview

Use this class to provide Siri a list of media intents for content that the user hasn’t listened to or watched, but might be interested in. For example, a podcast app may provide the latest episodes of the podcast, or a video app may provide the most recent episodes of TV shows, or suggest new movies.

## Topics

### Getting the Upcoming-Media Manager

- [sharedManager](inupcomingmediamanager/shared.md): The shared upcoming media manager.

### Suggesting Media Intent Shortcuts

- [setSuggestedMediaIntents:](inupcomingmediamanager/setsuggestedmediaintents%28__%29.md): Provides Siri with a list of media intents to suggest to the user.

### Setting Prediction Modes

- [setPredictionMode:forType:](inupcomingmediamanager/setpredictionmode%28__for_%29.md): Suggests how Siri should predict media intent shortcuts.
- [INUpcomingMediaPredictionMode](inupcomingmediapredictionmode.md): Prediction modes for upcoming media intent shortcuts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
