> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesbuilder/addmetadata(_:completion:)](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesbuilder/addmetadata(_:completion:))

# addMetadata(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds metadata to the sample.

## Declaration

```swift
func addMetadata(_ metadata: [String : Any], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addMetadata(_ metadata: [String : Any]) async throws
```

## Parameters

- `metadata`: The metadata dictionary contains extra information describing all the samples created by the builder. The dictionary’s keys are all strings. The values may be strings, numbers, or date objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the samples’ capabilities.
- `completion`: The completion handler called by the builder after it attempts to add the metadata to the series. The completion handler takes the following parameters:

  - **`success`**: A Boolean value that indicates whether the builder successfully added the heartbeat.
  - **`error`**: If the `success` parameter is [false](../../foundation/nsexpression/false.md), this contains an object that describes the error; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The builder adds the metadata to the resulting series sample. It incorporates new data using [addEntries(from:)](../../foundation/nsmutabledictionary/addentries%28from_%29.md).

## See Also

### Adding Data

- [addHeartbeatWithTimeInterval(sinceSeriesStartDate:precededByGap:completion:)](addheartbeatwithtimeinterval%28sinceseriesstartdate_precededbygap_completion_%29.md): Adds a heartbeat to the series.

# addMetadata:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds metadata to the sample.

## Declaration

```objectivec
- (void) addMetadata:(NSDictionary<NSString *,id> *) metadata completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `metadata`: The metadata dictionary contains extra information describing all the samples created by the builder. The dictionary’s keys are all strings. The values may be strings, numbers, or date objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the samples’ capabilities.
- `completion`: The completion handler called by the builder after it attempts to add the metadata to the series. The completion handler takes the following parameters:

  - **`success`**: A Boolean value that indicates whether the builder successfully added the heartbeat.
  - **`error`**: If the `success` parameter is [falseExpression](../../foundation/nsexpression/false.md), this contains an object that describes the error; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The builder adds the metadata to the resulting series sample. It incorporates new data using [addEntriesFromDictionary:](../../foundation/nsmutabledictionary/addentries%28from_%29.md).

## See Also

### Adding Data

- [addHeartbeatWithTimeIntervalSinceSeriesStartDate:precededByGap:completion:](addheartbeatwithtimeinterval%28sinceseriesstartdate_precededbygap_completion_%29.md): Adds a heartbeat to the series.
