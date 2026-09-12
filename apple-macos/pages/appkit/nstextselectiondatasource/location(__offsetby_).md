> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/location(_:offsetby:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/location(_:offsetby:))

# location(\_:offsetBy:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new location using the location and offset you specify.

## Declaration

```swift
func location(_ location: any NSTextLocation, offsetBy offset: Int) -> (any NSTextLocation)?
```

## Parameters

- `location`: The starting location in the selection.
- `offset`: An offset that describes the extent of the new location.

<a id="return-value"></a>

## Return Value

A new `NSTextLocation, or nil` when the inputs don’t produce any legal location, such as when the input is an out of bounds index.

<a id="Discussion"></a>

## Discussion

The offset value can be positive or negative indicating the logical direction.

## See Also

### Finding specific content in the selection

- [lineFragmentRange(for:inContainerAt:)](linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [offset(from:to:)](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRange(for:enclosing:)](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.

# locationFromLocation:withOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new location using the location and offset you specify.

## Declaration

```objectivec
- (id<NSTextLocation>) locationFromLocation:(id<NSTextLocation>) location withOffset:(NSInteger) offset;
```

## Parameters

- `location`: The starting location in the selection.
- `offset`: An offset that describes the extent of the new location.

<a id="return-value"></a>

## Return Value

A new `NSTextLocation, or nil` when the inputs don’t produce any legal location, such as when the input is an out of bounds index.

<a id="Discussion"></a>

## Discussion

The offset value can be positive or negative indicating the logical direction.

## See Also

### Finding specific content in the selection

- [lineFragmentRangeForPoint:inContainerAtLocation:](linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRangeForSelectionGranularity:enclosingLocation:](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.
