> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/orthographycheckingresult(range:orthography:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/orthographycheckingresult(range:orthography:))

# orthographyCheckingResult(range:orthography:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified orthography.

## Declaration

```swift
class func orthographyCheckingResult(range: NSRange, orthography: NSOrthography) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `orthography`: An orthography object that describes the script.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [orthography](checkingtype/orthography.md).

## See Also

### Text Checking Results for Orthography

- [orthography](orthography.md): The detected orthography of a type checking result.

# orthographyCheckingResultWithRange:orthography: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified orthography.

## Declaration

```objectivec
+ (NSTextCheckingResult *) orthographyCheckingResultWithRange:(NSRange) range orthography:(NSOrthography *) orthography;
```

## Parameters

- `range`: The range of the detected result.
- `orthography`: An orthography object that describes the script.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeOrthography](checkingtype/orthography.md).

## See Also

### Text Checking Results for Orthography

- [orthography](orthography.md): The detected orthography of a type checking result.
