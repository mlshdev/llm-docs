> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollection/cancontaincollections](https://developer.apple.com/documentation/photos/phcollection/cancontaincollections)

# canContainCollections (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the collection can contain other collections.

## Declaration

```swift
var canContainCollections: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the collection is a [PHCollectionList](../phcollectionlist.md) object; otherwise, `false`. For details on collection lists, see [PHCollectionList](../phcollectionlist.md).

## See Also

### Determining Collection Capabilities

- [canContainAssets](cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canPerform(\_:)](canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
- [PHCollectionEditOperation](../phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerform(\_:)](canperform%28__%29.md) method.

# canContainCollections (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the collection can contain other collections.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL canContainCollections;
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the collection is a [PHCollectionList](../phcollectionlist.md) object; otherwise, `false`. For details on collection lists, see [PHCollectionList](../phcollectionlist.md).

## See Also

### Determining Collection Capabilities

- [canContainAssets](cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canPerformEditOperation:](canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
- [PHCollectionEditOperation](../phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerformEditOperation:](canperform%28__%29.md) method.
