> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/containerorder](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/containerorder)

# containerOrder (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The order of the item within the container.

## Declaration

```swift
var containerOrder: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

For example, if the container represents a series of books, this property specifies the order in which the books should be read.

## See Also

### Describing containment

- [containerDisplayName](containerdisplayname.md): A localized string that specifies the name of a container to which the item belongs, suitable to display in the user interface.
- [containerIdentifier](containeridentifier.md): The identifier of the container to which the item belongs.
- [containerTitle](containertitle.md): The title of the container to which the item belongs.

# containerOrder (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The order of the item within the container.

## Declaration

```objectivec
@property (strong, nullable) NSNumber * containerOrder;
```

<a id="Discussion"></a>

## Discussion

For example, if the container represents a series of books, this property specifies the order in which the books should be read.

## See Also

### Describing containment

- [containerDisplayName](containerdisplayname.md): A localized string that specifies the name of a container to which the item belongs, suitable to display in the user interface.
- [containerIdentifier](containeridentifier.md): The identifier of the container to which the item belongs.
- [containerTitle](containertitle.md): The title of the container to which the item belongs.
