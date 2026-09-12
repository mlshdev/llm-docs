> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baurldownload/init(identifier:request:applicationgroupidentifier:priority:)](https://developer.apple.com/documentation/backgroundassets/baurldownload/init(identifier:request:applicationgroupidentifier:priority:))

# init(identifier:request:applicationGroupIdentifier:priority:) (Swift)

**Framework:** Background Assets  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3)

Creates a prioritized download that uses the specified identifier and App Group.

## Declaration

```swift
convenience init(identifier: String, request: URLRequest, applicationGroupIdentifier: String, priority: BADownload.Priority)
```

## Parameters

- `identifier`: An app-specific string that uniquely identifies the downloadable asset.
- `request`: A URL request that provides request-specific information, such as URL, request type, and body data.
- `applicationGroupIdentifier`: The identifier of the App Group where the system stores finished downloads. For more information about App Groups, see [Configuring app groups](https://developer.apple.com/documentation/xcode/configuring-app-groups).
- `priority`: The priority of the download. For more information, see [BADownload.Priority](../badownload/priority-swift.struct.md).

<a id="Discussion"></a>

## Discussion

The system requires that all URL requests use Hypertext Transfer Protocol Secure (HTTPS).

## See Also

### Creating a download

- [init(identifier:request:essential:fileSize:applicationGroupIdentifier:priority:)](init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [init(identifier:request:fileSize:applicationGroupIdentifier:)](init%28identifier_request_filesize_applicationgroupidentifier_%29.md)
- [init(identifier:request:applicationGroupIdentifier:)](init%28identifier_request_applicationgroupidentifier_%29.md): Deprecated. Creates a download that uses the specified identifier and App Group.

# initWithIdentifier:request:applicationGroupIdentifier:priority: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3)

Creates a prioritized download that uses the specified identifier and App Group.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier request:(NSURLRequest *) request applicationGroupIdentifier:(NSString *) applicationGroupIdentifier priority:(BADownloaderPriority) priority;
```

## Parameters

- `identifier`: An app-specific string that uniquely identifies the downloadable asset.
- `request`: A URL request that provides request-specific information, such as URL, request type, and body data.
- `applicationGroupIdentifier`: The identifier of the App Group where the system stores finished downloads. For more information about App Groups, see [Configuring app groups](https://developer.apple.com/documentation/xcode/configuring-app-groups).
- `priority`: The priority of the download. For more information, see [BADownloaderPriority](../badownload/priority-swift.struct.md).

<a id="Discussion"></a>

## Discussion

The system requires that all URL requests use Hypertext Transfer Protocol Secure (HTTPS).

## See Also

### Creating a download

- [initWithIdentifier:request:essential:fileSize:applicationGroupIdentifier:priority:](init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [initWithIdentifier:request:fileSize:applicationGroupIdentifier:](init%28identifier_request_filesize_applicationgroupidentifier_%29.md)
- [initWithIdentifier:request:applicationGroupIdentifier:](init%28identifier_request_applicationgroupidentifier_%29.md): Deprecated. Creates a download that uses the specified identifier and App Group.
