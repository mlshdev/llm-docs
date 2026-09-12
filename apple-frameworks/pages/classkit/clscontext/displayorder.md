> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/displayorder](https://developer.apple.com/documentation/classkit/clscontext/displayorder)

# displayOrder (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The position of a context relative to its siblings.

## Declaration

```swift
var displayOrder: Int { get set }
```

## Mentioned In

- [Building missing contexts](../building-missing-contexts.md)

<a id="Discussion"></a>

## Discussion

Setting this value provides a hint to the system about what order you intend sibling contexts to appear in. But this has nothing to do with the order in which a teacher assigns your content. Teachers are free to assign your content in any order they choose.

## See Also

### Managing context presentation

- [topic](topic.md): The area of study to which a context relates.
- [CLSContextTopic](../clscontexttopic.md): The areas of study to which contexts may relate.

# displayOrder (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The position of a context relative to its siblings.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger displayOrder;
```

## Mentioned In

- [Building missing contexts](../building-missing-contexts.md)

<a id="Discussion"></a>

## Discussion

Setting this value provides a hint to the system about what order you intend sibling contexts to appear in. But this has nothing to do with the order in which a teacher assigns your content. Teachers are free to assign your content in any order they choose.

## See Also

### Managing context presentation

- [topic](topic.md): The area of study to which a context relates.
- [CLSContextTopic](../clscontexttopic.md): The areas of study to which contexts may relate.
