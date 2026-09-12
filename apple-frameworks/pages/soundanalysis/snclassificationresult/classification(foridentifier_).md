> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassificationresult/classification(foridentifier:)](https://developer.apple.com/documentation/soundanalysis/snclassificationresult/classification(foridentifier:))

# classification(forIdentifier:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the classification for an identifier.

## Declaration

```swift
func classification(forIdentifier identifier: String) -> SNClassification?
```

## Parameters

- `identifier`: A sound classification label.

<a id="return-value"></a>

## Return Value

A sound classification with a corresponding identifier if it exists in the result; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The `identifier` parameter corresponds to the [identifier](../snclassification/identifier.md) property in an [SNClassification](../snclassification.md).

## See Also

### Inspecting the Result

- [timeRange](timerange.md): The time span that corresponds to the result’s classifications.
- [classifications](classifications.md): A sorted array of the request’s top classification candidates.
- [SNClassification](../snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.

# classificationForIdentifier: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the classification for an identifier.

## Declaration

```objectivec
- (SNClassification *) classificationForIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A sound classification label.

<a id="return-value"></a>

## Return Value

A sound classification with a corresponding identifier if it exists in the result; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The `identifier` parameter corresponds to the [identifier](../snclassification/identifier.md) property in an [SNClassification](../snclassification.md).

## See Also

### Inspecting the Result

- [timeRange](timerange.md): The time span that corresponds to the result’s classifications.
- [classifications](classifications.md): A sorted array of the request’s top classification candidates.
- [SNClassification](../snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
