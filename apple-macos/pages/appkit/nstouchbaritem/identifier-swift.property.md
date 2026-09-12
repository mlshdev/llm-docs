> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/identifier-swift.property](https://developer.apple.com/documentation/appkit/nstouchbaritem/identifier-swift.property)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier for this item.

## Declaration

```swift
var identifier: NSTouchBarItem.Identifier { get }
```

<a id="Discussion"></a>

## Discussion

This read-only property returns the value the item was initialized with.

For all items other than spaces, this value must be globally unique.

## See Also

### Identifying a bar item

- [NSTouchBarItem.Identifier](identifier-swift.struct.md): An identifier for an item in the Touch Bar.

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier for this item.

## Declaration

```objectivec
@property (copy, readonly) NSTouchBarItemIdentifier identifier;
```

<a id="Discussion"></a>

## Discussion

This read-only property returns the value the item was initialized with.

For all items other than spaces, this value must be globally unique.

## See Also

### Identifying a bar item

- [NSTouchBarItemIdentifier](identifier-swift.struct.md): An identifier for an item in the Touch Bar.
