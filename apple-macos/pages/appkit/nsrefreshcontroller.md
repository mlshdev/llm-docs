> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrefreshcontroller](https://developer.apple.com/documentation/appkit/nsrefreshcontroller)

# NSRefreshController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A controller that provides pull-to-refresh functionality for scroll views.

## Declaration

```swift
@MainActor class NSRefreshController
```

<a id="overview"></a>

## Overview

`NSRefreshController` enables users to trigger refresh operations by pulling down on scrollable content. Add a refresh controller to an `NSScrollView` to provide this functionality. Configure the target and action to handle refresh events.

## Topics

### Instance Properties

- [action](nsrefreshcontroller/action.md): The action method to call when refresh is triggered.
- [attributedTitle](nsrefreshcontroller/attributedtitle.md): The styled text to display in the refresh controller.
- [isRefreshing](nsrefreshcontroller/isrefreshing.md): A Boolean value indicating whether a refresh operation is in progress.
- [target](nsrefreshcontroller/target.md): The target object that receives action messages.
- [tintColor](nsrefreshcontroller/tintcolor.md): The tint color for the refresh controller.

### Instance Methods

- [beginRefreshing()](nsrefreshcontroller/beginrefreshing%28%29.md): Tells the refresh controller that a refresh operation has begun.
- [endRefreshing()](nsrefreshcontroller/endrefreshing%28%29.md): Tells the refresh controller that a refresh operation has ended.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# NSRefreshController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A controller that provides pull-to-refresh functionality for scroll views.

## Declaration

```objectivec
@interface NSRefreshController : NSObject
```

<a id="overview"></a>

## Overview

`NSRefreshController` enables users to trigger refresh operations by pulling down on scrollable content. Add a refresh controller to an `NSScrollView` to provide this functionality. Configure the target and action to handle refresh events.

## Topics

### Instance Properties

- [action](nsrefreshcontroller/action.md): The action method to call when refresh is triggered.
- [attributedTitle](nsrefreshcontroller/attributedtitle.md): The styled text to display in the refresh controller.
- [isRefreshing](nsrefreshcontroller/isrefreshing.md): A Boolean value indicating whether a refresh operation is in progress.
- [target](nsrefreshcontroller/target.md): The target object that receives action messages.
- [tintColor](nsrefreshcontroller/tintcolor.md): The tint color for the refresh controller.

### Instance Methods

- [beginRefreshing](nsrefreshcontroller/beginrefreshing%28%29.md): Tells the refresh controller that a refresh operation has begun.
- [endRefreshing](nsrefreshcontroller/endrefreshing%28%29.md): Tells the refresh controller that a refresh operation has ended.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
