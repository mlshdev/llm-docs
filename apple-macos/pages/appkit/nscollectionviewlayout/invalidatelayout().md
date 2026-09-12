> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/invalidatelayout()](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/invalidatelayout())

# invalidateLayout() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Invalidates all layout information and triggers a layout update.

## Declaration

```swift
func invalidateLayout()
```

<a id="Discussion"></a>

## Discussion

Call this method when you make changes that require updating all of the current layout information. This method marks the layout as invalid and returns right away, so you can call this method multiple times from the same block of code without triggering multiple layout updates. During the next update cycle, the collection view requests new layout information and updates its contents accordingly.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the Layout

- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.

# invalidateLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Invalidates all layout information and triggers a layout update.

## Declaration

```objectivec
- (void) invalidateLayout;
```

<a id="Discussion"></a>

## Discussion

Call this method when you make changes that require updating all of the current layout information. This method marks the layout as invalid and returns right away, so you can call this method multiple times from the same block of code without triggering multiple layout updates. During the next update cycle, the collection view requests new layout information and updates its contents accordingly.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the Layout

- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
