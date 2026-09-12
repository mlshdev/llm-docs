> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/selectedindex](https://developer.apple.com/documentation/appkit/nsscrubber/selectedindex)

# selectedIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The index of the selected item in the scrubber.

## Declaration

```swift
var selectedIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value of this property is `-1`. If you set this property through the scrubber’s animator proxy, the selection change animates.

To use a scrubber’s animator proxy when changing the selected item, employ the [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md) protocol, using code like this: `scrubber.animator.selectedIndex = 123`

## See Also

### Getting the state of the scrubber

- [numberOfItems](numberofitems.md): The number of items represented by the scrubber.
- [highlightedIndex](highlightedindex.md): The index of the highlighted item in the scrubber.

# selectedIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The index of the selected item in the scrubber.

## Declaration

```objectivec
@property NSInteger selectedIndex;
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value of this property is `-1`. If you set this property through the scrubber’s animator proxy, the selection change animates.

To use a scrubber’s animator proxy when changing the selected item, employ the [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md) protocol, using code like this: `scrubber.animator.selectedIndex = 123`

## See Also

### Getting the state of the scrubber

- [numberOfItems](numberofitems.md): The number of items represented by the scrubber.
- [highlightedIndex](highlightedindex.md): The index of the highlighted item in the scrubber.
