> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties)

# UICollectionLayoutSectionOrthogonalScrollingProperties (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies properties for a layout section that scrolls orthogonally in relation to the main layout axis.

## Declaration

```swift
@MainActor class UICollectionLayoutSectionOrthogonalScrollingProperties
```

## Topics

### Specifying the bounce behavior

- [bounce](uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.property.md): A value that specifies whether the orthogonal scrolling section bounces past the edge of content and back again.
- [UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce](uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.enum.md): Constants that specify whether the orthogonal scrolling section bounces past the edge of content and back again.

### Specifying the rate of deceleration

- [decelerationRate](uicollectionlayoutsectionorthogonalscrollingproperties/decelerationrate-swift.property.md): A value that specifies the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.
- [UICollectionLayoutSectionOrthogonalScrollingProperties.DecelerationRate](uicollectionlayoutsectionorthogonalscrollingproperties/decelerationrate-swift.struct.md): Constants that specify the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Specifying scrolling behavior

- [orthogonalScrollingBehavior](nscollectionlayoutsection/orthogonalscrollingbehavior.md): The section’s scrolling behavior in relation to the main layout axis.
- [orthogonalScrollingProperties](nscollectionlayoutsection/orthogonalscrollingproperties.md): The section’s orthogonal scrolling properties.

# UICollectionLayoutSectionOrthogonalScrollingProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies properties for a layout section that scrolls orthogonally in relation to the main layout axis.

## Declaration

```objectivec
@interface UICollectionLayoutSectionOrthogonalScrollingProperties : NSObject
```

## Topics

### Specifying the bounce behavior

- [bounce](uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.property.md): A value that specifies whether the orthogonal scrolling section bounces past the edge of content and back again.
- [UICollectionLayoutSectionOrthogonalScrollingBounce](uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.enum.md): Constants that specify whether the orthogonal scrolling section bounces past the edge of content and back again.

### Specifying the rate of deceleration

- [decelerationRate](uicollectionlayoutsectionorthogonalscrollingproperties/decelerationrate-swift.property.md): A value that specifies the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.
- [UICollectionLayoutSectionOrthogonalScrollingDecelerationRate](uicollectionlayoutsectionorthogonalscrollingproperties/decelerationrate-swift.struct.md): Constants that specify the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Specifying scrolling behavior

- [orthogonalScrollingBehavior](nscollectionlayoutsection/orthogonalscrollingbehavior.md): The section’s scrolling behavior in relation to the main layout axis.
- [orthogonalScrollingProperties](nscollectionlayoutsection/orthogonalscrollingproperties.md): The section’s orthogonal scrolling properties.
