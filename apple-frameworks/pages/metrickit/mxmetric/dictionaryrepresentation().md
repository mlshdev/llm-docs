> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetric/dictionaryrepresentation()

# dictionaryRepresentation() (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Returns the contents of a metric as a dictionary.

> Use [MetricResult](../metricresult.md) instead.

## Declaration

```swift
func dictionaryRepresentation() -> [AnyHashable : Any]
```

<a id="return-value"></a>

## Return Value

A [Dictionary](https://developer.apple.com/documentation/swift/dictionary) (Swift) or [NSDictionary](../../foundation/nsdictionary.md) (Objective-C) object containing a key-value representation of the metrics in the payload.

## See Also

### Generate a report

- [jsonRepresentation()](jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metric in JSON format.

# dictionaryRepresentation (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Returns the contents of a metric as a dictionary.

> Use [MetricResult](../metricresult.md) instead.

## Declaration

```objectivec
- (NSDictionary *) dictionaryRepresentation;
```

<a id="return-value"></a>

## Return Value

A [Dictionary](https://developer.apple.com/documentation/swift/dictionary) (Swift) or [NSDictionary](../../foundation/nsdictionary.md) (Objective-C) object containing a key-value representation of the metrics in the payload.

## See Also

### Generate a report

- [JSONRepresentation](jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metric in JSON format.
