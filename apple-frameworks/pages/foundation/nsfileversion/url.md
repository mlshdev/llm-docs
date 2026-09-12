> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/url](https://developer.apple.com/documentation/foundation/nsfileversion/url)

# url (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL identifying the location of the file associated with the file version object.

## Declaration

```swift
var url: URL { get }
```

<a id="Discussion"></a>

## Discussion

The URL identifies the location of the file associated with this version. If this version of the file has been deleted, the value in this property is `nil`.

Do not display any part of this URL to the user. The location of file versions is managed by the system and should not be exposed to the user. If you want to present the name of a file version, use the [localizedName](localizedname.md) property.

## See Also

### Accessing the Version Information

- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
- [isDiscardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.

# URL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL identifying the location of the file associated with the file version object.

## Declaration

```objectivec
@property (copy, readonly) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

The URL identifies the location of the file associated with this version. If this version of the file has been deleted, the value in this property is `nil`.

Do not display any part of this URL to the user. The location of file versions is managed by the system and should not be exposed to the user. If you want to present the name of a file version, use the [localizedName](localizedname.md) property.

## See Also

### Accessing the Version Information

- [localizedName](localizedname.md): The string containing the user-presentable name of the file version.
- [localizedNameOfSavingComputer](localizednameofsavingcomputer.md): The user-presentable name of the computer on which the revision was saved.
- [modificationDate](modificationdate.md): The modification date of the version.
- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.
- [discardable](isdiscardable.md): A Boolean value that specifies whether the system can delete the associated file at some future time.
