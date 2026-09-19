> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arreferenceobject/resourcegroupname

# resourceGroupName (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0)

> Only supported for legacy reference objects.

## Declaration

```swift
var resourceGroupName: String? { get }
```

<a id="Discussion"></a>

## Discussion

If ARKit loaded this object from an AR resource group in an asset catalog, ARKit sets the value of this property to the resource group’s name. Otherwise, the value of this property is `nil`.

## See Also

### Examining a Reference Object

- [name](name.md): A descriptive name for the reference object.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [extent](extent.md): The size of the reference object’s space-mapping data.
- [scale](scale.md): A scale factor for the local coordinate space the reference object defines.

# resourceGroupName (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0)

> Only supported for legacy reference objects.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * resourceGroupName;
```

<a id="Discussion"></a>

## Discussion

If ARKit loaded this object from an AR resource group in an asset catalog, ARKit sets the value of this property to the resource group’s name. Otherwise, the value of this property is `nil`.

## See Also

### Examining a Reference Object

- [name](name.md): A descriptive name for the reference object.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [extent](extent.md): The size of the reference object’s space-mapping data.
- [scale](scale.md): A scale factor for the local coordinate space the reference object defines.
