> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcmmcreatetransformpropertyprocname](https://developer.apple.com/documentation/colorsync/kcmmcreatetransformpropertyprocname)

# kCMMCreateTransformPropertyProcName (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.

## Declaration

```swift
var kCMMCreateTransformPropertyProcName: Unmanaged<CFString>!
```

## See Also

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMInitializeLinkProfileProcName](kcmminitializelinkprofileprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.
- [kCMMInitializeTransformProcName](kcmminitializetransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.

# kCMMCreateTransformPropertyProcName (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.

## Declaration

```objectivec
extern CFStringRef kCMMCreateTransformPropertyProcName;
```

## See Also

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMInitializeLinkProfileProcName](kcmminitializelinkprofileprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.
- [kCMMInitializeTransformProcName](kcmminitializetransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.
