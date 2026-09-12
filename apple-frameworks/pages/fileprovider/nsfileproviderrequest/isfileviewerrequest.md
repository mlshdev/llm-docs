> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderrequest/isfileviewerrequest](https://developer.apple.com/documentation/fileprovider/nsfileproviderrequest/isfileviewerrequest)

# isFileViewerRequest (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request came from Finder or related system file browsers.

## Declaration

```swift
var isFileViewerRequest: Bool { get }
```

## See Also

### Accessing Application Information

- [domainVersion](domainversion.md): The version of the domain for the request.
- [requestingExecutable](requestingexecutable.md): The URL of the requesting executable.
- [isSystemRequest](issystemrequest.md): A Boolean value that indicates whether the request came from a system process.

# isFileViewerRequest (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request came from Finder or related system file browsers.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isFileViewerRequest;
```

## See Also

### Accessing Application Information

- [domainVersion](domainversion.md): The version of the domain for the request.
- [requestingExecutable](requestingexecutable.md): The URL of the requesting executable.
- [isSystemRequest](issystemrequest.md): A Boolean value that indicates whether the request came from a system process.
