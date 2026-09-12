> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/range](https://developer.apple.com/documentation/foundation/nstextcheckingresult/range)

# range (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of the result that the receiver represents.

## Declaration

```swift
var range: NSRange { get }
```

<a id="Discussion"></a>

## Discussion

This property will be present for all returned `NSTextCheckingResult` instances.

## See Also

### Text Checking Type Range and Type

- [resultType](resulttype.md): Returns the text checking result type that the receiver represents.
- [numberOfRanges](numberofranges.md): Returns the number of ranges.
- [range(at:)](range%28at_%29.md): Returns the result type that the range represents.

# range (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of the result that the receiver represents.

## Declaration

```objectivec
@property (readonly) NSRange range;
```

<a id="Discussion"></a>

## Discussion

This property will be present for all returned `NSTextCheckingResult` instances.

## See Also

### Text Checking Type Range and Type

- [resultType](resulttype.md): Returns the text checking result type that the receiver represents.
- [numberOfRanges](numberofranges.md): Returns the number of ranges.
- [rangeAtIndex:](range%28at_%29.md): Returns the result type that the range represents.
