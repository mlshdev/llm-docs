> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/usercurated](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/usercurated)

# userCurated (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A value that indicates the user selected the item.

## Declaration

```swift
var userCurated: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Examples of items to set this property on include media content the user downloads and websites or news articles the user bookmarks.

## See Also

### Describing user involvement

- [userCreated](usercreated.md): A value that indicates the user created the item.
- [userOwned](userowned.md): A value that indicates the user purchased or owns the item.

# userCurated (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A value that indicates the user selected the item.

## Declaration

```objectivec
@property (strong, getter=isUserCurated, nullable) NSNumber * userCurated;
```

<a id="Discussion"></a>

## Discussion

Examples of items to set this property on include media content the user downloads and websites or news articles the user bookmarks.

## See Also

### Describing user involvement

- [userCreated](usercreated.md): A value that indicates the user created the item.
- [userOwned](userowned.md): A value that indicates the user purchased or owns the item.
