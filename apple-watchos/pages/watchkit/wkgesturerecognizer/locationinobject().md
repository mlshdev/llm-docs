> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkgesturerecognizer/locationinobject()](https://developer.apple.com/documentation/watchkit/wkgesturerecognizer/locationinobject())

# locationInObject() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Returns the point computed as the current position of the touch event.

## Declaration

```swift
func locationInObject() -> CGPoint
```

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of the associated interface object.

<a id="Discussion"></a>

## Discussion

If multiple touches were detected, this method returns the location of only the first one.

## See Also

### Getting the Touch Information

- [objectBounds()](objectbounds%28%29.md): Returns the dimensions of the interface object (measured in points) associated with the gesture recognizer.

# locationInObject (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Returns the point computed as the current position of the touch event.

## Declaration

```objectivec
- (CGPoint) locationInObject;
```

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of the associated interface object.

<a id="Discussion"></a>

## Discussion

If multiple touches were detected, this method returns the location of only the first one.

## See Also

### Getting the Touch Information

- [objectBounds](objectbounds%28%29.md): Returns the dimensions of the interface object (measured in points) associated with the gesture recognizer.
