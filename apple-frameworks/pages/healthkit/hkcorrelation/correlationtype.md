> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelation/correlationtype](https://developer.apple.com/documentation/healthkit/hkcorrelation/correlationtype)

# correlationType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The type for this correlation.

## Declaration

```swift
var correlationType: HKCorrelationType { get }
```

<a id="Discussion"></a>

## Discussion

For a complete list of correlation type identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).

## See Also

### Getting Correlation Data

- [objects](objects.md): The set of sample objects that make up the correlation.
- [objects(for:)](objects%28for_%29.md): Returns a set containing all the objects of the specified type in the correlation.

# correlationType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The type for this correlation.

## Declaration

```objectivec
@property (readonly) HKCorrelationType * correlationType;
```

<a id="Discussion"></a>

## Discussion

For a complete list of correlation type identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).

## See Also

### Getting Correlation Data

- [objects](objects.md): The set of sample objects that make up the correlation.
- [objectsForType:](objects%28for_%29.md): Returns a set containing all the objects of the specified type in the correlation.
