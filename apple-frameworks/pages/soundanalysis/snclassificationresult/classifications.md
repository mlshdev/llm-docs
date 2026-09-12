> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassificationresult/classifications](https://developer.apple.com/documentation/soundanalysis/snclassificationresult/classifications)

# classifications (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sorted array of the request’s top classification candidates.

## Declaration

```swift
var classifications: [SNClassification] { get }
```

<a id="Discussion"></a>

## Discussion

`SNClassificationResult` sorts its classifications in descending confidence score order.

## See Also

### Inspecting the Result

- [timeRange](timerange.md): The time span that corresponds to the result’s classifications.
- [SNClassification](../snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
- [classification(forIdentifier:)](classification%28foridentifier_%29.md): Returns the classification for an identifier.

# classifications (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sorted array of the request’s top classification candidates.

## Declaration

```objectivec
@property (copy, readonly) NSArray<SNClassification *> * classifications;
```

<a id="Discussion"></a>

## Discussion

`SNClassificationResult` sorts its classifications in descending confidence score order.

## See Also

### Inspecting the Result

- [timeRange](timerange.md): The time span that corresponds to the result’s classifications.
- [SNClassification](../snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
- [classificationForIdentifier:](classification%28foridentifier_%29.md): Returns the classification for an identifier.
