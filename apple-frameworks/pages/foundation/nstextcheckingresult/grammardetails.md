> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/grammardetails](https://developer.apple.com/documentation/foundation/nstextcheckingresult/grammardetails)

# grammarDetails (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The details of a located grammatical type checking result.

## Declaration

```swift
var grammarDetails: [[String : Any]]? { get }
```

<a id="Discussion"></a>

## Discussion

This array of strings is suitable for presenting to the user.

## See Also

### Text Checking Results for Grammar

- [grammarCheckingResult(range:details:)](grammarcheckingresult%28range_details_%29.md): Creates and returns a text checking result with the specified array of grammatical errors.

# grammarDetails (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The details of a located grammatical type checking result.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSDictionary<NSString *,id> *> * grammarDetails;
```

<a id="Discussion"></a>

## Discussion

This array of strings is suitable for presenting to the user.

## See Also

### Text Checking Results for Grammar

- [grammarCheckingResultWithRange:details:](grammarcheckingresult%28range_details_%29.md): Creates and returns a text checking result with the specified array of grammatical errors.
