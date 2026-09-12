> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlist/forwarditem](https://developer.apple.com/documentation/webkit/wkbackforwardlist/forwarditem)

# forwardItem (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The item immediately following the current item, if any.

## Declaration

```swift
var forwardItem: WKBackForwardListItem? { get }
```

<a id="Discussion"></a>

## Discussion

If the current item is the last item in the list, this value in this property is `nil`.

## See Also

### Getting the Most Recent Items

- [backItem](backitem.md): The item immediately preceding the current item, if any.
- [currentItem](currentitem.md): The current item.

# forwardItem (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The item immediately following the current item, if any.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) WKBackForwardListItem * forwardItem;
```

<a id="Discussion"></a>

## Discussion

If the current item is the last item in the list, this value in this property is `nil`.

## See Also

### Getting the Most Recent Items

- [backItem](backitem.md): The item immediately preceding the current item, if any.
- [currentItem](currentitem.md): The current item.
