> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.property](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.property)

# bounce (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies whether the orthogonal scrolling section bounces past the edge of content and back again.

## Declaration

```swift
var bounce: UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to specify whether the section stops scrolling immediately upon encountering the content boundary, or if it continues scrolling past the boundary and then bounces back.

## See Also

### Specifying the bounce behavior

- [UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce](bounce-swift.enum.md): Constants that specify whether the orthogonal scrolling section bounces past the edge of content and back again.

# bounce (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies whether the orthogonal scrolling section bounces past the edge of content and back again.

## Declaration

```objectivec
@property (nonatomic) UICollectionLayoutSectionOrthogonalScrollingBounce bounce;
```

<a id="Discussion"></a>

## Discussion

Set this value to specify whether the section stops scrolling immediately upon encountering the content boundary, or if it continues scrolling past the boundary and then bounces back.

## See Also

### Specifying the bounce behavior

- [UICollectionLayoutSectionOrthogonalScrollingBounce](bounce-swift.enum.md): Constants that specify whether the orthogonal scrolling section bounces past the edge of content and back again.
