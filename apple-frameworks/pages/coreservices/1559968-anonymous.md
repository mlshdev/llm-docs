> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1559968-anonymous](https://developer.apple.com/documentation/coreservices/1559968-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [cmCantCopyModifiedV1Profile](1559968-anonymous/cmcantcopymodifiedv1profile.md): It is illegal to copy version 1.0 profiles that have been modified
- [cmCantDeleteElement](1559968-anonymous/cmcantdeleteelement.md): Cannot delete the specified profile element
- [cmCantGamutCheckError](1559968-anonymous/cmcantgamutcheckerror.md): Gamut checking not supported by this color world—that is, the color world does not contain a gamut table because it was built with gamut checking turned off
- [cmElementTagNotFound](1559968-anonymous/cmelementtagnotfound.md): The tag you specified is not in the specified profile
- [cmErrIncompatibleProfile](1559968-anonymous/cmerrincompatibleprofile.md): Unspecified profile error
- [cmFatalProfileErr](1559968-anonymous/cmfatalprofileerr.md): Returned from File Manager while updating a profile file in response to `CMUpdateProfile`; profile content may be corrupted
- [cmIndexRangeErr](1559968-anonymous/cmindexrangeerr.md): Tag index out of range
- [cmInvalidColorSpace](1559968-anonymous/cminvalidcolorspace.md): Profile color space does not match bitmap type
- [cmInvalidDstMap](1559968-anonymous/cminvaliddstmap.md): Destination pix/bit map was invalid
- [cmInvalidProfile](1559968-anonymous/cminvalidprofile.md): Profile reference is invalid or refers to an inappropriate profile
- [cmInvalidProfileComment](1559968-anonymous/cminvalidprofilecomment.md): Bad profile comment during `drawpicture`
- [cmInvalidProfileLocation](1559968-anonymous/cminvalidprofilelocation.md): Operation not supported for this profile location
- [cmInvalidSearch](1559968-anonymous/cminvalidsearch.md): Bad search handle
- [cmInvalidSrcMap](1559968-anonymous/cminvalidsrcmap.md): Source pixel map or bitmap was invalid
- [cmNamedColorNotFound](1559968-anonymous/cmnamedcolornotfound.md): The specified named color was not found in the specified profile
- [cmNoGDevicesError](1559968-anonymous/cmnogdeviceserror.md): Begin matching or end matching—no graphics devices available
- [cmRangeOverFlow](1559968-anonymous/cmrangeoverflow.md): One or more output color value overflows in color conversion; all input color values will be converted and the overflow will be clipped
- [cmSearchError](1559968-anonymous/cmsearcherror.md): Internal error occurred during profile search
