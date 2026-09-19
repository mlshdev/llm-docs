> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phprojectchangerequest/projectextensiondata

# projectExtensionData (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Compressed project-specific data to use in the change request.

## Declaration

```swift
var projectExtensionData: Data { get set }
```

<a id="Discussion"></a>

## Discussion

The total size of stored data is limited to 5 MB; attempting to store more data will result in an error. Don’t include rasterized images that can be locally cached. Limit stored data to compressed project-specific data.

## See Also

### Creating Change Requests

- [init(project:)](init%28project_%29.md): Creates a change request around the specified project.
- [title](title.md): The title of the change request.

# projectExtensionData (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Compressed project-specific data to use in the change request.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSData * projectExtensionData;
```

<a id="Discussion"></a>

## Discussion

The total size of stored data is limited to 5 MB; attempting to store more data will result in an error. Don’t include rasterized images that can be locally cached. Limit stored data to compressed project-specific data.

## See Also

### Creating Change Requests

- [initWithProject:](init%28project_%29.md): Creates a change request around the specified project.
- [title](title.md): The title of the change request.
