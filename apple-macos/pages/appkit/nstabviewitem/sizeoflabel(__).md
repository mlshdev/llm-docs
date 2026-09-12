> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewitem/sizeoflabel(_:)](https://developer.apple.com/documentation/appkit/nstabviewitem/sizeoflabel(_:))

# sizeOfLabel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the size of the receiver’s label.

## Declaration

```swift
func sizeOfLabel(_ computeMin: Bool) -> NSSize
```

<a id="Discussion"></a>

## Discussion

If `shouldTruncateLabel` is [false](https://developer.apple.com/documentation/swift/false), returns the size of the receiver’s full label. If `shouldTruncateLabel` is [true](https://developer.apple.com/documentation/swift/true), returns the truncated size. If your application does anything to change the size of tab labels, such as overriding the [drawLabel(\_:in:)](drawlabel%28__in_%29.md) method to add an icon to each tab, you should override [sizeOfLabel(\_:)](sizeoflabel%28__%29.md) too so the NSTabView knows the correct size for the tab label.

## See Also

### Related Documentation

- [font](../nstabview/font.md): The font used for the tab view’s label text.

### Working with Labels

- [drawLabel(\_:in:)](drawlabel%28__in_%29.md): Draws the receiver’s label in `tabRect`, which is the area between the curved end caps.
- [label](label.md): Sets the label text for the receiver to `label`.

# sizeOfLabel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the size of the receiver’s label.

## Declaration

```objectivec
- (NSSize) sizeOfLabel:(BOOL) computeMin;
```

<a id="Discussion"></a>

## Discussion

If `shouldTruncateLabel` is [false](https://developer.apple.com/documentation/swift/false), returns the size of the receiver’s full label. If `shouldTruncateLabel` is [true](https://developer.apple.com/documentation/swift/true), returns the truncated size. If your application does anything to change the size of tab labels, such as overriding the [drawLabel:inRect:](drawlabel%28__in_%29.md) method to add an icon to each tab, you should override [sizeOfLabel:](sizeoflabel%28__%29.md) too so the NSTabView knows the correct size for the tab label.

## See Also

### Related Documentation

- [font](../nstabview/font.md): The font used for the tab view’s label text.

### Working with Labels

- [drawLabel:inRect:](drawlabel%28__in_%29.md): Draws the receiver’s label in `tabRect`, which is the area between the curved end caps.
- [label](label.md): Sets the label text for the receiver to `label`.
