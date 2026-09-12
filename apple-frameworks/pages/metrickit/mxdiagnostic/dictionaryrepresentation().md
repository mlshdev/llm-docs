> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnostic/dictionaryrepresentation()](https://developer.apple.com/documentation/metrickit/mxdiagnostic/dictionaryrepresentation())

# dictionaryRepresentation() (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the contents of a diagnostic as a dictionary.

> Use [DiagnosticResult](../diagnosticresult.md) instead.

## Declaration

```swift
func dictionaryRepresentation() -> [AnyHashable : Any]
```

<a id="return-value"></a>

## Return Value

A [Dictionary](https://developer.apple.com/documentation/swift/dictionary) (Swift) or [NSDictionary](../../foundation/nsdictionary.md) (Objective-C) object containing the JSON representation of the contents of the diagnostic.

## See Also

### Generating a report

- [jsonRepresentation()](jsonrepresentation%28%29.md): Deprecated. Returns the contents of the diagnostic in JSON format.

# dictionaryRepresentation (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the contents of a diagnostic as a dictionary.

> Use [DiagnosticResult](../diagnosticresult.md) instead.

## Declaration

```objectivec
- (NSDictionary *) dictionaryRepresentation;
```

<a id="return-value"></a>

## Return Value

A [Dictionary](https://developer.apple.com/documentation/swift/dictionary) (Swift) or [NSDictionary](../../foundation/nsdictionary.md) (Objective-C) object containing the JSON representation of the contents of the diagnostic.

## See Also

### Generating a report

- [JSONRepresentation](jsonrepresentation%28%29.md): Deprecated. Returns the contents of the diagnostic in JSON format.
