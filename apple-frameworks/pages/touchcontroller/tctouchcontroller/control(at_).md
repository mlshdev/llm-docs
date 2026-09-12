> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/control(at:)](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/control(at:))

# control(at:) (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The control at the specified point, if any.

## Declaration

```swift
func control(at point: CGPoint) -> (any TCControl)?
```

## Parameters

- `point`: The point to check for a control.

<a id="return-value"></a>

## Return Value

The control at the specified point, or `nil` if no control is found.

# controlAtPoint: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The control at the specified point, if any.

## Declaration

```objectivec
- (id<TCControl>) controlAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The point to check for a control.

<a id="return-value"></a>

## Return Value

The control at the specified point, or `nil` if no control is found.
