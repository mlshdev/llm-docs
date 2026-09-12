> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackperformer](https://developer.apple.com/documentation/appkit/nshapticfeedbackperformer)

# NSHapticFeedbackPerformer (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods and constants that a haptic feedback performer implements.

## Declaration

```swift
protocol NSHapticFeedbackPerformer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To retrieve a haptic feedback performer object based on the current input device, accessibility settings, and user preferences, call the [defaultPerformer](nshapticfeedbackmanager/defaultperformer.md) method of the [NSHapticFeedbackManager](nshapticfeedbackmanager.md) class.

To provide the user with haptic feedback while using a Force Touch trackpad, call the [perform(\_:performanceTime:)](nshapticfeedbackperformer/perform%28__performancetime_%29.md) method of this protocol.

> **Important**

>  Haptic feedback is intended to be provided in response to a user action, such as aligning one object to another. Do not use it to provide feedback for events that are not user initiated. Excessive or unnecessary haptic feedback could be interpreted by the user as a malfunction and could encourage the user to disable haptic feedback entirely.

## Topics

### Performing Haptic Feedback

- [perform(\_:performanceTime:)](nshapticfeedbackperformer/perform%28__performancetime_%29.md): Initiates a specific pattern of haptic feedback to the user.

### Constants

- [NSHapticFeedbackManager.FeedbackPattern](nshapticfeedbackmanager/feedbackpattern.md): A pattern of haptic feedback to be provided to the user.
- [NSHapticFeedbackManager.PerformanceTime](nshapticfeedbackmanager/performancetime.md): A time at which to provide haptic feedback to the user.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Haptics

- [NSHapticFeedbackManager](nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
- [NSAlignmentFeedbackToken](nsalignmentfeedbacktoken.md)
- [NSAlignmentFeedbackFilter](nsalignmentfeedbackfilter.md): An object that can filter the movement of an object and provides haptic feedback when alignment occurs.

# NSHapticFeedbackPerformer (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods and constants that a haptic feedback performer implements.

## Declaration

```objectivec
@protocol NSHapticFeedbackPerformer <NSObject>
```

<a id="overview"></a>

## Overview

To retrieve a haptic feedback performer object based on the current input device, accessibility settings, and user preferences, call the [defaultPerformer](nshapticfeedbackmanager/defaultperformer.md) method of the [NSHapticFeedbackManager](nshapticfeedbackmanager.md) class.

To provide the user with haptic feedback while using a Force Touch trackpad, call the [performFeedbackPattern:performanceTime:](nshapticfeedbackperformer/perform%28__performancetime_%29.md) method of this protocol.

> **Important**

>  Haptic feedback is intended to be provided in response to a user action, such as aligning one object to another. Do not use it to provide feedback for events that are not user initiated. Excessive or unnecessary haptic feedback could be interpreted by the user as a malfunction and could encourage the user to disable haptic feedback entirely.

## Topics

### Performing Haptic Feedback

- [performFeedbackPattern:performanceTime:](nshapticfeedbackperformer/perform%28__performancetime_%29.md): Initiates a specific pattern of haptic feedback to the user.

### Constants

- [NSHapticFeedbackPattern](nshapticfeedbackmanager/feedbackpattern.md): A pattern of haptic feedback to be provided to the user.
- [NSHapticFeedbackPerformanceTime](nshapticfeedbackmanager/performancetime.md): A time at which to provide haptic feedback to the user.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Haptics

- [NSHapticFeedbackManager](nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
- [NSAlignmentFeedbackToken](nsalignmentfeedbacktoken.md)
- [NSAlignmentFeedbackFilter](nsalignmentfeedbackfilter.md): An object that can filter the movement of an object and provides haptic feedback when alignment occurs.
