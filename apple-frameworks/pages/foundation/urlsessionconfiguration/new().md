> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/new()](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/new())

# new() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Creates an empty session configuration.

> Use [default](default.md) or other class methods to create instances.

## Declaration

```swift
class func new() -> Self
```

## See Also

### Creating a session configuration object

- [default](default.md): A default session configuration object.
- [ephemeral](ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [background(withIdentifier:)](background%28withidentifier_%29.md): Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.
- [init()](init%28%29.md): Deprecated. Creates an empty session configuration.

# new (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Creates an empty session configuration.

> Use [defaultSessionConfiguration](default.md) or other class methods to create instances.

## Declaration

```objectivec
+ (instancetype) new;
```

## See Also

### Creating a session configuration object

- [defaultSessionConfiguration](default.md): A default session configuration object.
- [ephemeralSessionConfiguration](ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [backgroundSessionConfigurationWithIdentifier:](background%28withidentifier_%29.md): Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.
- [init](init%28%29.md): Deprecated. Creates an empty session configuration.
