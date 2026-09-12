> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession/location(in:)](https://developer.apple.com/documentation/uikit/uidragdropsession/location(in:))

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the geometrical location of the user’s drag activity within the specified view.

## Declaration

```swift
func location(in view: UIView) -> CGPoint
```

## Parameters

- `view`: The view whose coordinate system is used to get the location.

<a id="return-value"></a>

## Return Value

The location point of the drag activity, in the coordinate system of the specified view.

# locationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the geometrical location of the user’s drag activity within the specified view.

## Declaration

```objectivec
- (CGPoint) locationInView:(UIView *) view;
```

## Parameters

- `view`: The view whose coordinate system is used to get the location.

<a id="return-value"></a>

## Return Value

The location point of the drag activity, in the coordinate system of the specified view.
