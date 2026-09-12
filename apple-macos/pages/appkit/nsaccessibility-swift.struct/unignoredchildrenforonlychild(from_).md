> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/unignoredchildrenforonlychild(from:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/unignoredchildrenforonlychild(from:))

# unignoredChildrenForOnlyChild(from:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

## Declaration

```swift
static func unignoredChildrenForOnlyChild(from originalChild: Any) -> [Any]
```

<a id="Discussion"></a>

## Discussion

Tests whether `originalChild` is an ignored object and returns an array containing either `originalChild`, if it is not ignored, or its unignored descendants.

## See Also

### Getting Accessibility Objects

- [unignoredAncestor(of:)](unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [unignoredChildren(from:)](unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredDescendant(of:)](unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.

# NSAccessibilityUnignoredChildrenForOnlyChild (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

## Declaration

```objectivec
extern NSArray *NSAccessibilityUnignoredChildrenForOnlyChild(id originalChild);
```

<a id="Discussion"></a>

## Discussion

Tests whether `originalChild` is an ignored object and returns an array containing either `originalChild`, if it is not ignored, or its unignored descendants.

## See Also

### Getting Accessibility Objects

- [NSAccessibilityUnignoredAncestor](unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildren](unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredDescendant](unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.
