> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/restorationclass](https://developer.apple.com/documentation/uikit/uiviewcontroller/restorationclass)

# restorationClass (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The class responsible for recreating this view controller when restoring the app’s state.

## Declaration

```swift
var restorationClass: (any UIViewControllerRestoration.Type)? { get set }
```

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

If a view controller has an associated restoration class, the [viewController(withRestorationIdentifierPath:coder:)](../uiviewcontrollerrestoration/viewcontroller%28withrestorationidentifierpath_coder_%29.md) method of that class is called during state restoration. That method is responsible for returning the view controller object that matches the indicated view controller. If you do not specify a restoration class for your view controller, the state restoration engine asks your app delegate to provide the view controller object instead.

The restoration class must conform to the [UIViewControllerRestoration](../uiviewcontrollerrestoration.md) protocol.

## See Also

### Managing state restoration

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view controller supports state restoration.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Encodes state-related information for the view controller.
- [decodeRestorableState(with:)](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the view controller.
- [applicationFinishedRestoringState()](applicationfinishedrestoringstate%28%29.md): Called on restored view controllers after other object decoding is complete.

# restorationClass (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The class responsible for recreating this view controller when restoring the app’s state.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite, nullable) Class<UIViewControllerRestoration> * restorationClass;
```

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

If a view controller has an associated restoration class, the [viewControllerWithRestorationIdentifierPath:coder:](../uiviewcontrollerrestoration/viewcontroller%28withrestorationidentifierpath_coder_%29.md) method of that class is called during state restoration. That method is responsible for returning the view controller object that matches the indicated view controller. If you do not specify a restoration class for your view controller, the state restoration engine asks your app delegate to provide the view controller object instead.

The restoration class must conform to the [UIViewControllerRestoration](../uiviewcontrollerrestoration.md) protocol.

## See Also

### Managing state restoration

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view controller supports state restoration.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Encodes state-related information for the view controller.
- [decodeRestorableStateWithCoder:](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the view controller.
- [applicationFinishedRestoringState](applicationfinishedrestoringstate%28%29.md): Called on restored view controllers after other object decoding is complete.
