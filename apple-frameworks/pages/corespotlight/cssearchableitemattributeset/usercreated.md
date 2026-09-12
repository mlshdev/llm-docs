> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/usercreated](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/usercreated)

# userCreated (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A value that indicates the user created the item.

## Declaration

```swift
var userCreated: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Examples of items to set this property on include notes and documents that the user creates or modifies.

## See Also

### Describing user involvement

- [userCurated](usercurated.md): A value that indicates the user selected the item.
- [userOwned](userowned.md): A value that indicates the user purchased or owns the item.

# userCreated (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A value that indicates the user created the item.

## Declaration

```objectivec
@property (strong, getter=isUserCreated, nullable) NSNumber * userCreated;
```

<a id="Discussion"></a>

## Discussion

Examples of items to set this property on include notes and documents that the user creates or modifies.

## See Also

### Describing user involvement

- [userCurated](usercurated.md): A value that indicates the user selected the item.
- [userOwned](userowned.md): A value that indicates the user purchased or owns the item.
