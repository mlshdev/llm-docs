> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderrequest/issystemrequest](https://developer.apple.com/documentation/fileprovider/nsfileproviderrequest/issystemrequest)

# isSystemRequest (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request came from a system process.

## Declaration

```swift
var isSystemRequest: Bool { get }
```

<a id="Discussion"></a>

## Discussion

System requests occur, for example, when the system needs to update a file after receiving a push notification about a change from the remote storage.

## See Also

### Accessing Application Information

- [domainVersion](domainversion.md): The version of the domain for the request.
- [requestingExecutable](requestingexecutable.md): The URL of the requesting executable.
- [isFileViewerRequest](isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.

# isSystemRequest (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request came from a system process.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isSystemRequest;
```

<a id="Discussion"></a>

## Discussion

System requests occur, for example, when the system needs to update a file after receiving a push notification about a change from the remote storage.

## See Also

### Accessing Application Information

- [domainVersion](domainversion.md): The version of the domain for the request.
- [requestingExecutable](requestingexecutable.md): The URL of the requesting executable.
- [isFileViewerRequest](isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
