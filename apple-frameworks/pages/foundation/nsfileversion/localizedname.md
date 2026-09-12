> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/localizedname](https://developer.apple.com/documentation/foundation/nsfileversion/localizedname)

# localizedName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string containing the user-presentable name of the file version.

## Declaration

```swift
var localizedName: String? { get }
```

<a id="Discussion"></a>

## Discussion

When displaying different versions of a file to the user, you should present this string to the user instead of the version’s URL.

## See Also

### Accessing the Version Information

- [url](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
- [isDiscardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.

# localizedName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string containing the user-presentable name of the file version.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedName;
```

<a id="Discussion"></a>

## Discussion

When displaying different versions of a file to the user, you should present this string to the user instead of the version’s URL.

## See Also

### Accessing the Version Information

- [URL](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
- [discardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.
