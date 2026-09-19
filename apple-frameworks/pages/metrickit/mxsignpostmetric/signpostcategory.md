> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxsignpostmetric/signpostcategory

# signpostCategory (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The developer-specified category of the custom metric represented by the object.

> Use [signpostCategory](../signpostintervalmetric/signpostcategory.md) instead.

## Declaration

```swift
var signpostCategory: String { get }
```

## See Also

### Reading data about the custom metric

- [signpostName](signpostname.md): Deprecated. The developer-specified name of the custom metric represented by the object.
- [totalCount](totalcount.md): Deprecated. The total number of occurrences of the captured custom metric.

# signpostCategory (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The developer-specified category of the custom metric represented by the object.

> Use [signpostCategory](../signpostintervalmetric/signpostcategory.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * signpostCategory;
```

## See Also

### Reading data about the custom metric

- [signpostName](signpostname.md): Deprecated. The developer-specified name of the custom metric represented by the object.
- [totalCount](totalcount.md): Deprecated. The total number of occurrences of the captured custom metric.
