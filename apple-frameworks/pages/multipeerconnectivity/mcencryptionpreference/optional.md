> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcencryptionpreference/optional](https://developer.apple.com/documentation/multipeerconnectivity/mcencryptionpreference/optional)

# MCEncryptionPreference.optional (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Case  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The session prefers to use encryption, but accepts unencrypted connections. A connection uses encryption when all the peers choose either [MCEncryptionPreference.optional](optional.md) or [MCEncryptionPreference.required](required.md). If some peers choose [MCEncryptionPreference.none](none.md), then the session will not be encrypted. For this reason, if some peers running your app can be configured without encryption, you should always assume that the session is unencrypted.

> Use Network Framework instead

## Declaration

```swift
case optional
```

## See Also

### Constants

- [MCEncryptionPreference.required](required.md): Deprecated. The session requires encryption.
- [MCEncryptionPreference.none](none.md): Deprecated. The session should not be encrypted.

# MCEncryptionOptional (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The session prefers to use encryption, but accepts unencrypted connections. A connection uses encryption when all the peers choose either [MCEncryptionOptional](optional.md) or [MCEncryptionRequired](required.md). If some peers choose [MCEncryptionNone](none.md), then the session will not be encrypted. For this reason, if some peers running your app can be configured without encryption, you should always assume that the session is unencrypted.

> Use Network Framework instead

## Declaration

```objectivec
MCEncryptionOptional
```

## See Also

### Constants

- [MCEncryptionRequired](required.md): Deprecated. The session requires encryption.
- [MCEncryptionNone](none.md): Deprecated. The session should not be encrypted.
