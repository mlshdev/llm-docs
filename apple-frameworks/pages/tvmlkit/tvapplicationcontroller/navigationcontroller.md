> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller/navigationcontroller](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller/navigationcontroller)

# navigationController (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The navigation controller that is bridged from JavaScript to tvOS.

> Please use SwiftUI or UIKit

## Declaration

```swift
var navigationController: UINavigationController { get }
```

<a id="Discussion"></a>

## Discussion

The root controller in which all content is presented. Native controllers can also be pushed onto this controller, or they may be presented manually.

## See Also

### Examining App Controller Properties

- [context](context.md): Deprecated. The launch information for the application controller.
- [window](window.md): Deprecated. A reference to the window supplied when the app controller was initialized.

# navigationController (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The navigation controller that is bridged from JavaScript to tvOS.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readonly) UINavigationController * navigationController;
```

<a id="Discussion"></a>

## Discussion

The root controller in which all content is presented. Native controllers can also be pushed onto this controller, or they may be presented manually.

## See Also

### Examining App Controller Properties

- [context](context.md): Deprecated. The launch information for the application controller.
- [window](window.md): Deprecated. A reference to the window supplied when the app controller was initialized.
