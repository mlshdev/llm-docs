> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkgesturerecognizer/objectbounds()](https://developer.apple.com/documentation/watchkit/wkgesturerecognizer/objectbounds())

# objectBounds() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Returns the dimensions of the interface object (measured in points) associated with the gesture recognizer.

## Declaration

```swift
func objectBounds() -> CGRect
```

<a id="return-value"></a>

## Return Value

The bounding rectangle of the interface object to which the gesture recognizer is attached.

<a id="Discussion"></a>

## Discussion

You attach a gesture recognizer to a specific element in your storyboard file. At runtime, you use this property to get the dimensions of that element.

## See Also

### Getting the Touch Information

- [locationInObject()](locationinobject%28%29.md): Returns the point computed as the current position of the touch event.

# objectBounds (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Returns the dimensions of the interface object (measured in points) associated with the gesture recognizer.

## Declaration

```objectivec
- (CGRect) objectBounds;
```

<a id="return-value"></a>

## Return Value

The bounding rectangle of the interface object to which the gesture recognizer is attached.

<a id="Discussion"></a>

## Discussion

You attach a gesture recognizer to a specific element in your storyboard file. At runtime, you use this property to get the dimensions of that element.

## See Also

### Getting the Touch Information

- [locationInObject](locationinobject%28%29.md): Returns the point computed as the current position of the touch event.
