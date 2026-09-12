> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlist/currentitem](https://developer.apple.com/documentation/webkit/wkbackforwardlist/currentitem)

# currentItem (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The current item.

## Declaration

```swift
var currentItem: WKBackForwardListItem? { get }
```

## See Also

### Getting the Most Recent Items

- [backItem](backitem.md): The item immediately preceding the current item, if any.
- [forwardItem](forwarditem.md): The item immediately following the current item, if any.

# currentItem (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The current item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) WKBackForwardListItem * currentItem;
```

## See Also

### Getting the Most Recent Items

- [backItem](backitem.md): The item immediately preceding the current item, if any.
- [forwardItem](forwarditem.md): The item immediately following the current item, if any.
