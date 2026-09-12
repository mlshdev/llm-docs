> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputview/allowsselfsizing](https://developer.apple.com/documentation/uikit/uiinputview/allowsselfsizing)

# allowsSelfSizing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the input view is responsible for its own size.

## Declaration

```swift
var allowsSelfSizing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), UIKit determines an appropriate size of the input view based on its current layout. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), UIKit honors the value returned by the [systemLayoutSizeFitting(\_:)](../uiview/systemlayoutsizefitting%28__%29.md) method of the input view.

# allowsSelfSizing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the input view is responsible for its own size.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsSelfSizing;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), UIKit determines an appropriate size of the input view based on its current layout. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), UIKit honors the value returned by the [systemLayoutSizeFittingSize:](../uiview/systemlayoutsizefitting%28__%29.md) method of the input view.
