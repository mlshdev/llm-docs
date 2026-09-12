> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/userowned](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/userowned)

# userOwned (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A value that indicates the user purchased or owns the item.

## Declaration

```swift
var userOwned: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Examples of items to set this property on include songs and movies the user purchases.

## See Also

### Describing user involvement

- [userCreated](usercreated.md): A value that indicates the user created the item.
- [userCurated](usercurated.md): A value that indicates the user selected the item.

# userOwned (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A value that indicates the user purchased or owns the item.

## Declaration

```objectivec
@property (strong, getter=isUserOwned, nullable) NSNumber * userOwned;
```

<a id="Discussion"></a>

## Discussion

Examples of items to set this property on include songs and movies the user purchases.

## See Also

### Describing user involvement

- [userCreated](usercreated.md): A value that indicates the user created the item.
- [userCurated](usercurated.md): A value that indicates the user selected the item.
