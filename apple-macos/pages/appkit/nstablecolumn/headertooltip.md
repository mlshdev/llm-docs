> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/headertooltip](https://developer.apple.com/documentation/appkit/nstablecolumn/headertooltip)

# headerToolTip (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The string that’s displayed in a help tag over the table column header.

## Declaration

```swift
var headerToolTip: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, the table column header doesn’t display a help tag (also known as a tooltip). Otherwise, the string is displayed in a help tag when the pointer pauses over the header of the table column. The default value of this property is `nil`.

# headerToolTip (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The string that’s displayed in a help tag over the table column header.

## Declaration

```objectivec
@property (copy, nullable) NSString * headerToolTip;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, the table column header doesn’t display a help tag (also known as a tooltip). Otherwise, the string is displayed in a help tag when the pointer pauses over the header of the table column. The default value of this property is `nil`.
