> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlarraybatchprovider/init(dictionary:)](https://developer.apple.com/documentation/coreml/mlarraybatchprovider/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a batch provider based on feature names and their associated arrays of data.

## Declaration

```swift
init(dictionary: [String : [Any]]) throws
```

## Parameters

- `dictionary`: A dictionary which maps feature names to an array of values. The error case occurs when all the arrays do not have the same length or the values in an aray are not expressible as an [MLFeatureValue](../mlfeaturevalue.md).

<a id="Discussion"></a>

## Discussion

This initializer is convenient when the data are available as individual arrays.

```swift
let batch = try  MLArrayBatchProvider(dictionary: ["age": [30, 35, 29],
                                                   "weightLbs": [120.0, 170.4, 213.6]])
```

## See Also

### Creating a batch provider

- [init(array:)](init%28array_%29.md): Creates the batch provider based on the array of feature providers.

# initWithDictionary:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a batch provider based on feature names and their associated arrays of data.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,NSArray *> *) dictionary error:(NSError **) error;
```

## Parameters

- `dictionary`: A dictionary which maps feature names to an array of values. The error case occurs when all the arrays do not have the same length or the values in an aray are not expressible as an [MLFeatureValue](../mlfeaturevalue.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

This initializer is convenient when the data are available as individual arrays.

```swift
let batch = try  MLArrayBatchProvider(dictionary: ["age": [30, 35, 29],
                                                   "weightLbs": [120.0, 170.4, 213.6]])
```

## See Also

### Creating a batch provider

- [initWithFeatureProviderArray:](init%28array_%29.md): Creates the batch provider based on the array of feature providers.
