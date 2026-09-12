> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlist/forwardlist](https://developer.apple.com/documentation/webkit/wkbackforwardlist/forwardlist)

# forwardList (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The array of items that follow the current item.

## Declaration

```swift
var forwardList: [WKBackForwardListItem] { get }
```

<a id="Discussion"></a>

## Discussion

The items are in the order in which the web view originally visited them.

## See Also

### Getting Sublists

- [backList](backlist.md): The array of items that precede the current item.

# forwardList (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The array of items that follow the current item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<WKBackForwardListItem *> * forwardList;
```

<a id="Discussion"></a>

## Discussion

The items are in the order in which the web view originally visited them.

## See Also

### Getting Sublists

- [backList](backlist.md): The array of items that precede the current item.
