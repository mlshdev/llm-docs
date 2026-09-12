> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/highlightedindex](https://developer.apple.com/documentation/appkit/nsscrubber/highlightedindex)

# highlightedIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The index of the highlighted item in the scrubber.

## Declaration

```swift
var highlightedIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

If no item is highlighted, the value of this property is `-1`.

## See Also

### Getting the state of the scrubber

- [numberOfItems](numberofitems.md): The number of items represented by the scrubber.
- [selectedIndex](selectedindex.md): The index of the selected item in the scrubber.

# highlightedIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The index of the highlighted item in the scrubber.

## Declaration

```objectivec
@property (readonly) NSInteger highlightedIndex;
```

<a id="Discussion"></a>

## Discussion

If no item is highlighted, the value of this property is `-1`.

## See Also

### Getting the state of the scrubber

- [numberOfItems](numberofitems.md): The number of items represented by the scrubber.
- [selectedIndex](selectedindex.md): The index of the selected item in the scrubber.
