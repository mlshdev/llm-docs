> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/location(in:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/location(in:))

# location(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the point computed as the location of the gesture.

## Declaration

```swift
func location(in view: NSView?) -> NSPoint
```

## Parameters

- `view`: The view whose coordinate system you want to use for determining the location of the gesture. Specify `nil` to return the point in the coordinate system of the window.

<a id="return-value"></a>

## Return Value

The point at which the gesture occurred. The returned point is in the coordinate system of the specified view, or in the coordinate system of the window if you specified `nil` for the view parameter.

<a id="Discussion"></a>

## Discussion

Use this method to determine the location at which the gesture occurred. Subclasses are responsible for overriding this method and returning an appropriate value based on the type of gesture.

For specific information about what the returned point represents, see the specific gesture recognizer subclass.

# locationInView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the point computed as the location of the gesture.

## Declaration

```objectivec
- (NSPoint) locationInView:(NSView *) view;
```

## Parameters

- `view`: The view whose coordinate system you want to use for determining the location of the gesture. Specify `nil` to return the point in the coordinate system of the window.

<a id="return-value"></a>

## Return Value

The point at which the gesture occurred. The returned point is in the coordinate system of the specified view, or in the coordinate system of the window if you specified `nil` for the view parameter.

<a id="Discussion"></a>

## Discussion

Use this method to determine the location at which the gesture occurred. Subclasses are responsible for overriding this method and returning an appropriate value based on the type of gesture.

For specific information about what the returned point represents, see the specific gesture recognizer subclass.
