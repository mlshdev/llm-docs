> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyappleecgalgorithmversion](https://developer.apple.com/documentation/healthkit/hkmetadatakeyappleecgalgorithmversion)

# HKMetadataKeyAppleECGAlgorithmVersion (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.

## Declaration

```swift
let HKMetadataKeyAppleECGAlgorithmVersion: String
```

<a id="Discussion"></a>

## Discussion

Apple Watch sets this key on the [HKElectrocardiogram](hkelectrocardiogram.md) samples it creates. The key is read-only.

## See Also

### Specifying Metadata

- [HKAppleECGAlgorithmVersion](hkappleecgalgorithmversion.md): Version numbers for the algorithm Apple Watch uses to generate an ECG reading.

# HKMetadataKeyAppleECGAlgorithmVersion (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAppleECGAlgorithmVersion;
```

<a id="Discussion"></a>

## Discussion

Apple Watch sets this key on the [HKElectrocardiogram](hkelectrocardiogram.md) samples it creates. The key is read-only.

## See Also

### Specifying Metadata

- [HKAppleECGAlgorithmVersion](hkappleecgalgorithmversion.md): Version numbers for the algorithm Apple Watch uses to generate an ECG reading.
