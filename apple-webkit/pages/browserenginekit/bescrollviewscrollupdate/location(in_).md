> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewscrollupdate/location(in:)](https://developer.apple.com/documentation/browserenginekit/bescrollviewscrollupdate/location(in:))

# location(in:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns the location of the scroll update in the coordinate system of the given view.

## Declaration

```swift
func location(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view that contains the coordinate system to express the location. Pass `nil` to get the location in the window’s coordinate system.

<a id="return-value"></a>

## Return Value

The location of the scroll update in the specified view’s coordinate system.

## See Also

### Transforming coordinates

- [translation(in:)](translation%28in_%29.md): Returns the scroll displacement in the coordinate system of the view that the update represents.

# locationInView: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns the location of the scroll update in the coordinate system of the given view.

## Declaration

```objectivec
- (CGPoint) locationInView:(UIView *) view;
```

## Parameters

- `view`: The view that contains the coordinate system to express the location. Pass `nil` to get the location in the window’s coordinate system.

<a id="return-value"></a>

## Return Value

The location of the scroll update in the specified view’s coordinate system.

## See Also

### Transforming coordinates

- [translationInView:](translation%28in_%29.md): Returns the scroll displacement in the coordinate system of the view that the update represents.
