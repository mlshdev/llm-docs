> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/isdiscardable](https://developer.apple.com/documentation/foundation/nsfileversion/isdiscardable)

# isDiscardable (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that specifies whether the system can delete the associated file at some future time.

## Declaration

```swift
var isDiscardable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Marking a file version as discardable gives the system the flexibility to reclaim the space, occupied by the associated file, at some future time. Do not, however, depend on the file being discarded.

After setting this property to [true](https://developer.apple.com/documentation/swift/true), do not set this property to [false](https://developer.apple.com/documentation/swift/false) again. Doing so causes the system to raise an exception. In addition, if you set this property to [true](https://developer.apple.com/documentation/swift/true) for the version of the file returned by the [currentVersionOfItem(at:)](currentversionofitem%28at_%29.md) method, the system raises an exception.

## See Also

### Related Documentation

- [removeOtherVersionsOfItem(at:)](removeotherversionsofitem%28at_%29.md): Removes all versions of a file, except the current one, from the version store.
- [remove()](remove%28%29.md): Remove this version object and its associated file from the version store.

### Accessing the Version Information

- [url](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.

# discardable (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that specifies whether the system can delete the associated file at some future time.

## Declaration

```objectivec
@property (getter=isDiscardable) BOOL discardable;
```

<a id="Discussion"></a>

## Discussion

Marking a file version as discardable gives the system the flexibility to reclaim the space, occupied by the associated file, at some future time. Do not, however, depend on the file being discarded.

After setting this property to [true](https://developer.apple.com/documentation/swift/true), do not set this property to [false](https://developer.apple.com/documentation/swift/false) again. Doing so causes the system to raise an exception. In addition, if you set this property to [true](https://developer.apple.com/documentation/swift/true) for the version of the file returned by the [currentVersionOfItemAtURL:](currentversionofitem%28at_%29.md) method, the system raises an exception.

## See Also

### Related Documentation

- [removeOtherVersionsOfItemAtURL:error:](removeotherversionsofitem%28at_%29.md): Removes all versions of a file, except the current one, from the version store.
- [removeAndReturnError:](remove%28%29.md): Remove this version object and its associated file from the version store.

### Accessing the Version Information

- [URL](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
