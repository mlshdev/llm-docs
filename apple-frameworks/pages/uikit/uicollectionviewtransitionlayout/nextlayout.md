> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewtransitionlayout/nextlayout](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout/nextlayout)

# nextLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The collection view’s new layout object.

## Declaration

```swift
var nextLayout: UICollectionViewLayout { get }
```

<a id="Discussion"></a>

## Discussion

This object provides the layout attributes representing the new position of items in the collection view. If the transition completes as expected, the collection view animates its items to the positions provided by this object.

## See Also

### Accessing the layout objects

- [currentLayout](currentlayout.md): The collection view’s current layout object.

# nextLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The collection view’s new layout object.

## Declaration

```objectivec
@property (nonatomic, readonly) UICollectionViewLayout * nextLayout;
```

<a id="Discussion"></a>

## Discussion

This object provides the layout attributes representing the new position of items in the collection view. If the transition completes as expected, the collection view animates its items to the positions provided by this object.

## See Also

### Accessing the layout objects

- [currentLayout](currentlayout.md): The collection view’s current layout object.
