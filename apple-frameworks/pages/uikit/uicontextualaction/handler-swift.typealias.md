> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextualaction/handler-swift.typealias](https://developer.apple.com/documentation/uikit/uicontextualaction/handler-swift.typealias)

# UIContextualAction.Handler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The handler block to call in response to the selection of an action.

## Declaration

```swift
@MainActor typealias Handler = (UIContextualAction, UIView, @escaping (Bool) -> Void) -> Void
```

## Parameters

- `action`: The object containing information about the selected action.
- `sourceView`: The view in which the action was displayed.
- `completionHandler`: The handler block for you to execute after you have performed the action. This block has no return value and takes the following parameter:

  - **actionPerformed**: A Boolean value indicating whether you performed the action. Specify [true](https://developer.apple.com/documentation/swift/true) if you performed the action or [false](https://developer.apple.com/documentation/swift/false) if you were unable to perform the action for some reason.

## See Also

### Getting the configuration details

- [handler](handler-swift.property.md): The handler block to execute when the user selects the action.
- [style](style-swift.property.md): The style that applies to the action button.
- [UIContextualAction.Style](style-swift.enum.md): Constants indicating the style information that applies to the action button.

# UIContextualActionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The handler block to call in response to the selection of an action.

## Declaration

```objectivec
typedef void (^)(UIContextualAction *, __kindof UIView *, void (^)(_Bool)) UIContextualActionHandler;
```

## Parameters

- `action`: The object containing information about the selected action.
- `sourceView`: The view in which the action was displayed.
- `completionHandler`: The handler block for you to execute after you have performed the action. This block has no return value and takes the following parameter:

  - **actionPerformed**: A Boolean value indicating whether you performed the action. Specify [true](https://developer.apple.com/documentation/swift/true) if you performed the action or [false](https://developer.apple.com/documentation/swift/false) if you were unable to perform the action for some reason.

## See Also

### Getting the configuration details

- [handler](handler-swift.property.md): The handler block to execute when the user selects the action.
- [style](style-swift.property.md): The style that applies to the action button.
- [UIContextualActionStyle](style-swift.enum.md): Constants indicating the style information that applies to the action button.
