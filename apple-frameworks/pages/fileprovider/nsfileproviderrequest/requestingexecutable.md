> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderrequest/requestingexecutable](https://developer.apple.com/documentation/fileprovider/nsfileproviderrequest/requestingexecutable)

# requestingExecutable (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The URL of the requesting executable.

## Declaration

```swift
var requestingExecutable: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` unless the device has a Mobile Device Management (MDM) profile, and the profile’s administrator installed the file provider’s app using the MDM profile.

## See Also

### Accessing Application Information

- [domainVersion](domainversion.md): The version of the domain for the request.
- [isFileViewerRequest](isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
- [isSystemRequest](issystemrequest.md): A Boolean value that indicates whether the request came from a system process.

# requestingExecutable (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The URL of the requesting executable.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * requestingExecutable;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` unless the device has a Mobile Device Management (MDM) profile, and the profile’s administrator installed the file provider’s app using the MDM profile.

## See Also

### Accessing Application Information

- [domainVersion](domainversion.md): The version of the domain for the request.
- [isFileViewerRequest](isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
- [isSystemRequest](issystemrequest.md): A Boolean value that indicates whether the request came from a system process.
