> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/unignoredchildren(from:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/unignoredchildren(from:))

# unignoredChildren(from:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

## Declaration

```swift
static func unignoredChildren(from originalChildren: [Any]) -> [Any]
```

<a id="Discussion"></a>

## Discussion

This function first tests whether `originalChildren` contains any ignored objects. If the array contains no ignored objects, the function returns `originalChildren`. If the array contains ignored objects, this function returns a new array that contains the contents of `originalChildren`, but with each ignored object replaced by its unignored descendant.

## See Also

### Getting Accessibility Objects

- [unignoredAncestor(of:)](unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [unignoredChildrenForOnlyChild(from:)](unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredDescendant(of:)](unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.

# NSAccessibilityUnignoredChildren (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.

## Declaration

```objectivec
extern NSArray *NSAccessibilityUnignoredChildren(NSArray *originalChildren);
```

<a id="Discussion"></a>

## Discussion

This function first tests whether `originalChildren` contains any ignored objects. If the array contains no ignored objects, the function returns `originalChildren`. If the array contains ignored objects, this function returns a new array that contains the contents of `originalChildren`, but with each ignored object replaced by its unignored descendant.

## See Also

### Getting Accessibility Objects

- [NSAccessibilityUnignoredAncestor](unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildrenForOnlyChild](unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredDescendant](unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.
