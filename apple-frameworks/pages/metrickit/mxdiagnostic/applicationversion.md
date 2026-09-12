> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnostic/applicationversion](https://developer.apple.com/documentation/metrickit/mxdiagnostic/applicationversion)

# applicationVersion (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The value of the bundle version key, short form, in the app’s property list.

> Use [applicationVersion](../diagnosticreport/environment-swift.struct/applicationversion.md) instead.

## Declaration

```swift
var applicationVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

Returns the value of [CFBundleShortVersionString](../../bundleresources/information-property-list/cfbundleshortversionstring.md) from this app’s information property list.

## See Also

### Reading data About a diagnostic

- [metaData](metadata.md): Deprecated. A set of system-level information for the device.
- [signpostData](signpostdata.md): Deprecated.

# applicationVersion (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The value of the bundle version key, short form, in the app’s property list.

> Use [applicationVersion](../diagnosticreport/environment-swift.struct/applicationversion.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * applicationVersion;
```

<a id="Discussion"></a>

## Discussion

Returns the value of [CFBundleShortVersionString](../../bundleresources/information-property-list/cfbundleshortversionstring.md) from this app’s information property list.

## See Also

### Reading data About a diagnostic

- [metaData](metadata.md): Deprecated. A set of system-level information for the device.
- [signpostData](signpostdata.md): Deprecated.
