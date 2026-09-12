> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baurldownload/init(identifier:request:filesize:applicationgroupidentifier:)](https://developer.apple.com/documentation/backgroundassets/baurldownload/init(identifier:request:filesize:applicationgroupidentifier:))

# init(identifier:request:fileSize:applicationGroupIdentifier:) (Swift)

**Framework:** Background Assets  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
convenience init(identifier: String, request: URLRequest, fileSize: Int, applicationGroupIdentifier: String)
```

## Parameters

- `identifier`: A unique identifier that is used to track the download across the app and extension.
- `request`: The request used to perform the download. The URL provided inside of the request must be a https scheme.
- `fileSize`: The size of the file to download. This field must be accurate in order to show the user accurate progress during app installation. If the size does not match the file being downloaded, then the download will fail.
- `applicationGroupIdentifier`: The identifier of the application group that should used to store the finished download.

<a id="discussion"></a>

## Discussion

Constructs a download object to represent the download of a asset located inside of the provided @c request.

## See Also

### Creating a download

- [init(identifier:request:essential:fileSize:applicationGroupIdentifier:priority:)](init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [init(identifier:request:applicationGroupIdentifier:)](init%28identifier_request_applicationgroupidentifier_%29.md): Deprecated. Creates a download that uses the specified identifier and App Group.
- [init(identifier:request:applicationGroupIdentifier:priority:)](init%28identifier_request_applicationgroupidentifier_priority_%29.md): Deprecated. Creates a prioritized download that uses the specified identifier and App Group.

# initWithIdentifier:request:fileSize:applicationGroupIdentifier: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier request:(NSURLRequest *) request fileSize:(NSUInteger) fileSize applicationGroupIdentifier:(NSString *) applicationGroupIdentifier;
```

## Parameters

- `identifier`: A unique identifier that is used to track the download across the app and extension.
- `request`: The request used to perform the download. The URL provided inside of the request must be a https scheme.
- `fileSize`: The size of the file to download. This field must be accurate in order to show the user accurate progress during app installation. If the size does not match the file being downloaded, then the download will fail.
- `applicationGroupIdentifier`: The identifier of the application group that should used to store the finished download.

<a id="discussion"></a>

## Discussion

Constructs a download object to represent the download of a asset located inside of the provided @c request.

## See Also

### Creating a download

- [initWithIdentifier:request:essential:fileSize:applicationGroupIdentifier:priority:](init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [initWithIdentifier:request:applicationGroupIdentifier:](init%28identifier_request_applicationgroupidentifier_%29.md): Deprecated. Creates a download that uses the specified identifier and App Group.
- [initWithIdentifier:request:applicationGroupIdentifier:priority:](init%28identifier_request_applicationgroupidentifier_priority_%29.md): Deprecated. Creates a prioritized download that uses the specified identifier and App Group.
