> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberflowlayoutdelegate/scrubber(_:layout:sizeforitemat:)](https://developer.apple.com/documentation/appkit/nsscrubberflowlayoutdelegate/scrubber(_:layout:sizeforitemat:))

# scrubber(\_:layout:sizeForItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Asks the delegate for the size of each item in a scrubber whose items are arranged in a flow layout.

## Declaration

```swift
optional func scrubber(_ scrubber: NSScrubber, layout: NSScrubberFlowLayout, sizeForItemAt itemIndex: Int) -> NSSize
```

## Parameters

- `scrubber`: The scrubber object displaying the items arranged in a flow layout.
- `layout`: The layout object requesting the information.
- `itemIndex`: The index of the item in the scrubber.

<a id="return-value"></a>

## Return Value

The width and height of the item at the specified index in the scrubber.

# scrubber:layout:sizeForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the size of each item in a scrubber whose items are arranged in a flow layout.

## Declaration

```objectivec
- (NSSize) scrubber:(NSScrubber *) scrubber layout:(NSScrubberFlowLayout *) layout sizeForItemAtIndex:(NSInteger) itemIndex;
```

## Parameters

- `scrubber`: The scrubber object displaying the items arranged in a flow layout.
- `layout`: The layout object requesting the information.
- `itemIndex`: The index of the item in the scrubber.

<a id="return-value"></a>

## Return Value

The width and height of the item at the specified index in the scrubber.
