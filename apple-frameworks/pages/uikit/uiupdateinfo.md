> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo](https://developer.apple.com/documentation/uikit/uiupdateinfo)

# UIUpdateInfo (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that contains detailed information about the current UI update state.

## Declaration

```swift
@MainActor class UIUpdateInfo
```

<a id="overview"></a>

## Overview

During a UI update, this object provides details about the state of the update. When using a [UIUpdateLink](uiupdatelink.md), you can query this UI update information object to learn about the current UI update.

A UI update can service views on different displays simultaneously, which means these views can have a different [UIUpdateInfo](uiupdateinfo.md). Get the UI update information for a specific view using [current(for:)](uiupdateinfo/current%28for_%29-34zby.md) or a specific window using [current(for:)](uiupdateinfo/current%28for_%29-6y1z9.md). The UI update information can also change as the current UI update progresses through its phases.

## Topics

### Getting the current UI update information

- [current(for:)](uiupdateinfo/current%28for_%29-34zby.md): Returns an object that describes the current UI update state for the specified view.
- [current(for:)](uiupdateinfo/current%28for_%29-6y1z9.md): Returns an object that describes the current UI update state for the specified window.

### Getting information about timing

- [modelTime](uiupdateinfo/modeltime.md): The time interval that represents a reference point for the current time of the UI update.
- [completionDeadlineTime](uiupdateinfo/completiondeadlinetime.md): The time interval that represents the time by which an app needs to finish submitting changes to the render server.
- [estimatedPresentationTime](uiupdateinfo/estimatedpresentationtime.md): The time interval that represents an estimate for when current UI update changes become visible onscreen.

### Working with low-latency updates

- [isImmediatePresentationExpected](uiupdateinfo/isimmediatepresentationexpected.md): A Boolean value that indicates whether the system presents UI updates immediately upon completion.
- [isLowLatencyEventDispatchConfirmed](uiupdateinfo/islowlatencyeventdispatchconfirmed.md): A Boolean value that indicates whether the system runs low-latency phases for the UI update.
- [isPerformingLowLatencyPhases](uiupdateinfo/isperforminglowlatencyphases.md): A Boolean value that indicates whether the UI update is in the low-latency phases.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### UI updates

- [UIUpdateLink](uiupdatelink.md): An object you use to observe, participate in, and affect the UI update process.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.

# UIUpdateInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that contains detailed information about the current UI update state.

## Declaration

```objectivec
@interface UIUpdateInfo : NSObject
```

<a id="overview"></a>

## Overview

During a UI update, this object provides details about the state of the update. When using a [UIUpdateLink](uiupdatelink.md), you can query this UI update information object to learn about the current UI update.

A UI update can service views on different displays simultaneously, which means these views can have a different [UIUpdateInfo](uiupdateinfo.md). Get the UI update information for a specific view using [currentUpdateInfoForView:](uiupdateinfo/current%28for_%29-34zby.md) or a specific window using [currentUpdateInfoForWindowScene:](uiupdateinfo/current%28for_%29-6y1z9.md). The UI update information can also change as the current UI update progresses through its phases.

## Topics

### Getting the current UI update information

- [currentUpdateInfoForView:](uiupdateinfo/current%28for_%29-34zby.md): Returns an object that describes the current UI update state for the specified view.
- [currentUpdateInfoForWindowScene:](uiupdateinfo/current%28for_%29-6y1z9.md): Returns an object that describes the current UI update state for the specified window.

### Getting information about timing

- [modelTime](uiupdateinfo/modeltime.md): The time interval that represents a reference point for the current time of the UI update.
- [completionDeadlineTime](uiupdateinfo/completiondeadlinetime.md): The time interval that represents the time by which an app needs to finish submitting changes to the render server.
- [estimatedPresentationTime](uiupdateinfo/estimatedpresentationtime.md): The time interval that represents an estimate for when current UI update changes become visible onscreen.

### Working with low-latency updates

- [immediatePresentationExpected](uiupdateinfo/isimmediatepresentationexpected.md): A Boolean value that indicates whether the system presents UI updates immediately upon completion.
- [lowLatencyEventDispatchConfirmed](uiupdateinfo/islowlatencyeventdispatchconfirmed.md): A Boolean value that indicates whether the system runs low-latency phases for the UI update.
- [performingLowLatencyPhases](uiupdateinfo/isperforminglowlatencyphases.md): A Boolean value that indicates whether the UI update is in the low-latency phases.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### UI updates

- [UIUpdateLink](uiupdatelink.md): An object you use to observe, participate in, and affect the UI update process.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.
