> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/persistentidentifier](https://developer.apple.com/documentation/foundation/nsfileversion/persistentidentifier)

# persistentIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for this version of the file.

## Declaration

```swift
var persistentIdentifier: any NSCoding { get }
```

<a id="Discussion"></a>

## Discussion

You can save the value of this property persistently and use it to recreate the version object later. When recreating the version object using the [version(itemAt:forPersistentIdentifier:)](version%28itemat_forpersistentidentifier_%29.md) method, the version object returned is equivalent to the current object.

## See Also

### Accessing the Version Information

- [url](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [isDiscardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.

# persistentIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for this version of the file.

## Declaration

```objectivec
@property (retain, readonly) id<NSCoding> persistentIdentifier;
```

<a id="Discussion"></a>

## Discussion

You can save the value of this property persistently and use it to recreate the version object later. When recreating the version object using the [versionOfItemAtURL:forPersistentIdentifier:](version%28itemat_forpersistentidentifier_%29.md) method, the version object returned is equivalent to the current object.

## See Also

### Accessing the Version Information

- [URL](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [discardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.
