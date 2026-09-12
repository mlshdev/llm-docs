> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentidentifier/container](https://developer.apple.com/documentation/tvservices/tvcontentidentifier/container)

# container (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The container that this content item is contained in.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```swift
@NSCopying var container: TVContentIdentifier? { get }
```

<a id="Discussion"></a>

## Discussion

Typically, this is the content identifier for the next larger grouping that this item is part of. For example, a podcast episode could be part of a larger podcast season, which could in turn be part of an entire podcast series. In this case, all three layers—episodes, seasons, and the series—would need their own unique identifiers.

The container value may be `nil`, in which case this item represents a top-level content item.

## See Also

### Inspecting an Identifier’s Contents

- [identifier](identifier.md): Deprecated. The string that identifies this content item.

# container (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The container that this content item is contained in.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) TVContentIdentifier * container;
```

<a id="Discussion"></a>

## Discussion

Typically, this is the content identifier for the next larger grouping that this item is part of. For example, a podcast episode could be part of a larger podcast season, which could in turn be part of an entire podcast series. In this case, all three layers—episodes, seasons, and the series—would need their own unique identifiers.

The container value may be `nil`, in which case this item represents a top-level content item.

## See Also

### Inspecting an Identifier’s Contents

- [identifier](identifier.md): Deprecated. The string that identifies this content item.
