> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/containerdisplayname](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/containerdisplayname)

# containerDisplayName (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A localized string that specifies the name of a container to which the item belongs, suitable to display in the user interface.

## Declaration

```swift
var containerDisplayName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For example, a container display name might be the title of a series of books. When you specify the containment properties, Spotlight can treat individual items as part of an ordered set.

## See Also

### Describing containment

- [containerIdentifier](containeridentifier.md): The identifier of the container to which the item belongs.
- [containerOrder](containerorder.md): The order of the item within the container.
- [containerTitle](containertitle.md): The title of the container to which the item belongs.

# containerDisplayName (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A localized string that specifies the name of a container to which the item belongs, suitable to display in the user interface.

## Declaration

```objectivec
@property (copy, nullable) NSString * containerDisplayName;
```

<a id="Discussion"></a>

## Discussion

For example, a container display name might be the title of a series of books. When you specify the containment properties, Spotlight can treat individual items as part of an ordered set.

## See Also

### Describing containment

- [containerIdentifier](containeridentifier.md): The identifier of the container to which the item belongs.
- [containerOrder](containerorder.md): The order of the item within the container.
- [containerTitle](containertitle.md): The title of the container to which the item belongs.
