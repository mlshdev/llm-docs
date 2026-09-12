> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelation/objects](https://developer.apple.com/documentation/healthkit/hkcorrelation/objects)

# objects (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The set of sample objects that make up the correlation.

## Declaration

```swift
var objects: Set<HKSample> { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the quantity and category samples that are grouped into this correlation. Blood pressure correlations always include two quantity samples that represent the systolic and diastolic values. In contrast, food correlations can contain a wide range of dietary information about the food, including information about the fat, protein, carbohydrates, energy, and vitamins consumed.

## See Also

### Getting Correlation Data

- [correlationType](correlationtype.md): The type for this correlation.
- [objects(for:)](objects%28for_%29.md): Returns a set containing all the objects of the specified type in the correlation.

# objects (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The set of sample objects that make up the correlation.

## Declaration

```objectivec
@property (copy, readonly) NSSet<__kindof HKSample *> * objects;
```

<a id="Discussion"></a>

## Discussion

This property contains the quantity and category samples that are grouped into this correlation. Blood pressure correlations always include two quantity samples that represent the systolic and diastolic values. In contrast, food correlations can contain a wide range of dietary information about the food, including information about the fat, protein, carbohydrates, energy, and vitamins consumed.

## See Also

### Getting Correlation Data

- [correlationType](correlationtype.md): The type for this correlation.
- [objectsForType:](objects%28for_%29.md): Returns a set containing all the objects of the specified type in the correlation.
