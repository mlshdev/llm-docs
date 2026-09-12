> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/modificationdate](https://developer.apple.com/documentation/foundation/nsfileversion/modificationdate)

# modificationDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The modification date of the version.

## Declaration

```swift
var modificationDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

If the version has been deleted, this value is `nil`.

## See Also

### Accessing the Version Information

- [url](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
- [isDiscardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.

# modificationDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The modification date of the version.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * modificationDate;
```

<a id="Discussion"></a>

## Discussion

If the version has been deleted, this value is `nil`.

## See Also

### Accessing the Version Information

- [URL](url.md): The URL identifying the location of the file associated with the file version object.
- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
- [discardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.
