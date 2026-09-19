> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phproject/projectextensiondata

# projectExtensionData (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Data associated with the project extension.

## Declaration

```swift
var projectExtensionData: Data { get }
```

<a id="Discussion"></a>

## Discussion

The total size of stored data is limited to 5 MB; attempting to store more data will result in an error. Don’t include rasterized images that can be locally cached. Limit stored data to compressed project-specific data.

## See Also

### Project Extension Properties

- [hasProjectPreview](hasprojectpreview.md): A property that indicates whether a project preview was previously set.

# projectExtensionData (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Data associated with the project extension.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * projectExtensionData;
```

<a id="Discussion"></a>

## Discussion

The total size of stored data is limited to 5 MB; attempting to store more data will result in an error. Don’t include rasterized images that can be locally cached. Limit stored data to compressed project-specific data.

## See Also

### Project Extension Properties

- [hasProjectPreview](hasprojectpreview.md): A property that indicates whether a project preview was previously set.
