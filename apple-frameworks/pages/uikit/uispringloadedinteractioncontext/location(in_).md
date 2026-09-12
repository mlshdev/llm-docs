> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractioncontext/location(in:)](https://developer.apple.com/documentation/uikit/uispringloadedinteractioncontext/location(in:))

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the location of the drag activity within the specified view.

## Declaration

```swift
func location(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view that is used to determine the location of the drag activity.

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of `view`.

<a id="Discussion"></a>

## Discussion

To get the location of the drag activity within the window, use `nil` for the view.

# locationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the location of the drag activity within the specified view.

## Declaration

```objectivec
- (CGPoint) locationInView:(UIView *) view;
```

## Parameters

- `view`: The view that is used to determine the location of the drag activity.

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of `view`.

<a id="Discussion"></a>

## Discussion

To get the location of the drag activity within the window, use `nil` for the view.
