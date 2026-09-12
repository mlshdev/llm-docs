> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/unignoreddescendant(of:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/unignoreddescendant(of:))

# unignoredDescendant(of:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an unignored accessibility object, descending the hierarchy, if necessary.

## Declaration

```swift
static func unignoredDescendant(of element: Any) -> Any?
```

<a id="Discussion"></a>

## Discussion

Tests whether `element` is an ignored object, returning either `element`, if it is not ignored, or the first unignored descendant of `element`. Use this function only if you know there is a linear, one-to-one, hierarchy below `element`. Otherwise, if `element` has either no unignored children or multiple unignored children, this function fails and returns `nil`.

## See Also

### Getting Accessibility Objects

- [unignoredAncestor(of:)](unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [unignoredChildren(from:)](unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredChildrenForOnlyChild(from:)](unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

# NSAccessibilityUnignoredDescendant (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns an unignored accessibility object, descending the hierarchy, if necessary.

## Declaration

```objectivec
extern idNSAccessibilityUnignoredDescendant(id element);
```

<a id="Discussion"></a>

## Discussion

Tests whether `element` is an ignored object, returning either `element`, if it is not ignored, or the first unignored descendant of `element`. Use this function only if you know there is a linear, one-to-one, hierarchy below `element`. Otherwise, if `element` has either no unignored children or multiple unignored children, this function fails and returns `nil`.

## See Also

### Getting Accessibility Objects

- [NSAccessibilityUnignoredAncestor](unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildren](unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildrenForOnlyChild](unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
