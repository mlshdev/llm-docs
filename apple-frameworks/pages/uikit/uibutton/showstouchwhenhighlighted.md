> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibutton/showstouchwhenhighlighted

# showsTouchWhenHighlighted (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that determines whether tapping the button causes it to glow.

> The system ignores this when you use [UIButton.Configuration](configuration-swift.struct.md).

## Declaration

```swift
var showsTouchWhenHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the button glows when tapped; otherwise, it does not. The image and button behavior is not changed by the glow. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Button presentation

- [adjustsImageWhenHighlighted](adjustsimagewhenhighlighted.md): Deprecated. A Boolean value that determines whether the image changes when the button is highlighted.
- [adjustsImageWhenDisabled](adjustsimagewhendisabled.md): Deprecated. A Boolean value that determines whether the image changes when the button is disabled.

# showsTouchWhenHighlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that determines whether tapping the button causes it to glow.

> The system ignores this when you use [UIButton.Configuration](configuration-swift.struct.md).

## Declaration

```objectivec
@property (nonatomic) BOOL showsTouchWhenHighlighted;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the button glows when tapped; otherwise, it does not. The image and button behavior is not changed by the glow. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Button presentation

- [adjustsImageWhenHighlighted](adjustsimagewhenhighlighted.md): Deprecated. A Boolean value that determines whether the image changes when the button is highlighted.
- [adjustsImageWhenDisabled](adjustsimagewhendisabled.md): Deprecated. A Boolean value that determines whether the image changes when the button is disabled.
