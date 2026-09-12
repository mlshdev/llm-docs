> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/hasplayedtoend](https://developer.apple.com/documentation/tvservices/tvcontentitem/hasplayedtoend)

# hasPlayedToEnd (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A Boolean value indicating whether the user can be considered to have finished this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
@NSCopying var hasPlayedToEnd: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The number of this property is interpreted as a Boolean value.

## See Also

### Inspecting the Playback Properties

- [currentPosition](currentposition.md): Deprecated. The index location, measured in seconds, at which the user last played this item.
- [lastAccessedDate](lastaccesseddate.md): Deprecated. The date when the user last accessed this item.

# hasPlayedToEnd (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A Boolean value indicating whether the user can be considered to have finished this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * hasPlayedToEnd;
```

<a id="Discussion"></a>

## Discussion

The number of this property is interpreted as a Boolean value.

## See Also

### Inspecting the Playback Properties

- [currentPosition](currentposition.md): Deprecated. The index location, measured in seconds, at which the user last played this item.
- [lastAccessedDate](lastaccesseddate.md): Deprecated. The date when the user last accessed this item.
