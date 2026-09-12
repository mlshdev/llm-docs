> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/shouldpresentinfullscreen](https://developer.apple.com/documentation/uikit/uipresentationcontroller/shouldpresentinfullscreen)

# shouldPresentInFullscreen (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the presentation covers the entire screen.

## Declaration

```swift
var shouldPresentInFullscreen: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the presentation covers the screen or [false](https://developer.apple.com/documentation/swift/false) if it covers all or part of the current view controller only.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true), indicating that the presentation covers the entire screen. You can override this method and return [false](https://developer.apple.com/documentation/swift/false) to force the presentation to display only in the current context.

If you override this method, do not call `super`.

## See Also

### Getting the presentation attributes

- [presentationStyle](presentationstyle.md): The presentation style of the presented view controller.
- [adaptivePresentationStyle(for:)](adaptivepresentationstyle%28for_%29.md): Returns the presentation style to use for the specified set of traits.
- [adaptivePresentationStyle](adaptivepresentationstyle.md): Returns the presentation style to use when the presented view controller becomes horizontally compact.
- [shouldRemovePresentersView](shouldremovepresentersview.md): A Boolean value indicating whether the presenting view controller’s view should be removed when the presentation animations finish.

# shouldPresentInFullscreen (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the presentation covers the entire screen.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldPresentInFullscreen;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the presentation covers the screen or [false](https://developer.apple.com/documentation/swift/false) if it covers all or part of the current view controller only.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true), indicating that the presentation covers the entire screen. You can override this method and return [false](https://developer.apple.com/documentation/swift/false) to force the presentation to display only in the current context.

If you override this method, do not call `super`.

## See Also

### Getting the presentation attributes

- [presentationStyle](presentationstyle.md): The presentation style of the presented view controller.
- [adaptivePresentationStyleForTraitCollection:](adaptivepresentationstyle%28for_%29.md): Returns the presentation style to use for the specified set of traits.
- [adaptivePresentationStyle](adaptivepresentationstyle.md): Returns the presentation style to use when the presented view controller becomes horizontally compact.
- [shouldRemovePresentersView](shouldremovepresentersview.md): A Boolean value indicating whether the presenting view controller’s view should be removed when the presentation animations finish.
