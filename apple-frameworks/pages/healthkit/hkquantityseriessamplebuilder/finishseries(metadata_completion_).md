> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder/finishseries(metadata:completion:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder/finishseries(metadata:completion:))

# finishSeries(metadata:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Finalizes the series and returns the resulting quantity samples.

## Declaration

```swift
func finishSeries(metadata: [String : Any]?, completion: @escaping @Sendable ([HKQuantitySample]?, (any Error)?) -> Void)
```

```swift
func finishSeries(metadata: [String : Any]?) async throws -> [HKQuantitySample]
```

## Parameters

- `metadata`: The metadata dictionary contains extra information describing all the samples created by the builder. The dictionary’s keys are all strings. The values may be strings, numbers, or date objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the samples’ capabilities.
- `completion`: A completion handler, called by the builder after it creates the samples. The handler takes the following parameters:

  - **`samples`**: The samples returned by the builder, or `nil` if an error occurs.
  - **`error`**: If an error occurs, this contains an object that describes the error. Otherwise, it is `nil`.

<a id="Discussion"></a>

## Discussion

Call [finishSeries(metadata:completion:)](finishseries%28metadata_completion_%29.md) after inserting all the quantities for the series. The series builder creates one or more samples to represent the series, saves the samples to the HealthKit store, and passes them to the completion handler.

> **Note**

>  The series builder typically creates a single sample that contains all the inserted quantities; however, it may split the quantities up into multiple sample objects.

Calling this method before inserting any samples results in an error. Also, calling this method invalidates the series builder; you cannot call any other series builder methods after calling this method.

This method calls [finishSeries(metadata:endDate:completion:)](finishseries%28metadata_enddate_completion_%29.md), passing `nil` as the `endDate` parameter.

## See Also

### Ending the Collection

- [discard()](discard%28%29.md): Discards all previously collected data and invalidates the builder.
- [finishSeries(metadata:endDate:completion:)](finishseries%28metadata_enddate_completion_%29.md): Finalizes the series with the provided end date, and returns the resulting quantity samples.

# finishSeriesWithMetadata:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Finalizes the series and returns the resulting quantity samples.

## Declaration

```objectivec
- (void) finishSeriesWithMetadata:(NSDictionary<NSString *,id> *) metadata completion:(void (^)(NSArray<__kindof HKQuantitySample *> *samples, NSError *error)) completion;
```

## Parameters

- `metadata`: The metadata dictionary contains extra information describing all the samples created by the builder. The dictionary’s keys are all strings. The values may be strings, numbers, or date objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the samples’ capabilities.
- `completion`: A completion handler, called by the builder after it creates the samples. The handler takes the following parameters:

  - **`samples`**: The samples returned by the builder, or `nil` if an error occurs.
  - **`error`**: If an error occurs, this contains an object that describes the error. Otherwise, it is `nil`.

<a id="Discussion"></a>

## Discussion

Call [finishSeriesWithMetadata:completion:](finishseries%28metadata_completion_%29.md) after inserting all the quantities for the series. The series builder creates one or more samples to represent the series, saves the samples to the HealthKit store, and passes them to the completion handler.

> **Note**

>  The series builder typically creates a single sample that contains all the inserted quantities; however, it may split the quantities up into multiple sample objects.

Calling this method before inserting any samples results in an error. Also, calling this method invalidates the series builder; you cannot call any other series builder methods after calling this method.

This method calls [finishSeriesWithMetadata:endDate:completion:](finishseries%28metadata_enddate_completion_%29.md), passing `nil` as the `endDate` parameter.

## See Also

### Ending the Collection

- [discard](discard%28%29.md): Discards all previously collected data and invalidates the builder.
- [finishSeriesWithMetadata:endDate:completion:](finishseries%28metadata_enddate_completion_%29.md): Finalizes the series with the provided end date, and returns the resulting quantity samples.
