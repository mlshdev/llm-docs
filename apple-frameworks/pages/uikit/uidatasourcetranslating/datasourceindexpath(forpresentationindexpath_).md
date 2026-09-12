> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcetranslating/datasourceindexpath(forpresentationindexpath:)](https://developer.apple.com/documentation/uikit/uidatasourcetranslating/datasourceindexpath(forpresentationindexpath:))

# dataSourceIndexPath(forPresentationIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates an index in your presented layout to the equivalent index in your data source object.

## Declaration

```swift
func dataSourceIndexPath(forPresentationIndexPath presentationIndexPath: IndexPath?) -> IndexPath?
```

## Parameters

- `presentationIndexPath`: The index path of an item in your presentation layer.

<a id="return-value"></a>

## Return Value

The index path of the same item in the data source object, or `nil` if the item is no longer in the data source.

## See Also

### Managing item positions

- [presentationIndexPath(forDataSourceIndexPath:)](presentationindexpath%28fordatasourceindexpath_%29.md): Translates an index in your data source object to the equivalent index in your presented layout.

# dataSourceIndexPathForPresentationIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates an index in your presented layout to the equivalent index in your data source object.

## Declaration

```objectivec
- (NSIndexPath *) dataSourceIndexPathForPresentationIndexPath:(NSIndexPath *) presentationIndexPath;
```

## Parameters

- `presentationIndexPath`: The index path of an item in your presentation layer.

<a id="return-value"></a>

## Return Value

The index path of the same item in the data source object, or `nil` if the item is no longer in the data source.

## See Also

### Managing item positions

- [presentationIndexPathForDataSourceIndexPath:](presentationindexpath%28fordatasourceindexpath_%29.md): Translates an index in your data source object to the equivalent index in your presented layout.
