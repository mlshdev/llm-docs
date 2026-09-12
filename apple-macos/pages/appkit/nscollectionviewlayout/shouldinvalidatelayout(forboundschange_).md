> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/shouldinvalidatelayout(forboundschange:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/shouldinvalidatelayout(forboundschange:))

# shouldInvalidateLayout(forBoundsChange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean indicating whether a bounds change triggers a layout update.

## Declaration

```swift
func shouldInvalidateLayout(forBoundsChange newBounds: NSRect) -> Bool
```

## Parameters

- `newBounds`: The new bounds of the collection view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a layout should be invalidated or [false](https://developer.apple.com/documentation/swift/false) if the layout is still valid.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). You can override this method in your custom layout classes and return a different value as needed. Your implementation of the method should determine if the new bounds would cause changes to the layout of other portions of the collection view.

If you return [true](https://developer.apple.com/documentation/swift/true) from this method, the collection view invalidates the layout using the [invalidateLayout(with:)](invalidatelayout%28with_%29.md) method. The invalidation context passed to that method is created using the [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md) method.

## See Also

### Invalidating the Layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.

# shouldInvalidateLayoutForBoundsChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean indicating whether a bounds change triggers a layout update.

## Declaration

```objectivec
- (BOOL) shouldInvalidateLayoutForBoundsChange:(NSRect) newBounds;
```

## Parameters

- `newBounds`: The new bounds of the collection view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a layout should be invalidated or [false](https://developer.apple.com/documentation/swift/false) if the layout is still valid.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). You can override this method in your custom layout classes and return a different value as needed. Your implementation of the method should determine if the new bounds would cause changes to the layout of other portions of the collection view.

If you return [true](https://developer.apple.com/documentation/swift/true) from this method, the collection view invalidates the layout using the [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md) method. The invalidation context passed to that method is created using the [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md) method.

## See Also

### Invalidating the Layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
