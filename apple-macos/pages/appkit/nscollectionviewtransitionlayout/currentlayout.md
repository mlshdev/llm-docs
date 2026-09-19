> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscollectionviewtransitionlayout/currentlayout

# currentLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The collection view’s current layout object.

## Declaration

```swift
var currentLayout: NSCollectionViewLayout { get }
```

<a id="Discussion"></a>

## Discussion

Use this object to retrieve the initial layout attributes for elements of the collection view. If the transition is ultimately cancelled, the collection view animates its items back to the attributes provided by this object.

## See Also

### Accessing the Layout Objects

- [nextLayout](nextlayout.md): The collection view’s new layout object.

# currentLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The collection view’s current layout object.

## Declaration

```objectivec
@property (readonly) NSCollectionViewLayout * currentLayout;
```

<a id="Discussion"></a>

## Discussion

Use this object to retrieve the initial layout attributes for elements of the collection view. If the transition is ultimately cancelled, the collection view animates its items back to the attributes provided by this object.

## See Also

### Accessing the Layout Objects

- [nextLayout](nextlayout.md): The collection view’s new layout object.
