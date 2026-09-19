> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/location(in:)

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns the location of the user interaction in the specified view’s coordinate system.

## Declaration

```swift
func location(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view containing the target coordinate system. To return a point in the window’s coordinate system, specify `nil`.

<a id="return-value"></a>

## Return Value

The location of the interaction specified in the coordinate system of `view`.

# locationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns the location of the user interaction in the specified view’s coordinate system.

## Declaration

```objectivec
- (CGPoint) locationInView:(UIView *) view;
```

## Parameters

- `view`: The view containing the target coordinate system. To return a point in the window’s coordinate system, specify `nil`.

<a id="return-value"></a>

## Return Value

The location of the interaction specified in the coordinate system of `view`.
