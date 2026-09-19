> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmeasurement/canbeconverted(to:)

# canBeConverted(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Indicates whether the measurement can be converted to the given unit.

## Declaration

```swift
func canBeConverted(to unit: Unit) -> Bool
```

## See Also

### Converting to Other Units

- [converting(to:)](converting%28to_%29.md): Returns a measurement created by converting the receiver to the specified unit.

# canBeConvertedToUnit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Indicates whether the measurement can be converted to the given unit.

## Declaration

```objectivec
- (BOOL) canBeConvertedToUnit:(NSUnit *) unit;
```

## See Also

### Converting to Other Units

- [measurementByConvertingToUnit:](converting%28to_%29.md): Returns a measurement created by converting the receiver to the specified unit.
