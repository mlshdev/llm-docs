> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/wantssoftwaredimming](https://developer.apple.com/documentation/uikit/uiscreen/wantssoftwaredimming)

# wantsSoftwareDimming (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.

## Declaration

```swift
var wantsSoftwareDimming: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Enabling it may cause a loss in performance.

## See Also

### Managing brightness

- [brightness](brightness.md): The brightness level of the screen.

# wantsSoftwareDimming (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.

## Declaration

```objectivec
@property (nonatomic) BOOL wantsSoftwareDimming;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Enabling it may cause a loss in performance.

## See Also

### Managing brightness

- [brightness](brightness.md): The brightness level of the screen.
