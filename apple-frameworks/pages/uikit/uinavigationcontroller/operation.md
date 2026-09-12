> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/operation](https://developer.apple.com/documentation/uikit/uinavigationcontroller/operation)

# UINavigationController.Operation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that define the type of navigation controller transitions that can occur.

## Declaration

```swift
enum Operation
```

## Topics

### Constants

- [UINavigationController.Operation.none](operation/none.md): A constant that indicates no operation is taking place.
- [UINavigationController.Operation.push](operation/push.md): A constant that indicates a view controller is being pushed onto the navigation stack.
- [UINavigationController.Operation.pop](operation/pop.md): A constant that indicates the topmost view controller is being removed from the navigation stack.

### Initializers

- [init(rawValue:)](operation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UINavigationControllerOperation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that define the type of navigation controller transitions that can occur.

## Declaration

```objectivec
enum UINavigationControllerOperation : NSInteger;
```

## Topics

### Constants

- [UINavigationControllerOperationNone](operation/none.md): A constant that indicates no operation is taking place.
- [UINavigationControllerOperationPush](operation/push.md): A constant that indicates a view controller is being pushed onto the navigation stack.
- [UINavigationControllerOperationPop](operation/pop.md): A constant that indicates the topmost view controller is being removed from the navigation stack.
