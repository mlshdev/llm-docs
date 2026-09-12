> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobject/localidentifier](https://developer.apple.com/documentation/photos/phobject/localidentifier)

# localIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A unique string that persistently identifies the object.

## Declaration

```swift
var localIdentifier: String { get }
```

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Use this string to find the object by using the [fetchAssets(withLocalIdentifiers:options:)](../phasset/fetchassets%28withlocalidentifiers_options_%29.md), [fetchAssetCollections(withLocalIdentifiers:options:)](../phassetcollection/fetchassetcollections%28withlocalidentifiers_options_%29.md), or [fetchCollectionLists(withLocalIdentifiers:options:)](../phcollectionlist/fetchcollectionlists%28withlocalidentifiers_options_%29.md) method.

# localIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A unique string that persistently identifies the object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * localIdentifier;
```

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Use this string to find the object by using the [fetchAssetsWithLocalIdentifiers:options:](../phasset/fetchassets%28withlocalidentifiers_options_%29.md), [fetchAssetCollectionsWithLocalIdentifiers:options:](../phassetcollection/fetchassetcollections%28withlocalidentifiers_options_%29.md), or [fetchCollectionListsWithLocalIdentifiers:options:](../phcollectionlist/fetchcollectionlists%28withlocalidentifiers_options_%29.md) method.
