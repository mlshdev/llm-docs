> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/colorsync/kcmminitializetransformprocname

# kCMMInitializeTransformProcName (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.

## Declaration

```swift
var kCMMInitializeTransformProcName: Unmanaged<CFString>!
```

## See Also

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMCreateTransformPropertyProcName](kcmmcreatetransformpropertyprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.
- [kCMMInitializeLinkProfileProcName](kcmminitializelinkprofileprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.

# kCMMInitializeTransformProcName (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.

## Declaration

```objectivec
extern CFStringRef kCMMInitializeTransformProcName;
```

## See Also

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMCreateTransformPropertyProcName](kcmmcreatetransformpropertyprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.
- [kCMMInitializeLinkProfileProcName](kcmminitializelinkprofileprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.
