> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewtransitionlayout/nextlayout](https://developer.apple.com/documentation/appkit/nscollectionviewtransitionlayout/nextlayout)

# nextLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The collection view’s new layout object.

## Declaration

```swift
var nextLayout: NSCollectionViewLayout { get }
```

<a id="Discussion"></a>

## Discussion

Use this object to retrieve the final layout attributes for elements of the collection view. If the transition completes as expected, the collection view animates its items to the attributes provided by this object.

## See Also

### Accessing the Layout Objects

- [currentLayout](currentlayout.md): The collection view’s current layout object.

# nextLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The collection view’s new layout object.

## Declaration

```objectivec
@property (readonly) NSCollectionViewLayout * nextLayout;
```

<a id="Discussion"></a>

## Discussion

Use this object to retrieve the final layout attributes for elements of the collection view. If the transition completes as expected, the collection view animates its items to the attributes provided by this object.

## See Also

### Accessing the Layout Objects

- [currentLayout](currentlayout.md): The collection view’s current layout object.
