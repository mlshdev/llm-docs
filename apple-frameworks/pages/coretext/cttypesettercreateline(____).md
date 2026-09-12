> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttypesettercreateline(_:_:)](https://developer.apple.com/documentation/coretext/cttypesettercreateline(_:_:))

# CTTypesetterCreateLine(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable line from the typesetter.

## Declaration

```swift
func CTTypesetterCreateLine(_ typesetter: CTTypesetter, _ stringRange: CFRange) -> CTLine
```

## Parameters

- `typesetter`: The typesetter that creates the line. This parameter is required and cannot be set to `NULL`.
- `stringRange`: The string range on which the line is based. If the length portion of range is set to `0`, then the typesetter continues to add glyphs to the line until it runs out of characters in the string. The location and length of the range must be within the bounds of the string, or the call will fail.

<a id="return-value"></a>

## Return Value

A reference to a CTLine object if the call was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

The resultant line consists of glyphs in the correct visual order, ready to draw. This function is equivalent to [CTTypesetterCreateLineWithOffset(\_:\_:\_:)](cttypesettercreatelinewithoffset%28______%29.md) with an offset of 0.0.

## See Also

### Creating Lines

- [CTTypesetterCreateLineWithOffset(\_:\_:\_:)](cttypesettercreatelinewithoffset%28______%29.md): Creates an immutable line from the typesetter at a specified line offset.

# CTTypesetterCreateLine (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable line from the typesetter.

## Declaration

```objectivec
extern CTLineRefCTTypesetterCreateLine(CTTypesetterRef typesetter, CFRange stringRange);
```

## Parameters

- `typesetter`: The typesetter that creates the line. This parameter is required and cannot be set to `NULL`.
- `stringRange`: The string range on which the line is based. If the length portion of range is set to `0`, then the typesetter continues to add glyphs to the line until it runs out of characters in the string. The location and length of the range must be within the bounds of the string, or the call will fail.

<a id="return-value"></a>

## Return Value

A reference to a CTLine object if the call was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

The resultant line consists of glyphs in the correct visual order, ready to draw. This function is equivalent to [CTTypesetterCreateLineWithOffset](cttypesettercreatelinewithoffset%28______%29.md) with an offset of 0.0.

## See Also

### Creating Lines

- [CTTypesetterCreateLineWithOffset](cttypesettercreatelinewithoffset%28______%29.md): Creates an immutable line from the typesetter at a specified line offset.
