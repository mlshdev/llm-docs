> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/init(scheme:host:path:)](https://developer.apple.com/documentation/foundation/nsurl/init(scheme:host:path:))

# init(scheme:host:path:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a newly created NSURL with a specified scheme, host, and path.

> Use NSURLComponents instead, which lets you create a valid URL with any valid combination of URL components and subcomponents (not just scheme, host and path), and lets you set components and subcomponents with either percent-encoded or un-percent-encoded strings.

## Declaration

```swift
convenience init?(scheme: String, host: String?, path: String)
```

## Parameters

- `scheme`: The scheme for the NSURL object. For example, in the URL `http://www.example.com/index.html`, the scheme is `http`.
- `host`: The host for the NSURL object (for example, `www.example.com`). May be the empty string.
- `path`: The path for the NSURL object (for example, `/index.html`). If the path begins with a tilde, you must first expand it by calling [expandingTildeInPath](../nsstring/expandingtildeinpath.md).

<a id="return-value"></a>

## Return Value

The newly initialized NSURL object.

<a id="Discussion"></a>

## Discussion

This method automatically uses percent encoding to escape the `path` and `host` parameters.

## See Also

### Related Documentation

- [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672)
- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

# initWithScheme:host:path: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a newly created NSURL with a specified scheme, host, and path.

> Use NSURLComponents instead, which lets you create a valid URL with any valid combination of URL components and subcomponents (not just scheme, host and path), and lets you set components and subcomponents with either percent-encoded or un-percent-encoded strings.

## Declaration

```objectivec
- (instancetype) initWithScheme:(NSString *) scheme host:(NSString *) host path:(NSString *) path;
```

## Parameters

- `scheme`: The scheme for the NSURL object. For example, in the URL `http://www.example.com/index.html`, the scheme is `http`.
- `host`: The host for the NSURL object (for example, `www.example.com`). May be the empty string.
- `path`: The path for the NSURL object (for example, `/index.html`). If the path begins with a tilde, you must first expand it by calling [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md).

<a id="return-value"></a>

## Return Value

The newly initialized NSURL object.

<a id="Discussion"></a>

## Discussion

This method automatically uses percent encoding to escape the `path` and `host` parameters.

## See Also

### Related Documentation

- [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672)
- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Deprecated

- [URLHandleUsingCache:](urlhandleusingcache_.md): Deprecated. Returns a URL handle to service the receiver.
- [loadResourceDataNotifyingClient:usingCache:](loadresourcedatanotifyingclient_usingcache_.md): Deprecated. Loads the receiver’s resource data in the background.
- [resourceDataUsingCache:](resourcedatausingcache_.md): Deprecated. Returns the receiver’s resource data, loading it if necessary.
- [setResourceData:](setresourcedata_.md): Deprecated. Attempts to set the resource data for the receiver.
- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the specified property of the receiver’s resource.
- [setProperty:forKey:](setproperty_forkey_.md): Deprecated. Changes the specified property of the receiver’s resource.
