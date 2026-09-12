> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcecreationoptions/uniformtypeidentifier](https://developer.apple.com/documentation/photos/phassetresourcecreationoptions/uniformtypeidentifier)

# uniformTypeIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The uniform type identifier for the resource.

> Use contentType instead

## Declaration

```swift
var uniformTypeIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If you do not specify a value for this property, Photos infers the data type from the [PHAssetResourceType](../phassetresourcetype.md) value you specify when adding the resource to a creation request.

For details in uniform type identifiers, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Describing a New Asset Resource

- [originalFilename](originalfilename.md): The filename for the asset resource being created.
- [contentType](contenttype.md): The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).

# uniformTypeIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The uniform type identifier for the resource.

> Use contentType instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * uniformTypeIdentifier;
```

<a id="Discussion"></a>

## Discussion

If you do not specify a value for this property, Photos infers the data type from the [PHAssetResourceType](../phassetresourcetype.md) value you specify when adding the resource to a creation request.

For details in uniform type identifiers, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Describing a New Asset Resource

- [originalFilename](originalfilename.md): The filename for the asset resource being created.
- [contentType](contenttype.md): The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).
