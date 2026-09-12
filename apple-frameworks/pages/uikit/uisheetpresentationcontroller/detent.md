> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/detent](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/detent)

# UISheetPresentationController.Detent (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that represents a height where a sheet naturally rests.

## Declaration

```swift
@MainActor class Detent
```

## Topics

### Creating a system detent

- [large()](detent/large%28%29.md): Creates a system detent for a sheet at full height.
- [medium()](detent/medium%28%29.md): Creates a system detent for a sheet that’s approximately half the height of the screen, and is inactive in compact height.

### Creating a custom detent

- [custom(identifier:resolver:)](detent/custom%28identifier_resolver_%29.md): Creates a custom detent for a sheet by computing its value according to the properties of the provided context.
- [resolvedValue(in:)](detent/resolvedvalue%28in_%29.md): Resolves a detent to its value.
- [UISheetPresentationControllerDetentResolutionContext](../uisheetpresentationcontrollerdetentresolutioncontext.md): A context for resolving custom detent values.

### Identifying a detent

- [identifier](detent/identifier-swift.property.md): The identifier of the detent.
- [UISheetPresentationController.Detent.Identifier](detent/identifier-swift.struct.md): Constants that identify system detent sizes.

### Instance Properties

- [backgroundEffect](detent/backgroundeffect.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Specifying the height

- [detents](detents.md): The array of heights where a sheet can rest.
- [selectedDetentIdentifier](selecteddetentidentifier.md): The identifier of the most recently selected detent.

# UISheetPresentationControllerDetent (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that represents a height where a sheet naturally rests.

## Declaration

```objectivec
@interface UISheetPresentationControllerDetent : NSObject
```

## Topics

### Creating a system detent

- [largeDetent](detent/large%28%29.md): Creates a system detent for a sheet at full height.
- [mediumDetent](detent/medium%28%29.md): Creates a system detent for a sheet that’s approximately half the height of the screen, and is inactive in compact height.

### Creating a custom detent

- [customDetentWithIdentifier:resolver:](../uisheetpresentationcontrollerdetent/customdetentwithidentifier_resolver_.md): Creates a custom detent for a sheet by computing its value according to the properties of the provided context.
- [resolvedValueInContext:](../uisheetpresentationcontrollerdetent/resolvedvalueincontext_.md): Resolves a detent to its value.
- [UISheetPresentationControllerDetentResolutionContext](../uisheetpresentationcontrollerdetentresolutioncontext.md): A context for resolving custom detent values.
- [UISheetPresentationControllerDetentInactive](../uisheetpresentationcontrollerdetentinactive.md): A value that represents an inactive detent.

### Identifying a detent

- [identifier](detent/identifier-swift.property.md): The identifier of the detent.
- [UISheetPresentationControllerDetentIdentifier](detent/identifier-swift.struct.md): Constants that identify system detent sizes.

### Instance Properties

- [backgroundEffect](detent/backgroundeffect.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Specifying the height

- [detents](detents.md): The array of heights where a sheet can rest.
- [selectedDetentIdentifier](selecteddetentidentifier.md): The identifier of the most recently selected detent.
