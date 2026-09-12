> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/resulttype](https://developer.apple.com/documentation/foundation/nstextcheckingresult/resulttype)

# resultType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the text checking result type that the receiver represents.

## Declaration

```swift
var resultType: NSTextCheckingResult.CheckingType { get }
```

<a id="Discussion"></a>

## Discussion

The possible result types for the built in checking capabilities are described in [NSTextCheckingResult.CheckingType](checkingtype.md).

This property will be present for all returned `NSTextCheckingResult` instances.

## See Also

### Text Checking Type Range and Type

- [range](range.md): Returns the range of the result that the receiver represents.
- [numberOfRanges](numberofranges.md): Returns the number of ranges.
- [range(at:)](range%28at_%29.md): Returns the result type that the range represents.

# resultType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the text checking result type that the receiver represents.

## Declaration

```objectivec
@property (readonly) NSTextCheckingType resultType;
```

<a id="Discussion"></a>

## Discussion

The possible result types for the built in checking capabilities are described in [NSTextCheckingType](checkingtype.md).

This property will be present for all returned `NSTextCheckingResult` instances.

## See Also

### Text Checking Type Range and Type

- [range](range.md): Returns the range of the result that the receiver represents.
- [numberOfRanges](numberofranges.md): Returns the number of ranges.
- [rangeAtIndex:](range%28at_%29.md): Returns the result type that the range represents.
