> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/lastaccesseddate](https://developer.apple.com/documentation/tvservices/tvcontentitem/lastaccesseddate)

# lastAccessedDate (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The date when the user last accessed this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var lastAccessedDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

A typical use is for content types in which “playing” represents the date when the user last played the item or played a subitem within the group. When the user simply looks at an item, the access date should not change.

## See Also

### Inspecting the Playback Properties

- [currentPosition](currentposition.md): Deprecated. The index location, measured in seconds, at which the user last played this item.
- [hasPlayedToEnd](hasplayedtoend.md): Deprecated. A Boolean value indicating whether the user can be considered to have finished this item.

# lastAccessedDate (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The date when the user last accessed this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * lastAccessedDate;
```

<a id="Discussion"></a>

## Discussion

A typical use is for content types in which “playing” represents the date when the user last played the item or played a subitem within the group. When the user simply looks at an item, the access date should not change.

## See Also

### Inspecting the Playback Properties

- [currentPosition](currentposition.md): Deprecated. The index location, measured in seconds, at which the user last played this item.
- [hasPlayedToEnd](hasplayedtoend.md): Deprecated. A Boolean value indicating whether the user can be considered to have finished this item.
