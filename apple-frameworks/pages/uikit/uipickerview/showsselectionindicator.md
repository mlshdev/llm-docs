> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/showsselectionindicator](https://developer.apple.com/documentation/uikit/uipickerview/showsselectionindicator)

# showsSelectionIndicator (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that determines whether the selection indicator is displayed.

> In iOS 7 and later, you can’t customize the picker view’s selection indicator. The selection indicator is always shown, so setting this property to [false](https://developer.apple.com/documentation/swift/false) has no effect.

## Declaration

```swift
var showsSelectionIndicator: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of the property is [true](https://developer.apple.com/documentation/swift/true), the picker view shows a clear overlay across the current row. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

# showsSelectionIndicator (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that determines whether the selection indicator is displayed.

> In iOS 7 and later, you can’t customize the picker view’s selection indicator. The selection indicator is always shown, so setting this property to [false](https://developer.apple.com/documentation/swift/false) has no effect.

## Declaration

```objectivec
@property (nonatomic) BOOL showsSelectionIndicator;
```

<a id="Discussion"></a>

## Discussion

If the value of the property is [true](https://developer.apple.com/documentation/swift/true), the picker view shows a clear overlay across the current row. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).
