> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlist/item(at:)](https://developer.apple.com/documentation/webkit/wkbackforwardlist/item(at:))

# item(at:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns the item at the relative offset from the current item.

## Declaration

```swift
func item(at index: Int) -> WKBackForwardListItem?
```

## Parameters

- `index`: The offset of the desired item from the current item. Specify `0` for the current item, `-1` for the immediately preceding item, `1` for the immediately following item, and so on.

<a id="return-value"></a>

## Return Value

The item at the specified offset from the current item, or `nil` if the `index` exceeds the limits of the list.

# itemAtIndex: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns the item at the relative offset from the current item.

## Declaration

```objectivec
- (WKBackForwardListItem *) itemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The offset of the desired item from the current item. Specify `0` for the current item, `-1` for the immediately preceding item, `1` for the immediately following item, and so on.

<a id="return-value"></a>

## Return Value

The item at the specified offset from the current item, or `nil` if the `index` exceeds the limits of the list.
