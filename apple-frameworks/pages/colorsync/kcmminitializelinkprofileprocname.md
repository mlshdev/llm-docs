> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcmminitializelinkprofileprocname](https://developer.apple.com/documentation/colorsync/kcmminitializelinkprofileprocname)

# kCMMInitializeLinkProfileProcName (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.

## Declaration

```swift
var kCMMInitializeLinkProfileProcName: Unmanaged<CFString>!
```

## See Also

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMCreateTransformPropertyProcName](kcmmcreatetransformpropertyprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.
- [kCMMInitializeTransformProcName](kcmminitializetransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.

# kCMMInitializeLinkProfileProcName (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.

## Declaration

```objectivec
extern CFStringRef kCMMInitializeLinkProfileProcName;
```

## See Also

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMCreateTransformPropertyProcName](kcmmcreatetransformpropertyprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.
- [kCMMInitializeTransformProcName](kcmminitializetransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.
