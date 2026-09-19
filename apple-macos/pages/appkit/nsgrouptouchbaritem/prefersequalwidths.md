> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/prefersequalwidths

# prefersEqualWidths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+

A Boolean value that specifies that items should have equal widths when possible.

## Declaration

```swift
var prefersEqualWidths: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), items in the [groupTouchBar](grouptouchbar.md) are sized to have equal widths when possible.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring item width

- [preferredItemWidth](preferreditemwidth.md): The preferred width for items in the group.

# prefersEqualWidths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.13+

A Boolean value that specifies that items should have equal widths when possible.

## Declaration

```objectivec
@property BOOL prefersEqualWidths;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), items in the [groupTouchBar](grouptouchbar.md) are sized to have equal widths when possible.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring item width

- [preferredItemWidth](preferreditemwidth.md): The preferred width for items in the group.
