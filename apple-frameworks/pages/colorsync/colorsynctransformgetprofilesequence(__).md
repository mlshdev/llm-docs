> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynctransformgetprofilesequence(_:)](https://developer.apple.com/documentation/colorsync/colorsynctransformgetprofilesequence(_:))

# ColorSyncTransformGetProfileSequence(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the profile sequence used to create a color transform.

## Declaration

```swift
func ColorSyncTransformGetProfileSequence(_ transform: ColorSyncTransform!) -> Unmanaged<CFArray>?
```

## Parameters

- `transform`: The transform from which to get the profile sequence used to create the transform.

## See Also

### Creating and applying a transform

- [ColorSyncTransformCreate(\_:\_:)](colorsynctransformcreate%28____%29.md): Creates a color transform from a sequence of profiles.
- [ColorSyncTransformConvert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformCopyProperty(\_:\_:\_:)](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty(\_:\_:\_:)](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
- [ColorSyncTransformGetTypeID()](colorsynctransformgettypeid%28%29.md): Returns the type identifier for the `ColorSyncTransform` opaque type.

# ColorSyncTransformGetProfileSequence (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the profile sequence used to create a color transform.

## Declaration

```objectivec
extern CFArrayRefColorSyncTransformGetProfileSequence(ColorSyncTransformRef transform);
```

## Parameters

- `transform`: The transform from which to get the profile sequence used to create the transform.

## See Also

### Creating and applying a transform

- [ColorSyncTransformCreate](colorsynctransformcreate%28____%29.md): Creates a color transform from a sequence of profiles.
- [ColorSyncTransformConvert](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformCopyProperty](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
- [ColorSyncTransformGetTypeID](colorsynctransformgettypeid%28%29.md): Returns the type identifier for the `ColorSyncTransform` opaque type.
