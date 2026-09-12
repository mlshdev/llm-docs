> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlbatchprovider/features(at:)](https://developer.apple.com/documentation/coreml/mlbatchprovider/features(at:))

# features(at:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the feature provider at the given index.

## Declaration

```swift
func features(at index: Int) -> any MLFeatureProvider
```

## Parameters

- `index`: The index of the desired feature provider.

<a id="return-value"></a>

## Return Value

The feature provider at the given index.

## See Also

### Accessing values

- [count](count.md): The number of feature providers in this batch.

# featuresAtIndex: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the feature provider at the given index.

## Declaration

```objectivec
- (id<MLFeatureProvider>) featuresAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the desired feature provider.

<a id="return-value"></a>

## Return Value

The feature provider at the given index.

## See Also

### Accessing values

- [count](count.md): The number of feature providers in this batch.
