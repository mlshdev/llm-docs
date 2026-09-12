> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/invalidatelayout(with:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/invalidatelayout(with:))

# invalidateLayout(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Invalidates specific parts of the layout using the specified context object.

## Declaration

```swift
func invalidateLayout(with context: NSCollectionViewLayoutInvalidationContext)
```

## Parameters

- `context`: The context object indicating which parts of the layout need to be updated.

<a id="Discussion"></a>

## Discussion

Call this method when you make changes that need to be reflected by the collection view, but which do not require the replacement of all of the layout information. You use this method to minimize the work performed by the layout object. Instead of optimizing everything, the specified context object indicates which parts of the layout need to be recomputed. All other layout information is left alone.

When implementing a custom layout, you can override this method and use it to process information provided by a custom invalidation context. You are not required to provide a custom invalidation context but might do so if you are able to provide additional properties that can help optimize layout updates. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the Layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.

# invalidateLayoutWithContext: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Invalidates specific parts of the layout using the specified context object.

## Declaration

```objectivec
- (void) invalidateLayoutWithContext:(NSCollectionViewLayoutInvalidationContext *) context;
```

## Parameters

- `context`: The context object indicating which parts of the layout need to be updated.

<a id="Discussion"></a>

## Discussion

Call this method when you make changes that need to be reflected by the collection view, but which do not require the replacement of all of the layout information. You use this method to minimize the work performed by the layout object. Instead of optimizing everything, the specified context object indicates which parts of the layout need to be recomputed. All other layout information is left alone.

When implementing a custom layout, you can override this method and use it to process information provided by a custom invalidation context. You are not required to provide a custom invalidation context but might do so if you are able to provide additional properties that can help optimize layout updates. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the Layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
