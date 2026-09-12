> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/invalidationcontext(forpreferredlayoutattributes:withoriginalattributes:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/invalidationcontext(forpreferredlayoutattributes:withoriginalattributes:))

# invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an invalidation context object that defines the portions of the layout that need to be updated.

## Declaration

```swift
func invalidationContext(forPreferredLayoutAttributes preferredAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes originalAttributes: NSCollectionViewLayoutAttributes) -> NSCollectionViewLayoutInvalidationContext
```

## Parameters

- `preferredAttributes`: The preferred layout attributes of an element.
- `originalAttributes`: The attributes that the layout object originally suggested for the item.

<a id="return-value"></a>

## Return Value

An invalidation context that describes the changes to be made. This value is never `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method creates an instance of the class returned by the [invalidationContextClass](invalidationcontextclass.md) method and initializes it using its [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method. Subclasses can override this method and configure additional properties of the invalidation context. In your implementation, you must call `super` first to get the context object; you can then configure that object and return it.

## See Also

### Invalidating the Layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.

# invalidationContextForPreferredLayoutAttributes:withOriginalAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an invalidation context object that defines the portions of the layout that need to be updated.

## Declaration

```objectivec
- (NSCollectionViewLayoutInvalidationContext *) invalidationContextForPreferredLayoutAttributes:(NSCollectionViewLayoutAttributes *) preferredAttributes withOriginalAttributes:(NSCollectionViewLayoutAttributes *) originalAttributes;
```

## Parameters

- `preferredAttributes`: The preferred layout attributes of an element.
- `originalAttributes`: The attributes that the layout object originally suggested for the item.

<a id="return-value"></a>

## Return Value

An invalidation context that describes the changes to be made. This value is never `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method creates an instance of the class returned by the [invalidationContextClass](invalidationcontextclass.md) method and initializes it using its [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method. Subclasses can override this method and configure additional properties of the invalidation context. In your implementation, you must call `super` first to get the context object; you can then configure that object and return it.

## See Also

### Invalidating the Layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context object for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
