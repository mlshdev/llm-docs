> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller/context](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller/context)

# context (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The launch information for the application controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
var context: TVApplicationControllerContext { get }
```

<a id="Discussion"></a>

## Discussion

The launch information contains the JavaScript application URL, [storageIdentifier](../tvapplicationcontrollercontext/storageidentifier.md), and [launchOptions](../tvapplicationcontrollercontext/launchoptions.md). The URL can point to a local or remote resource. `launchOptions` can be constructed and forwarded from launch options keys that are part of UIApplication. See Launch Options Keys.

## See Also

### Examining App Controller Properties

- [navigationController](navigationcontroller.md): Deprecated. The navigation controller that is bridged from JavaScript to tvOS.
- [window](window.md): Deprecated. A reference to the window supplied when the app controller was initialized.

# context (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The launch information for the application controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readonly) TVApplicationControllerContext * context;
```

<a id="Discussion"></a>

## Discussion

The launch information contains the JavaScript application URL, [storageIdentifier](../tvapplicationcontrollercontext/storageidentifier.md), and [launchOptions](../tvapplicationcontrollercontext/launchoptions.md). The URL can point to a local or remote resource. `launchOptions` can be constructed and forwarded from launch options keys that are part of UIApplication. See Launch Options Keys.

## See Also

### Examining App Controller Properties

- [navigationController](navigationcontroller.md): Deprecated. The navigation controller that is bridged from JavaScript to tvOS.
- [window](window.md): Deprecated. A reference to the window supplied when the app controller was initialized.
