> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/init(frame:)](https://developer.apple.com/documentation/uikit/uiswitch/init(frame:))

# init(frame:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a switch control.

## Declaration

```swift
init(frame: CGRect)
```

## Parameters

- `frame`: A rectangle defining the frame of the [UISwitch](../uiswitch.md) object. The size components of this rectangle are ignored.

<a id="return-value"></a>

## Return Value

An initialized [UISwitch](../uiswitch.md) object.

<a id="Discussion"></a>

## Discussion

[UISwitch](../uiswitch.md) overrides [init(frame:)](../uiview/init%28frame_%29.md) and enforces a size appropriate for the control.

## See Also

### Creating a switch

- [init(coder:)](init%28coder_%29.md): Creates a switch control from data in an unarchiver.

# initWithFrame: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a switch control.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame;
```

## Parameters

- `frame`: A rectangle defining the frame of the [UISwitch](../uiswitch.md) object. The size components of this rectangle are ignored.

<a id="return-value"></a>

## Return Value

An initialized [UISwitch](../uiswitch.md) object.

<a id="Discussion"></a>

## Discussion

[UISwitch](../uiswitch.md) overrides [initWithFrame:](../uiview/init%28frame_%29.md) and enforces a size appropriate for the control.

## See Also

### Creating a switch

- [initWithCoder:](init%28coder_%29.md): Creates a switch control from data in an unarchiver.
