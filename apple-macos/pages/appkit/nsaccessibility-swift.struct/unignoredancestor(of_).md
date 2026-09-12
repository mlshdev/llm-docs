> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/unignoredancestor(of:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/unignoredancestor(of:))

# unignoredAncestor(of:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an unignored accessibility object, ascending the hierarchy, if necessary.

## Declaration

```swift
static func unignoredAncestor(of element: Any) -> Any?
```

<a id="Discussion"></a>

## Discussion

Tests whether `element` is an ignored object, returning either `element`, if it is not ignored, or the first unignored ancestor of `element`.

## See Also

### Getting Accessibility Objects

- [unignoredChildren(from:)](unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredChildrenForOnlyChild(from:)](unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredDescendant(of:)](unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.

# NSAccessibilityUnignoredAncestor (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns an unignored accessibility object, ascending the hierarchy, if necessary.

## Declaration

```objectivec
extern idNSAccessibilityUnignoredAncestor(id element);
```

<a id="Discussion"></a>

## Discussion

Tests whether `element` is an ignored object, returning either `element`, if it is not ignored, or the first unignored ancestor of `element`.

## See Also

### Getting Accessibility Objects

- [NSAccessibilityUnignoredChildren](unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildrenForOnlyChild](unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredDescendant](unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.
