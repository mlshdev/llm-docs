> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/name](https://developer.apple.com/documentation/arkit/arreferenceobject/name)

# name (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A descriptive name for the reference object.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For a reference object loaded from an Xcode asset catalog, this property is the name assigned in the asset catalog. You can also use this property to assign a name to an object you’ve recorded in an AR session using extractReferenceObject.

> **Note**

>  This string is not localized text intended for user display. However, in debugging you can use this property to indicate which reference object was detected.

## See Also

### Examining a Reference Object

- [resourceGroupName](resourcegroupname.md): Deprecated.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [extent](extent.md): The size of the reference object’s space-mapping data.
- [scale](scale.md): A scale factor for the local coordinate space the reference object defines.

# name (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A descriptive name for the reference object.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

For a reference object loaded from an Xcode asset catalog, this property is the name assigned in the asset catalog. You can also use this property to assign a name to an object you’ve recorded in an AR session using extractReferenceObject.

> **Note**

>  This string is not localized text intended for user display. However, in debugging you can use this property to indicate which reference object was detected.

## See Also

### Examining a Reference Object

- [resourceGroupName](resourcegroupname.md): Deprecated.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [extent](extent.md): The size of the reference object’s space-mapping data.
- [scale](scale.md): A scale factor for the local coordinate space the reference object defines.
