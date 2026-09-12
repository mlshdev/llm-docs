> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/url(at:effectiverange:)](https://developer.apple.com/documentation/foundation/nsattributedstring/url(at:effectiverange:))

# url(at:effectiveRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.

> Use an [NSDataDetector](../nsdatadetector.md) object instead.

## Declaration

```swift
func url(at location: Int, effectiveRange: NSRangePointer) -> URL?
```

## Parameters

- `location`: The character index in the string at which the method checks for a link.
- `effectiveRange`: The actual range covered by the link attribute or URL string, or of non-URL text if no apparent URL is found.

<a id="return-value"></a>

## Return Value

The URL found at `location`.

## See Also

### Deprecated Instance Methods

- [draw(with:options:)](draw%28with_options_%29.md): Deprecated. Draws the attributed string with the specified options within the specified rectangle in the current graphics context.
- [boundingRect(with:options:)](boundingrect%28with_options_%29.md): Deprecated. Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.

# URLAtIndex:effectiveRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.

> Use an [NSDataDetector](../nsdatadetector.md) object instead.

## Declaration

```objectivec
- (NSURL *) URLAtIndex:(NSUInteger) location effectiveRange:(NSRangePointer) effectiveRange;
```

## Parameters

- `location`: The character index in the string at which the method checks for a link.
- `effectiveRange`: The actual range covered by the link attribute or URL string, or of non-URL text if no apparent URL is found.

<a id="return-value"></a>

## Return Value

The URL found at `location`.

## See Also

### Deprecated Instance Methods

- [drawWithRect:options:](draw%28with_options_%29.md): Deprecated. Draws the attributed string with the specified options within the specified rectangle in the current graphics context.
- [boundingRectWithSize:options:](boundingrect%28with_options_%29.md): Deprecated. Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.
