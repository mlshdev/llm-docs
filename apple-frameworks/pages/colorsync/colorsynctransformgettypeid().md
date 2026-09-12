> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynctransformgettypeid()](https://developer.apple.com/documentation/colorsync/colorsynctransformgettypeid())

# ColorSyncTransformGetTypeID() (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the type identifier for the `ColorSyncTransform` opaque type.

## Declaration

```swift
func ColorSyncTransformGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The `CFTypeID` for `ColorSyncTransform` objects.

## See Also

### Creating and applying a transform

- [ColorSyncTransformCreate(\_:\_:)](colorsynctransformcreate%28____%29.md): Creates a color transform from a sequence of profiles.
- [ColorSyncTransformConvert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformGetProfileSequence(\_:)](colorsynctransformgetprofilesequence%28__%29.md): Returns the profile sequence used to create a color transform.
- [ColorSyncTransformCopyProperty(\_:\_:\_:)](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty(\_:\_:\_:)](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.

# ColorSyncTransformGetTypeID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the type identifier for the `ColorSyncTransform` opaque type.

## Declaration

```objectivec
extern CFTypeID ColorSyncTransformGetTypeID();
```

<a id="return-value"></a>

## Return Value

The `CFTypeID` for `ColorSyncTransform` objects.

## See Also

### Creating and applying a transform

- [ColorSyncTransformCreate](colorsynctransformcreate%28____%29.md): Creates a color transform from a sequence of profiles.
- [ColorSyncTransformConvert](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformGetProfileSequence](colorsynctransformgetprofilesequence%28__%29.md): Returns the profile sequence used to create a color transform.
- [ColorSyncTransformCopyProperty](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
