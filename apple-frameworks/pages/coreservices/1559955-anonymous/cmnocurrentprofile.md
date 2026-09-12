> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1559955-anonymous/cmnocurrentprofile](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmnocurrentprofile)

# cmNoCurrentProfile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Responder error

## Declaration

```objectivec
cmNoCurrentProfile = -182
```

## See Also

### Result Codes

- [cmProfileError](cmprofileerror.md): There is something wrong with the content of the profile
- [cmMethodError](cmmethoderror.md): An error occurred during the CMM arbitration process that determines the CMM to use
- [cmMethodNotFound](cmmethodnotfound.md): CMM not present
- [cmProfileNotFound](cmprofilenotfound.md): Responder error
- [cmProfilesIdentical](cmprofilesidentical.md): Profiles are the same
- [cmCantConcatenateError](cmcantconcatenateerror.md): Profiles cannot be concatenated
- [cmCantXYZ](cmcantxyz.md): CMM does not handle XYZ color space
- [cmCantDeleteProfile](cmcantdeleteprofile.md): Responder error
- [cmUnsupportedDataType](cmunsupporteddatatype.md): Responder error
- [cmElementTagNotFound](../1559968-anonymous/cmelementtagnotfound.md): The tag you specified is not in the specified profile
- [cmIndexRangeErr](../1559968-anonymous/cmindexrangeerr.md): Tag index out of range
- [cmCantDeleteElement](../1559968-anonymous/cmcantdeleteelement.md): Cannot delete the specified profile element
- [cmFatalProfileErr](../1559968-anonymous/cmfatalprofileerr.md): Returned from File Manager while updating a profile file in response to `CMUpdateProfile`; profile content may be corrupted
- [cmInvalidProfile](../1559968-anonymous/cminvalidprofile.md): Profile reference is invalid or refers to an inappropriate profile
- [cmInvalidProfileLocation](../1559968-anonymous/cminvalidprofilelocation.md): Operation not supported for this profile location
- [cmInvalidSearch](../1559968-anonymous/cminvalidsearch.md): Bad search handle
- [cmSearchError](../1559968-anonymous/cmsearcherror.md): Internal error occurred during profile search
- [cmErrIncompatibleProfile](../1559968-anonymous/cmerrincompatibleprofile.md): Unspecified profile error
- [cmInvalidColorSpace](../1559968-anonymous/cminvalidcolorspace.md): Profile color space does not match bitmap type
- [cmInvalidSrcMap](../1559968-anonymous/cminvalidsrcmap.md): Source pixel map or bitmap was invalid
- [cmInvalidDstMap](../1559968-anonymous/cminvaliddstmap.md): Destination pix/bit map was invalid
- [cmNoGDevicesError](../1559968-anonymous/cmnogdeviceserror.md): Begin matching or end matching—no graphics devices available
- [cmInvalidProfileComment](../1559968-anonymous/cminvalidprofilecomment.md): Bad profile comment during `drawpicture`
- [cmRangeOverFlow](../1559968-anonymous/cmrangeoverflow.md): One or more output color value overflows in color conversion; all input color values will be converted and the overflow will be clipped
- [cmCantCopyModifiedV1Profile](../1559968-anonymous/cmcantcopymodifiedv1profile.md): It is illegal to copy version 1.0 profiles that have been modified
- [cmNamedColorNotFound](../1559968-anonymous/cmnamedcolornotfound.md): The specified named color was not found in the specified profile
- [cmCantGamutCheckError](../1559968-anonymous/cmcantgamutcheckerror.md): Gamut checking not supported by this color world—that is, the color world does not contain a gamut table because it was built with gamut checking turned off
- [cmDeviceDBNotFoundErr](https://developer.apple.com/documentation/applicationservices/1560507-anonymous/cmdevicedbnotfounderr): Preferences not found or loaded; returned by a CM device integration routine.
- [cmDeviceAlreadyRegistered](https://developer.apple.com/documentation/applicationservices/1560507-anonymous/cmdevicealreadyregistered): Device already registered; returned by a CM device integration routine.
- [cmDeviceNotRegistered](https://developer.apple.com/documentation/applicationservices/1560507-anonymous/cmdevicenotregistered): Device not found; returned by a CM device integration routine.
- [cmDeviceProfilesNotFound](https://developer.apple.com/documentation/applicationservices/1560507-anonymous/cmdeviceprofilesnotfound): Profiles not found; returned by a CM device integration routine.
- [cmInternalCFErr](https://developer.apple.com/documentation/applicationservices/1560507-anonymous/cminternalcferr): CoreFoundation failure; returned by a CM device integration routine.
