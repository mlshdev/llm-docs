> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetadata/jsonrepresentation()

# jsonRepresentation() (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Returns the contents of the metadata in JSON format.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```swift
func jsonRepresentation() -> Data
```

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) (Swift) or [NSData](../../foundation/nsdata.md) (Objective-C)  object containing the JSON representation of the contents of the metadata.

## See Also

### Generating a report

- [dictionaryRepresentation()](dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of the metadata as a dictionary.

# JSONRepresentation (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Returns the contents of the metadata in JSON format.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```objectivec
- (NSData *) JSONRepresentation;
```

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) (Swift) or [NSData](../../foundation/nsdata.md) (Objective-C)  object containing the JSON representation of the contents of the metadata.

## See Also

### Generating a report

- [dictionaryRepresentation](dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of the metadata as a dictionary.
