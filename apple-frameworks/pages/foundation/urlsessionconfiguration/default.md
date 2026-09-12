> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/default](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/default)

# default (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A default session configuration object.

## Declaration

```swift
class var `default`: URLSessionConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

The default session configuration uses a persistent disk-based cache (except when the result is downloaded to a file) and stores credentials in the user’s keychain. It also stores cookies (by default) in the same shared cookie store as the [NSURLConnection](../nsurlconnection.md) and [NSURLDownload](../nsurldownload.md) classes.

> **Note**

>  If you’re porting code based on the [NSURLConnection](../nsurlconnection.md) class, use this method to obtain an initial configuration object and then customize that object as needed.

Modifying the returned session configuration object does *not* affect any configuration objects returned by future calls to this method, and does not change the default behavior for existing sessions. It is therefore always safe to use the returned object as a starting point for additional customization.

## See Also

### Related Documentation

- [Fetching website data into memory](../fetching-website-data-into-memory.md): Receive data directly into memory by creating a data task from a URL session.

### Creating a session configuration object

- [ephemeral](ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [background(withIdentifier:)](background%28withidentifier_%29.md): Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.
- [init()](init%28%29.md): Deprecated. Creates an empty session configuration.
- [new()](new%28%29.md): Deprecated. Creates an empty session configuration.

# defaultSessionConfiguration (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A default session configuration object.

## Declaration

```objectivec
@property (class, strong, readonly) NSURLSessionConfiguration * defaultSessionConfiguration;
```

<a id="Discussion"></a>

## Discussion

The default session configuration uses a persistent disk-based cache (except when the result is downloaded to a file) and stores credentials in the user’s keychain. It also stores cookies (by default) in the same shared cookie store as the [NSURLConnection](../nsurlconnection.md) and [NSURLDownload](../nsurldownload.md) classes.

> **Note**

>  If you’re porting code based on the [NSURLConnection](../nsurlconnection.md) class, use this method to obtain an initial configuration object and then customize that object as needed.

Modifying the returned session configuration object does *not* affect any configuration objects returned by future calls to this method, and does not change the default behavior for existing sessions. It is therefore always safe to use the returned object as a starting point for additional customization.

## See Also

### Related Documentation

- [Fetching website data into memory](../fetching-website-data-into-memory.md): Receive data directly into memory by creating a data task from a URL session.

### Creating a session configuration object

- [ephemeralSessionConfiguration](ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [backgroundSessionConfigurationWithIdentifier:](background%28withidentifier_%29.md): Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.
- [init](init%28%29.md): Deprecated. Creates an empty session configuration.
- [new](new%28%29.md): Deprecated. Creates an empty session configuration.
