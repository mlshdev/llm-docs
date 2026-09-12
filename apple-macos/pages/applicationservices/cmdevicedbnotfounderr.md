> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmdevicedbnotfounderr](https://developer.apple.com/documentation/applicationservices/cmdevicedbnotfounderr)

# cmDeviceDBNotFoundErr

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Preferences not found or loaded; returned by a CM device integration routine.

## Declaration

```swift
var cmDeviceDBNotFoundErr: Int { get }
```

## See Also

### Result Codes

- [cmProfileError](https://developer.apple.com/documentation/coreservices/cmprofileerror): There is something wrong with the content of the profile
- [cmMethodError](https://developer.apple.com/documentation/coreservices/cmmethoderror): An error occurred during the CMM arbitration process that determines the CMM to use
- [cmMethodNotFound](https://developer.apple.com/documentation/coreservices/cmmethodnotfound): CMM not present
- [cmProfileNotFound](https://developer.apple.com/documentation/coreservices/cmprofilenotfound): Responder error
- [cmProfilesIdentical](https://developer.apple.com/documentation/coreservices/cmprofilesidentical): Profiles are the same
- [cmCantConcatenateError](https://developer.apple.com/documentation/coreservices/cmcantconcatenateerror): Profiles cannot be concatenated
- [cmCantXYZ](https://developer.apple.com/documentation/coreservices/cmcantxyz): CMM does not handle XYZ color space
- [cmCantDeleteProfile](https://developer.apple.com/documentation/coreservices/cmcantdeleteprofile): Responder error
- [cmUnsupportedDataType](https://developer.apple.com/documentation/coreservices/cmunsupporteddatatype): Responder error
- [cmNoCurrentProfile](https://developer.apple.com/documentation/coreservices/cmnocurrentprofile): Responder error
- [cmElementTagNotFound](https://developer.apple.com/documentation/coreservices/cmelementtagnotfound): The tag you specified is not in the specified profile
- [cmIndexRangeErr](https://developer.apple.com/documentation/coreservices/cmindexrangeerr): Tag index out of range
- [cmCantDeleteElement](https://developer.apple.com/documentation/coreservices/cmcantdeleteelement): Cannot delete the specified profile element
- [cmFatalProfileErr](https://developer.apple.com/documentation/coreservices/cmfatalprofileerr): Returned from File Manager while updating a profile file in response to `CMUpdateProfile`; profile content may be corrupted
- [cmInvalidProfile](https://developer.apple.com/documentation/coreservices/cminvalidprofile): Profile reference is invalid or refers to an inappropriate profile
- [cmInvalidProfileLocation](https://developer.apple.com/documentation/coreservices/cminvalidprofilelocation): Operation not supported for this profile location
- [cmInvalidSearch](https://developer.apple.com/documentation/coreservices/cminvalidsearch): Bad search handle
- [cmSearchError](https://developer.apple.com/documentation/coreservices/cmsearcherror): Internal error occurred during profile search
- [cmErrIncompatibleProfile](https://developer.apple.com/documentation/coreservices/cmerrincompatibleprofile): Unspecified profile error
- [cmInvalidColorSpace](https://developer.apple.com/documentation/coreservices/cminvalidcolorspace): Profile color space does not match bitmap type
- [cmInvalidSrcMap](https://developer.apple.com/documentation/coreservices/cminvalidsrcmap): Source pixel map or bitmap was invalid
- [cmInvalidDstMap](https://developer.apple.com/documentation/coreservices/cminvaliddstmap): Destination pix/bit map was invalid
- [cmNoGDevicesError](https://developer.apple.com/documentation/coreservices/cmnogdeviceserror): Begin matching or end matching—no graphics devices available
- [cmInvalidProfileComment](https://developer.apple.com/documentation/coreservices/cminvalidprofilecomment): Bad profile comment during `drawpicture`
- [cmRangeOverFlow](https://developer.apple.com/documentation/coreservices/cmrangeoverflow): One or more output color value overflows in color conversion; all input color values will be converted and the overflow will be clipped
- [cmCantCopyModifiedV1Profile](https://developer.apple.com/documentation/coreservices/cmcantcopymodifiedv1profile): It is illegal to copy version 1.0 profiles that have been modified
- [cmNamedColorNotFound](https://developer.apple.com/documentation/coreservices/cmnamedcolornotfound): The specified named color was not found in the specified profile
- [cmCantGamutCheckError](https://developer.apple.com/documentation/coreservices/cmcantgamutcheckerror): Gamut checking not supported by this color world—that is, the color world does not contain a gamut table because it was built with gamut checking turned off
- [cmDeviceAlreadyRegistered](cmdevicealreadyregistered.md): Device already registered; returned by a CM device integration routine.
- [cmDeviceNotRegistered](cmdevicenotregistered.md): Device not found; returned by a CM device integration routine.
- [cmDeviceProfilesNotFound](cmdeviceprofilesnotfound.md): Profiles not found; returned by a CM device integration routine.
- [cmInternalCFErr](cminternalcferr.md): CoreFoundation failure; returned by a CM device integration routine.
