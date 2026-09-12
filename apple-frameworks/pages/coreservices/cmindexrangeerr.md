> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/cmindexrangeerr](https://developer.apple.com/documentation/coreservices/cmindexrangeerr)

# cmIndexRangeErr

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Tag index out of range

## Declaration

```swift
var cmIndexRangeErr: Int { get }
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
- [cmNoCurrentProfile](cmnocurrentprofile.md): Responder error
- [cmElementTagNotFound](cmelementtagnotfound.md): The tag you specified is not in the specified profile
- [cmCantDeleteElement](cmcantdeleteelement.md): Cannot delete the specified profile element
- [cmFatalProfileErr](cmfatalprofileerr.md): Returned from File Manager while updating a profile file in response to `CMUpdateProfile`; profile content may be corrupted
- [cmInvalidProfile](cminvalidprofile.md): Profile reference is invalid or refers to an inappropriate profile
- [cmInvalidProfileLocation](cminvalidprofilelocation.md): Operation not supported for this profile location
- [cmInvalidSearch](cminvalidsearch.md): Bad search handle
- [cmSearchError](cmsearcherror.md): Internal error occurred during profile search
- [cmErrIncompatibleProfile](cmerrincompatibleprofile.md): Unspecified profile error
- [cmInvalidColorSpace](cminvalidcolorspace.md): Profile color space does not match bitmap type
- [cmInvalidSrcMap](cminvalidsrcmap.md): Source pixel map or bitmap was invalid
- [cmInvalidDstMap](cminvaliddstmap.md): Destination pix/bit map was invalid
- [cmNoGDevicesError](cmnogdeviceserror.md): Begin matching or end matching—no graphics devices available
- [cmInvalidProfileComment](cminvalidprofilecomment.md): Bad profile comment during `drawpicture`
- [cmRangeOverFlow](cmrangeoverflow.md): One or more output color value overflows in color conversion; all input color values will be converted and the overflow will be clipped
- [cmCantCopyModifiedV1Profile](cmcantcopymodifiedv1profile.md): It is illegal to copy version 1.0 profiles that have been modified
- [cmNamedColorNotFound](cmnamedcolornotfound.md): The specified named color was not found in the specified profile
- [cmCantGamutCheckError](cmcantgamutcheckerror.md): Gamut checking not supported by this color world—that is, the color world does not contain a gamut table because it was built with gamut checking turned off
- [cmDeviceDBNotFoundErr](https://developer.apple.com/documentation/applicationservices/cmdevicedbnotfounderr): Preferences not found or loaded; returned by a CM device integration routine.
- [cmDeviceAlreadyRegistered](https://developer.apple.com/documentation/applicationservices/cmdevicealreadyregistered): Device already registered; returned by a CM device integration routine.
- [cmDeviceNotRegistered](https://developer.apple.com/documentation/applicationservices/cmdevicenotregistered): Device not found; returned by a CM device integration routine.
- [cmDeviceProfilesNotFound](https://developer.apple.com/documentation/applicationservices/cmdeviceprofilesnotfound): Profiles not found; returned by a CM device integration routine.
- [cmInternalCFErr](https://developer.apple.com/documentation/applicationservices/cminternalcferr): CoreFoundation failure; returned by a CM device integration routine.
