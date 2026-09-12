> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewitem/drawlabel(_:in:)](https://developer.apple.com/documentation/appkit/nstabviewitem/drawlabel(_:in:))

# drawLabel(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s label in `tabRect`, which is the area between the curved end caps.

## Declaration

```swift
func drawLabel(_ shouldTruncateLabel: Bool, in labelRect: NSRect)
```

<a id="Discussion"></a>

## Discussion

If `shouldTruncateLabel` is [false](https://developer.apple.com/documentation/swift/false), draws the full label in the rectangle specified by `tabRect`. If `shouldTruncateLabel` is [true](https://developer.apple.com/documentation/swift/true), draws the truncated label. You can override this method to perform customized label drawing. For example, you might want to add an icon to each tab in the view.

## See Also

### Working with Labels

- [label](label.md): Sets the label text for the receiver to `label`.
- [sizeOfLabel(\_:)](sizeoflabel%28__%29.md): Calculates the size of the receiver’s label.

# drawLabel:inRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s label in `tabRect`, which is the area between the curved end caps.

## Declaration

```objectivec
- (void) drawLabel:(BOOL) shouldTruncateLabel inRect:(NSRect) labelRect;
```

<a id="Discussion"></a>

## Discussion

If `shouldTruncateLabel` is [false](https://developer.apple.com/documentation/swift/false), draws the full label in the rectangle specified by `tabRect`. If `shouldTruncateLabel` is [true](https://developer.apple.com/documentation/swift/true), draws the truncated label. You can override this method to perform customized label drawing. For example, you might want to add an icon to each tab in the view.

## See Also

### Working with Labels

- [label](label.md): Sets the label text for the receiver to `label`.
- [sizeOfLabel:](sizeoflabel%28__%29.md): Calculates the size of the receiver’s label.
