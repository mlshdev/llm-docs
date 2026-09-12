> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/invalidationcontextclass](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/invalidationcontextclass)

# invalidationContextClass (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the class to use when creating an invalidation context object for the layout.

## Declaration

```swift
class var invalidationContextClass: AnyClass { get }
```

<a id="return-value"></a>

## Return Value

A custom class that descends from [NSCollectionViewLayoutInvalidationContext](../nscollectionviewlayoutinvalidationcontext.md).

<a id="Discussion"></a>

## Discussion

If you define a custom invalidation context class to store information related to your layout, override this method and use it to return your custom subclass. Methods of this class that create invalidation contexts automatically create instances of the class you provide, initializing those instances using its [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method.

## See Also

### Invalidating the Layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.

# invalidationContextClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the class to use when creating an invalidation context object for the layout.

## Declaration

```objectivec
@property (class, readonly) Class invalidationContextClass;
```

<a id="return-value"></a>

## Return Value

A custom class that descends from [NSCollectionViewLayoutInvalidationContext](../nscollectionviewlayoutinvalidationcontext.md).

<a id="Discussion"></a>

## Discussion

If you define a custom invalidation context class to store information related to your layout, override this method and use it to return your custom subclass. Methods of this class that create invalidation contexts automatically create instances of the class you provide, initializing those instances using its [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method.

## See Also

### Invalidating the Layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates all layout information and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates specific parts of the layout using the specified context object.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Returns a Boolean indicating whether a bounds change triggers a layout update.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns a Boolean indicating whether changes to a cell’s layout attributes trigger a larger layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Returns an invalidation context object that defines the portions of the layout that need to be updated.
