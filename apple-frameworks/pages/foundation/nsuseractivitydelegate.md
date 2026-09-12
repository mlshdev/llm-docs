> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivitydelegate](https://developer.apple.com/documentation/foundation/nsuseractivitydelegate)

# NSUserActivityDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The interface through which a user activity instance notifies its delegate of updates.

## Declaration

```swift
protocol NSUserActivityDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An object conforming to the [NSUserActivityDelegate](nsuseractivitydelegate.md) protocol works with an [NSUserActivity](nsuseractivity.md) object, which encapsulates the state of a user activity in an application on a particular device and enables the same activity to be continued on another device. For example, a user browsing an article in Safari on a Mac can move to an iOS device where the same webpage automatically opens in Safari with the same scroll position.

The user activity delegate is responsible for updating the state of an activity and is also notified when an activity has been continued on another device. The user activity delegate is typically a top-level object in the app—such as a window, view controller, or the app delegate—that manages the activity’s interaction with the app.

## Topics

### Handling streams

- [userActivity(\_:didReceive:outputStream:)](nsuseractivitydelegate/useractivity%28__didreceive_outputstream_%29.md): Notifies the user activity delegate that an input and output streams are available to open.

### Managing activity continuation

- [userActivityWasContinued(\_:)](nsuseractivitydelegate/useractivitywascontinued%28__%29.md): Notifies the delegate that the user activity was continued on another device.
- [userActivityWillSave(\_:)](nsuseractivitydelegate/useractivitywillsave%28__%29.md): Notifies the delegate that the user activity will be saved to be continued or persisted.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Host App Interaction

- [NSUserActivity](nsuseractivity.md): A representation of the state of your app at a moment in time.

# NSUserActivityDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The interface through which a user activity instance notifies its delegate of updates.

## Declaration

```objectivec
@protocol NSUserActivityDelegate <NSObject>
```

<a id="overview"></a>

## Overview

An object conforming to the [NSUserActivityDelegate](nsuseractivitydelegate.md) protocol works with an [NSUserActivity](nsuseractivity.md) object, which encapsulates the state of a user activity in an application on a particular device and enables the same activity to be continued on another device. For example, a user browsing an article in Safari on a Mac can move to an iOS device where the same webpage automatically opens in Safari with the same scroll position.

The user activity delegate is responsible for updating the state of an activity and is also notified when an activity has been continued on another device. The user activity delegate is typically a top-level object in the app—such as a window, view controller, or the app delegate—that manages the activity’s interaction with the app.

## Topics

### Handling streams

- [userActivity:didReceiveInputStream:outputStream:](nsuseractivitydelegate/useractivity%28__didreceive_outputstream_%29.md): Notifies the user activity delegate that an input and output streams are available to open.

### Managing activity continuation

- [userActivityWasContinued:](nsuseractivitydelegate/useractivitywascontinued%28__%29.md): Notifies the delegate that the user activity was continued on another device.
- [userActivityWillSave:](nsuseractivitydelegate/useractivitywillsave%28__%29.md): Notifies the delegate that the user activity will be saved to be continued or persisted.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Host App Interaction

- [NSUserActivity](nsuseractivity.md): A representation of the state of your app at a moment in time.
