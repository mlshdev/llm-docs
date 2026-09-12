> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlarraybatchprovider/init(array:)](https://developer.apple.com/documentation/coreml/mlarraybatchprovider/init(array:))

# init(array:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates the batch provider based on the array of feature providers.

## Declaration

```swift
init(array: [any MLFeatureProvider])
```

## Parameters

- `array`: The array of feature providers for the batch.

## See Also

### Creating a batch provider

- [init(dictionary:)](init%28dictionary_%29.md): Creates a batch provider based on feature names and their associated arrays of data.

# initWithFeatureProviderArray: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates the batch provider based on the array of feature providers.

## Declaration

```objectivec
- (instancetype) initWithFeatureProviderArray:(NSArray<id<MLFeatureProvider>> *) array;
```

## Parameters

- `array`: The array of feature providers for the batch.

## See Also

### Creating a batch provider

- [initWithDictionary:error:](init%28dictionary_%29.md): Creates a batch provider based on feature names and their associated arrays of data.
