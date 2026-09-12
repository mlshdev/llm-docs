> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistsubtype/rootfolder](https://developer.apple.com/documentation/photos/phcollectionlistsubtype/rootfolder)

# PHCollectionListSubtype.rootFolder (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The collection list that contains the top-level user collections.

## Declaration

```swift
case rootFolder
```

<a id="discussion"></a>

## Discussion

There is always one root folder in the library and does not allow [PHCollectionEditOperation.rename](../phcollectioneditoperation/rename.md) or [PHCollectionEditOperation.delete](../phcollectioneditoperation/delete.md)

## See Also

### Constants

- [PHCollectionListSubtype.momentListCluster](momentlistcluster.md): Deprecated. The collection list is a moment cluster, grouping several related moments.
- [PHCollectionListSubtype.momentListYear](momentlistyear.md): Deprecated. The collection list is a moment year, grouping all moments from one or more calendar years.
- [PHCollectionListSubtype.regularFolder](regularfolder.md): The collection list is a folder containing albums or other folders.
- [PHCollectionListSubtype.smartFolderEvents](smartfolderevents.md): The collection list is a smart folder containing one or more Events synced from a Mac.
- [PHCollectionListSubtype.smartFolderFaces](smartfolderfaces.md): The collection list is a smart folder containing one or more Faces groups synced from a Mac.
- [PHCollectionListSubtype.any](any.md): Use this value to fetch collection lists of all possible subtypes.

# PHCollectionListSubtypeRootFolder (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The collection list that contains the top-level user collections.

## Declaration

```objectivec
PHCollectionListSubtypeRootFolder
```

<a id="discussion"></a>

## Discussion

There is always one root folder in the library and does not allow [PHCollectionEditOperationRename](../phcollectioneditoperation/rename.md) or [PHCollectionEditOperationDelete](../phcollectioneditoperation/delete.md)

## See Also

### Constants

- [PHCollectionListSubtypeMomentListCluster](momentlistcluster.md): Deprecated. The collection list is a moment cluster, grouping several related moments.
- [PHCollectionListSubtypeMomentListYear](momentlistyear.md): Deprecated. The collection list is a moment year, grouping all moments from one or more calendar years.
- [PHCollectionListSubtypeRegularFolder](regularfolder.md): The collection list is a folder containing albums or other folders.
- [PHCollectionListSubtypeSmartFolderEvents](smartfolderevents.md): The collection list is a smart folder containing one or more Events synced from a Mac.
- [PHCollectionListSubtypeSmartFolderFaces](smartfolderfaces.md): The collection list is a smart folder containing one or more Faces groups synced from a Mac.
- [PHCollectionListSubtypeAny](any.md): Use this value to fetch collection lists of all possible subtypes.
