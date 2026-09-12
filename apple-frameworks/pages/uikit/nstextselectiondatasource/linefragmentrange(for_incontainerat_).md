> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectiondatasource/linefragmentrange(for:incontainerat:)](https://developer.apple.com/documentation/uikit/nstextselectiondatasource/linefragmentrange(for:incontainerat:))

# lineFragmentRange(for:inContainerAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the range of the line fragment that contains the point you specify.

## Declaration

```swift
func lineFragmentRange(for point: CGPoint, inContainerAt location: any NSTextLocation) -> NSTextRange?
```

## Parameters

- `point`: The starting point that contains the line fragment, in the coordinate system of `location`.
- `location`: The location of the line fragment.

<a id="return-value"></a>

## Return Value

An `NSTextRange` that describes the location of the line fragment, or nil if the range isn’t found.

## See Also

### Finding specific content in the selection

- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [offset(from:to:)](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRange(for:enclosing:)](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.

# lineFragmentRangeForPoint:inContainerAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the range of the line fragment that contains the point you specify.

## Declaration

```objectivec
- (NSTextRange *) lineFragmentRangeForPoint:(CGPoint) point inContainerAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `point`: The starting point that contains the line fragment, in the coordinate system of `location`.
- `location`: The location of the line fragment.

<a id="return-value"></a>

## Return Value

An `NSTextRange` that describes the location of the line fragment, or nil if the range isn’t found.

## See Also

### Finding specific content in the selection

- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRangeForSelectionGranularity:enclosingLocation:](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.
