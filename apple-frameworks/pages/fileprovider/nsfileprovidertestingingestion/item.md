> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingingestion/item](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingingestion/item)

# item (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

A description of the item that changed.

## Declaration

```swift
var item: NSFileProviderItem? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` for deletion events.

## See Also

### Accessing the Operation’s Data

- [itemIdentifier](itemidentifier.md): The unique identifier for the item that changed.
- [side](side.md): The location where the change occurred.

# item (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

A description of the item that changed.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderItem item;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` for deletion events.

## See Also

### Accessing the Operation’s Data

- [itemIdentifier](itemidentifier.md): The unique identifier for the item that changed.
- [side](side.md): The location where the change occurred.
