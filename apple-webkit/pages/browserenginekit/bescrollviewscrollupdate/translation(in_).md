> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewscrollupdate/translation(in:)](https://developer.apple.com/documentation/browserenginekit/bescrollviewscrollupdate/translation(in:))

# translation(in:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns the scroll displacement in the coordinate system of the view that the update represents.

## Declaration

```swift
func translation(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view that contains the coordinate system to express the displacement. Pass `nil` to get the displacement in the window’s coordinate system.

<a id="return-value"></a>

## Return Value

The scroll displacement of the update in the specified view’s coordinate system.

<a id="discussion"></a>

## Discussion

A nonzero `x` or `y` value in the returned point indicates a displacement large enough to produce a visible change along that axis.

## See Also

### Transforming coordinates

- [location(in:)](location%28in_%29.md): Returns the location of the scroll update in the coordinate system of the given view.

# translationInView: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns the scroll displacement in the coordinate system of the view that the update represents.

## Declaration

```objectivec
- (CGPoint) translationInView:(UIView *) view;
```

## Parameters

- `view`: The view that contains the coordinate system to express the displacement. Pass `nil` to get the displacement in the window’s coordinate system.

<a id="return-value"></a>

## Return Value

The scroll displacement of the update in the specified view’s coordinate system.

<a id="discussion"></a>

## Discussion

A nonzero `x` or `y` value in the returned point indicates a displacement large enough to produce a visible change along that axis.

## See Also

### Transforming coordinates

- [locationInView:](location%28in_%29.md): Returns the location of the scroll update in the coordinate system of the given view.
