> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/numberofsections](https://developer.apple.com/documentation/appkit/nscollectionview/numberofsections)

# numberOfSections (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The number of sections in the collection view.

## Declaration

```swift
var numberOfSections: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the number of sections reported by the data source object. If the collection view does not use a data source object, the value in this property is `1`.

## See Also

### Getting the State of the Collection View

- [numberOfItems(inSection:)](numberofitems%28insection_%29.md): Returns the number of items in the specified section.

# numberOfSections (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The number of sections in the collection view.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfSections;
```

<a id="Discussion"></a>

## Discussion

This property contains the number of sections reported by the data source object. If the collection view does not use a data source object, the value in this property is `1`.

## See Also

### Getting the State of the Collection View

- [numberOfItemsInSection:](numberofitems%28insection_%29.md): Returns the number of items in the specified section.
