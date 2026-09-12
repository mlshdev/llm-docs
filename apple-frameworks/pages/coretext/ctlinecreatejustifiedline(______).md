> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinecreatejustifiedline(_:_:_:)](https://developer.apple.com/documentation/coretext/ctlinecreatejustifiedline(_:_:_:))

# CTLineCreateJustifiedLine(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a justified line from an existing line.

## Declaration

```swift
func CTLineCreateJustifiedLine(_ line: CTLine, _ justificationFactor: CGFloat, _ justificationWidth: Double) -> CTLine?
```

## Parameters

- `line`: The line from which to create a justified line.
- `justificationFactor`: Full or partial justification. When set to `1.0` or greater, full justification is performed. If this parameter is set to less than `1.0`, varying degrees of partial justification are performed. If it is set to `0` or less, no justification is performed.
- `justificationWidth`: The width to which the resultant line is justified. If `justificationWidth` is less than the actual width of the line, then negative justification is performed (that is, glyphs are squeezed together).

<a id="return-value"></a>

## Return Value

A reference to a justified CTLine object if the call was successful; otherwise, `NULL`.

## See Also

### Creating Lines

- [CTLineCreateWithAttributedString(\_:)](ctlinecreatewithattributedstring%28__%29.md): Creates a single immutable line object from an attributed string.
- [CTLineCreateTruncatedLine(\_:\_:\_:\_:)](ctlinecreatetruncatedline%28________%29.md): Creates a truncated line from an existing line.

# CTLineCreateJustifiedLine (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a justified line from an existing line.

## Declaration

```objectivec
extern CTLineRefCTLineCreateJustifiedLine(CTLineRef line, CGFloat justificationFactor, double justificationWidth);
```

## Parameters

- `line`: The line from which to create a justified line.
- `justificationFactor`: Full or partial justification. When set to `1.0` or greater, full justification is performed. If this parameter is set to less than `1.0`, varying degrees of partial justification are performed. If it is set to `0` or less, no justification is performed.
- `justificationWidth`: The width to which the resultant line is justified. If `justificationWidth` is less than the actual width of the line, then negative justification is performed (that is, glyphs are squeezed together).

<a id="return-value"></a>

## Return Value

A reference to a justified CTLine object if the call was successful; otherwise, `NULL`.

## See Also

### Creating Lines

- [CTLineCreateWithAttributedString](ctlinecreatewithattributedstring%28__%29.md): Creates a single immutable line object from an attributed string.
- [CTLineCreateTruncatedLine](ctlinecreatetruncatedline%28________%29.md): Creates a truncated line from an existing line.
