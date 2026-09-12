> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baurldownload/init(identifier:request:applicationgroupidentifier:)](https://developer.apple.com/documentation/backgroundassets/baurldownload/init(identifier:request:applicationgroupidentifier:))

# init(identifier:request:applicationGroupIdentifier:) (Swift)

**Framework:** Background Assets  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3)

Creates a download that uses the specified identifier and App Group.

## Declaration

```swift
convenience init(identifier: String, request: URLRequest, applicationGroupIdentifier: String)
```

## Parameters

- `identifier`: An app-specific string that uniquely identifies the downloadable asset.
- `request`: A URL request that provides request-specific information, such as URL, request type, and body data.
- `applicationGroupIdentifier`: The identifier of the App Group where the system stores finished downloads. For more information about App Groups, see [Configuring app groups](https://developer.apple.com/documentation/xcode/configuring-app-groups).

<a id="Discussion"></a>

## Discussion

The system requires that all URL requests use Hypertext Transfer Protocol Secure (HTTPS). The [priority](../badownload/priority-swift.property.md) of the created download is [default](../badownload/priority-swift.struct/default.md).

## See Also

### Creating a download

- [init(identifier:request:essential:fileSize:applicationGroupIdentifier:priority:)](init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [init(identifier:request:fileSize:applicationGroupIdentifier:)](init%28identifier_request_filesize_applicationgroupidentifier_%29.md)
- [init(identifier:request:applicationGroupIdentifier:priority:)](init%28identifier_request_applicationgroupidentifier_priority_%29.md): Deprecated. Creates a prioritized download that uses the specified identifier and App Group.

# initWithIdentifier:request:applicationGroupIdentifier: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3)

Creates a download that uses the specified identifier and App Group.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier request:(NSURLRequest *) request applicationGroupIdentifier:(NSString *) applicationGroupIdentifier;
```

## Parameters

- `identifier`: An app-specific string that uniquely identifies the downloadable asset.
- `request`: A URL request that provides request-specific information, such as URL, request type, and body data.
- `applicationGroupIdentifier`: The identifier of the App Group where the system stores finished downloads. For more information about App Groups, see [Configuring app groups](https://developer.apple.com/documentation/xcode/configuring-app-groups).

<a id="Discussion"></a>

## Discussion

The system requires that all URL requests use Hypertext Transfer Protocol Secure (HTTPS). The [priority](../badownload/priority-swift.property.md) of the created download is [BADownloaderPriorityDefault](../badownload/priority-swift.struct/default.md).

## See Also

### Creating a download

- [initWithIdentifier:request:essential:fileSize:applicationGroupIdentifier:priority:](init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [initWithIdentifier:request:fileSize:applicationGroupIdentifier:](init%28identifier_request_filesize_applicationgroupidentifier_%29.md)
- [initWithIdentifier:request:applicationGroupIdentifier:priority:](init%28identifier_request_applicationgroupidentifier_priority_%29.md): Deprecated. Creates a prioritized download that uses the specified identifier and App Group.
