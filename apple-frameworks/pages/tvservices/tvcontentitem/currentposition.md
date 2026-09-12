> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/currentposition](https://developer.apple.com/documentation/tvservices/tvcontentitem/currentposition)

# currentPosition (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The index location, measured in seconds, at which the user last played this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
@NSCopying var currentPosition: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The number is interpreted as a double number of seconds.

## See Also

### Inspecting the Playback Properties

- [hasPlayedToEnd](hasplayedtoend.md): Deprecated. A Boolean value indicating whether the user can be considered to have finished this item.
- [lastAccessedDate](lastaccesseddate.md): Deprecated. The date when the user last accessed this item.

# currentPosition (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The index location, measured in seconds, at which the user last played this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * currentPosition;
```

<a id="Discussion"></a>

## Discussion

The number is interpreted as a double number of seconds.

## See Also

### Inspecting the Playback Properties

- [hasPlayedToEnd](hasplayedtoend.md): Deprecated. A Boolean value indicating whether the user can be considered to have finished this item.
- [lastAccessedDate](lastaccesseddate.md): Deprecated. The date when the user last accessed this item.
