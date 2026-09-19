> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phproject/hasprojectpreview

# hasProjectPreview (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A property that indicates whether a project preview was previously set.

## Declaration

```swift
var hasProjectPreview: Bool { get }
```

<a id="Discussion"></a>

## Discussion

To set the preview, use [setProjectPreviewImage(\_:)](../phprojectchangerequest/setprojectpreviewimage%28__%29.md).

## See Also

### Project Extension Properties

- [projectExtensionData](projectextensiondata.md): Data associated with the project extension.

# hasProjectPreview (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A property that indicates whether a project preview was previously set.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasProjectPreview;
```

<a id="Discussion"></a>

## Discussion

To set the preview, use [setProjectPreviewImage:](../phprojectchangerequest/setprojectpreviewimage%28__%29.md).

## See Also

### Project Extension Properties

- [projectExtensionData](projectextensiondata.md): Data associated with the project extension.
