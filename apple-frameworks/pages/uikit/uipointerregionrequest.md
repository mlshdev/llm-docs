> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerregionrequest](https://developer.apple.com/documentation/uikit/uipointerregionrequest)

# UIPointerRegionRequest (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object to describe the pointer’s location in the interaction’s view.

## Declaration

```swift
@MainActor class UIPointerRegionRequest
```

<a id="overview"></a>

## Overview

The `UIPointerRegionRequest` is given to the `UIPointerInteractionDelegate` to allow for changes to the pointer interaction.

## Topics

### Inspecting the region request

- [location](uipointerregionrequest/location.md): The location of the pointer in the interaction’s view’s coordinate space.
- [modifiers](uipointerregionrequest/modifiers.md): Key modifier flags representing keyboard keys pressed by the user at the time of this request.

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

### Pointer region

- [UIPointerRegion](uipointerregion.md): A rectangular region that interacts with pointer movements.

# UIPointerRegionRequest (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object to describe the pointer’s location in the interaction’s view.

## Declaration

```objectivec
@interface UIPointerRegionRequest : NSObject
```

<a id="overview"></a>

## Overview

The `UIPointerRegionRequest` is given to the `UIPointerInteractionDelegate` to allow for changes to the pointer interaction.

## Topics

### Inspecting the region request

- [location](uipointerregionrequest/location.md): The location of the pointer in the interaction’s view’s coordinate space.
- [modifiers](uipointerregionrequest/modifiers.md): Key modifier flags representing keyboard keys pressed by the user at the time of this request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Pointer region

- [UIPointerRegion](uipointerregion.md): A rectangular region that interacts with pointer movements.
