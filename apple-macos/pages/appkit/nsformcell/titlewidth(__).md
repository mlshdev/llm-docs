> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/titlewidth(_:)](https://developer.apple.com/documentation/appkit/nsformcell/titlewidth(_:))

# titleWidth(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the width of the title field constrained to the specified size.

## Declaration

```swift
func titleWidth(_ size: NSSize) -> CGFloat
```

## Parameters

- `size`: The maximum size of the field when calculated by the Application Kit.

<a id="return-value"></a>

## Return Value

The width of the title field, measured in points in the user coordinate space.

<a id="Discussion"></a>

## Discussion

If you set the width using [titleWidth](titlewidth.md), this method returns the value you set; otherwise, the Application Kit calculates the width, constraining the field size to the specified value.

## See Also

### Related Documentation

- [titleWidth](titlewidth.md): The width of the title field.

# titleWidth: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the width of the title field constrained to the specified size.

## Declaration

```objectivec
- (CGFloat) titleWidth:(NSSize) size;
```

## Parameters

- `size`: The maximum size of the field when calculated by the Application Kit.

<a id="return-value"></a>

## Return Value

The width of the title field, measured in points in the user coordinate space.

<a id="Discussion"></a>

## Discussion

If you set the width using [titleWidth](titlewidth.md), this method returns the value you set; otherwise, the Application Kit calculates the width, constraining the field size to the specified value.

## See Also

### Related Documentation

- [titleWidth](titlewidth.md): The width of the title field.
