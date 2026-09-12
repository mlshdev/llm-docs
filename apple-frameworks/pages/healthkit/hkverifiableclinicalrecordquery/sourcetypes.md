> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquery/sourcetypes](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquery/sourcetypes)

# sourceTypes (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

The format of the verifiable clinical record.

## Declaration

```swift
var sourceTypes: [HKVerifiableClinicalRecordSourceType] { get }
```

<a id="Discussion"></a>

## Discussion

For a list of valid formats, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).

## See Also

### Accessing the Metadata

- [recordTypes](recordtypes.md): The type of records that this query returns.

# sourceTypes (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

The format of the verifiable clinical record.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * sourceTypes;
```

<a id="Discussion"></a>

## Discussion

For a list of valid formats, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).

## See Also

### Accessing the Metadata

- [recordTypes](recordtypes.md): The type of records that this query returns.
