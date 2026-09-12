> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderrequest/domainversion](https://developer.apple.com/documentation/fileprovider/nsfileproviderrequest/domainversion)

# domainVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The version of the domain for the request.

## Declaration

```swift
var domainVersion: NSFileProviderDomainVersion? { get }
```

<a id="Discussion"></a>

## Discussion

If the file provider extension doesn’t implement the [NSFileProviderDomainState](../nsfileproviderdomainstate.md) protocol, this property is `nil`.

## See Also

### Accessing Application Information

- [requestingExecutable](requestingexecutable.md): The URL of the requesting executable.
- [isFileViewerRequest](isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
- [isSystemRequest](issystemrequest.md): A Boolean value that indicates whether the request came from a system process.

# domainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The version of the domain for the request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderDomainVersion * domainVersion;
```

<a id="Discussion"></a>

## Discussion

If the file provider extension doesn’t implement the [NSFileProviderDomainState](../nsfileproviderdomainstate.md) protocol, this property is `nil`.

## See Also

### Accessing Application Information

- [requestingExecutable](requestingexecutable.md): The URL of the requesting executable.
- [isFileViewerRequest](isfileviewerrequest.md): A Boolean value that indicates whether the request came from Finder or related system file browsers.
- [isSystemRequest](issystemrequest.md): A Boolean value that indicates whether the request came from a system process.
