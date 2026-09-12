> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcetranslating/presentationindexpath(fordatasourceindexpath:)](https://developer.apple.com/documentation/uikit/uidatasourcetranslating/presentationindexpath(fordatasourceindexpath:))

# presentationIndexPath(forDataSourceIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates an index in your data source object to the equivalent index in your presented layout.

## Declaration

```swift
func presentationIndexPath(forDataSourceIndexPath dataSourceIndexPath: IndexPath?) -> IndexPath?
```

## Parameters

- `dataSourceIndexPath`: The index path of an item in the data source object.

<a id="return-value"></a>

## Return Value

The index path of the same item in the presentation layer of your object, or `nil` if the item is not in the presentation layer.

## See Also

### Managing item positions

- [dataSourceIndexPath(forPresentationIndexPath:)](datasourceindexpath%28forpresentationindexpath_%29.md): Translates an index in your presented layout to the equivalent index in your data source object.

# presentationIndexPathForDataSourceIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates an index in your data source object to the equivalent index in your presented layout.

## Declaration

```objectivec
- (NSIndexPath *) presentationIndexPathForDataSourceIndexPath:(NSIndexPath *) dataSourceIndexPath;
```

## Parameters

- `dataSourceIndexPath`: The index path of an item in the data source object.

<a id="return-value"></a>

## Return Value

The index path of the same item in the presentation layer of your object, or `nil` if the item is not in the presentation layer.

## See Also

### Managing item positions

- [dataSourceIndexPathForPresentationIndexPath:](datasourceindexpath%28forpresentationindexpath_%29.md): Translates an index in your presented layout to the equivalent index in your data source object.
