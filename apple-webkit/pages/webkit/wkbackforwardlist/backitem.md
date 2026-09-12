> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlist/backitem](https://developer.apple.com/documentation/webkit/wkbackforwardlist/backitem)

# backItem (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The item immediately preceding the current item, if any.

## Declaration

```swift
var backItem: WKBackForwardListItem? { get }
```

<a id="Discussion"></a>

## Discussion

If the current item is the first item in the list, the value in this property is `nil`.

## See Also

### Getting the Most Recent Items

- [currentItem](currentitem.md): The current item.
- [forwardItem](forwarditem.md): The item immediately following the current item, if any.

# backItem (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The item immediately preceding the current item, if any.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) WKBackForwardListItem * backItem;
```

<a id="Discussion"></a>

## Discussion

If the current item is the first item in the list, the value in this property is `nil`.

## See Also

### Getting the Most Recent Items

- [currentItem](currentitem.md): The current item.
- [forwardItem](forwarditem.md): The item immediately following the current item, if any.
