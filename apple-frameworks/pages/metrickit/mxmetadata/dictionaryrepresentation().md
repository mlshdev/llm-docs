> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetadata/dictionaryrepresentation()](https://developer.apple.com/documentation/metrickit/mxmetadata/dictionaryrepresentation())

# dictionaryRepresentation() (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the contents of the metadata as a dictionary.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```swift
func dictionaryRepresentation() -> [AnyHashable : Any]
```

<a id="return-value"></a>

## Return Value

A [Dictionary](https://developer.apple.com/documentation/swift/dictionary) (Swift) or [NSDictionary](../../foundation/nsdictionary.md) (Objective-C) object containing a key-value representation of the metrics in the payload.

## See Also

### Generating a report

- [jsonRepresentation()](jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metadata in JSON format.

# dictionaryRepresentation (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the contents of the metadata as a dictionary.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```objectivec
- (NSDictionary *) dictionaryRepresentation;
```

<a id="return-value"></a>

## Return Value

A [Dictionary](https://developer.apple.com/documentation/swift/dictionary) (Swift) or [NSDictionary](../../foundation/nsdictionary.md) (Objective-C) object containing a key-value representation of the metrics in the payload.

## See Also

### Generating a report

- [JSONRepresentation](jsonrepresentation%28%29.md): Deprecated. Returns the contents of the metadata in JSON format.
