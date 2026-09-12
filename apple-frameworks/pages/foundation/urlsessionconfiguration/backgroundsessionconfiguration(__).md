> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/backgroundsessionconfiguration(_:)](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/backgroundsessionconfiguration(_:))

# backgroundSessionConfiguration(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.

> Use [background(withIdentifier:)](background%28withidentifier_%29.md) instead.

## Declaration

```swift
class func backgroundSessionConfiguration(_ identifier: String) -> URLSessionConfiguration
```

## Parameters

- `identifier`: The unique identifier for the configuration object. This parameter must not be `nil` or an empty string.

<a id="return-value"></a>

## Return Value

A URL session configuration object that causes upload and download tasks to be performed by the system in a separate process.

# backgroundSessionConfiguration: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.

> Use [backgroundSessionConfigurationWithIdentifier:](background%28withidentifier_%29.md) instead.

## Declaration

```objectivec
+ (NSURLSessionConfiguration *) backgroundSessionConfiguration:(NSString *) identifier;
```

## Parameters

- `identifier`: The unique identifier for the configuration object. This parameter must not be `nil` or an empty string.

<a id="return-value"></a>

## Return Value

A URL session configuration object that causes upload and download tasks to be performed by the system in a separate process.
