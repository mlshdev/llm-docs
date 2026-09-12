> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotoritemresult](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult)

# UIAccessibilityCustomRotorItemResult (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A target element that a custom rotor references.

## Declaration

```swift
@MainActor class UIAccessibilityCustomRotorItemResult
```

## Topics

### Creating a rotor item result

- [init(targetElement:targetRange:)](uiaccessibilitycustomrotoritemresult/init%28targetelement_targetrange_%29.md): Creates a rotor item result from the specified target element and text range.

### Getting information about the target element

- [targetElement](uiaccessibilitycustomrotoritemresult/targetelement.md): The target element of the rotor.
- [targetRange](uiaccessibilitycustomrotoritemresult/targetrange.md): The text range (if any) of the target element.

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

### Navigation

- [UIAccessibilityCustomRotor](uiaccessibilitycustomrotor.md): A context-sensitive function that helps VoiceOver users find the next instance of a related element.
- [UIAccessibilityCustomRotorSearchPredicate](uiaccessibilitycustomrotorsearchpredicate.md): The search parameters that help determine the next matching custom rotor item result.

# UIAccessibilityCustomRotorItemResult (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A target element that a custom rotor references.

## Declaration

```objectivec
@interface UIAccessibilityCustomRotorItemResult : NSObject
```

## Topics

### Creating a rotor item result

- [initWithTargetElement:targetRange:](uiaccessibilitycustomrotoritemresult/init%28targetelement_targetrange_%29.md): Creates a rotor item result from the specified target element and text range.

### Getting information about the target element

- [targetElement](uiaccessibilitycustomrotoritemresult/targetelement.md): The target element of the rotor.
- [targetRange](uiaccessibilitycustomrotoritemresult/targetrange.md): The text range (if any) of the target element.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Navigation

- [UIAccessibilityCustomRotor](uiaccessibilitycustomrotor.md): A context-sensitive function that helps VoiceOver users find the next instance of a related element.
- [UIAccessibilityCustomRotorSearchPredicate](uiaccessibilitycustomrotorsearchpredicate.md): The search parameters that help determine the next matching custom rotor item result.
