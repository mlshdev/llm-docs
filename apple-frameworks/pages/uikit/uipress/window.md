> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/window](https://developer.apple.com/documentation/uikit/uipress/window)

# window (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The window in which the press initially occurred.

## Declaration

```swift
var window: UIWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the window in which the press originally occurred. This object might not be the window in which the press is currently located.

# window (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The window in which the press initially occurred.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIWindow * window;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the window in which the press originally occurred. This object might not be the window in which the press is currently located.
