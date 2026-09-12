> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgrouptouchbaritem/preferreditemwidth](https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/preferreditemwidth)

# preferredItemWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+

The preferred width for items in the group.

## Declaration

```swift
var preferredItemWidth: CGFloat { get set }
```

<a id="discussion"></a>

## Discussion

This width applies when [prefersEqualWidths](prefersequalwidths.md) is [true](https://developer.apple.com/documentation/swift/true).

This is the width that items are set to if there is enough room, and if the items don’t clip.

This value is ignored if it is negative. The default value is `-1`.

## See Also

### Configuring item width

- [prefersEqualWidths](prefersequalwidths.md): A Boolean value that specifies that items should have equal widths when possible.

# preferredItemWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.13+

The preferred width for items in the group.

## Declaration

```objectivec
@property CGFloat preferredItemWidth;
```

<a id="discussion"></a>

## Discussion

This width applies when [prefersEqualWidths](prefersequalwidths.md) is [true](https://developer.apple.com/documentation/swift/true).

This is the width that items are set to if there is enough room, and if the items don’t clip.

This value is ignored if it is negative. The default value is `-1`.

## See Also

### Configuring item width

- [prefersEqualWidths](prefersequalwidths.md): A Boolean value that specifies that items should have equal widths when possible.
