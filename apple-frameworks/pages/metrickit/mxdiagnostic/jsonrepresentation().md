> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnostic/jsonrepresentation()](https://developer.apple.com/documentation/metrickit/mxdiagnostic/jsonrepresentation())

# jsonRepresentation() (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the contents of the diagnostic in JSON format.

> Use [DiagnosticResult](../diagnosticresult.md) instead.

## Declaration

```swift
func jsonRepresentation() -> Data
```

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) (Swift) or [NSData](../../foundation/nsdata.md) (Objective-C) object containing the JSON representation of the contents of the diagnostic.

## See Also

### Generating a report

- [dictionaryRepresentation()](dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of a diagnostic as a dictionary.

# JSONRepresentation (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the contents of the diagnostic in JSON format.

> Use [DiagnosticResult](../diagnosticresult.md) instead.

## Declaration

```objectivec
- (NSData *) JSONRepresentation;
```

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) (Swift) or [NSData](../../foundation/nsdata.md) (Objective-C) object containing the JSON representation of the contents of the diagnostic.

## See Also

### Generating a report

- [dictionaryRepresentation](dictionaryrepresentation%28%29.md): Deprecated. Returns the contents of a diagnostic as a dictionary.
