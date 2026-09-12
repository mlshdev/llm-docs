> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewtransitionlayout/currentlayout](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout/currentlayout)

# currentLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The collection view’s current layout object.

## Declaration

```swift
var currentLayout: UICollectionViewLayout { get }
```

<a id="Discussion"></a>

## Discussion

This object provides the layout attributes representing the initial position of items in the collection view. If you ultimately cancel the transition, the collection view animates its items back to the positions provided by this object.

## See Also

### Accessing the layout objects

- [nextLayout](nextlayout.md): The collection view’s new layout object.

# currentLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The collection view’s current layout object.

## Declaration

```objectivec
@property (nonatomic, readonly) UICollectionViewLayout * currentLayout;
```

<a id="Discussion"></a>

## Discussion

This object provides the layout attributes representing the initial position of items in the collection view. If you ultimately cancel the transition, the collection view animates its items back to the positions provided by this object.

## See Also

### Accessing the layout objects

- [nextLayout](nextlayout.md): The collection view’s new layout object.
