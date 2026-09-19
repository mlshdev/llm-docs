> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiinputviewaudiofeedback/enableinputclickswhenvisible

# enableInputClicksWhenVisible (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

Specifies whether or not an input view enables input clicks.

## Declaration

```swift
optional var enableInputClicksWhenVisible: Bool { get }
```

## Parameters

- `enableInputClicksWhenVisible`: Return [true](https://developer.apple.com/documentation/swift/true) to enable input clicks by way of the [playInputClick()](../uidevice/playinputclick%28%29.md) method, or [false](https://developer.apple.com/documentation/swift/false) to disable input clicks. The value is [false](https://developer.apple.com/documentation/swift/false) by default.

<a id="Discussion"></a>

## Discussion

In your custom subclass of [UIView](../uiview.md), implement this property as a getter method. Return [true](https://developer.apple.com/documentation/swift/true) to enable input clicks in your custom input or keyboard accessory view, as follows:

**Swift**

```swift
var enableInputClicksWhenVisible: Bool {
    return true
}
```

**Objective-C**

```objc
- (BOOL) enableInputClicksWhenVisible {
    return YES;
}
```

Input clicks will be produced only if the user has also enabled keyboard clicks in Settings \> Sounds.

# enableInputClicksWhenVisible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

Specifies whether or not an input view enables input clicks.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL enableInputClicksWhenVisible;
```

## Parameters

- `enableInputClicksWhenVisible`: Return [true](https://developer.apple.com/documentation/swift/true) to enable input clicks by way of the [playInputClick](../uidevice/playinputclick%28%29.md) method, or [false](https://developer.apple.com/documentation/swift/false) to disable input clicks. The value is [false](https://developer.apple.com/documentation/swift/false) by default.

<a id="Discussion"></a>

## Discussion

In your custom subclass of [UIView](../uiview.md), implement this property as a getter method. Return [true](https://developer.apple.com/documentation/swift/true) to enable input clicks in your custom input or keyboard accessory view, as follows:

**Swift**

```swift
var enableInputClicksWhenVisible: Bool {
    return true
}
```

**Objective-C**

```objc
- (BOOL) enableInputClicksWhenVisible {
    return YES;
}
```

Input clicks will be produced only if the user has also enabled keyboard clicks in Settings \> Sounds.
