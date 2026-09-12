> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560507-anonymous/cmdeviceprofilesnotfound](https://developer.apple.com/documentation/applicationservices/1560507-anonymous/cmdeviceprofilesnotfound)

# cmDeviceProfilesNotFound

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Profiles not found; returned by a CM device integration routine.

## Declaration

```objectivec
cmDeviceProfilesNotFound = -4230
```

## See Also

### Result Codes

- [cmProfileError](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmprofileerror): There is something wrong with the content of the profile
- [cmMethodError](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmmethoderror): An error occurred during the CMM arbitration process that determines the CMM to use
- [cmMethodNotFound](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmmethodnotfound): CMM not present
- [cmProfileNotFound](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmprofilenotfound): Responder error
- [cmProfilesIdentical](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmprofilesidentical): Profiles are the same
- [cmCantConcatenateError](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmcantconcatenateerror): Profiles cannot be concatenated
- [cmCantXYZ](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmcantxyz): CMM does not handle XYZ color space
- [cmCantDeleteProfile](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmcantdeleteprofile): Responder error
- [cmUnsupportedDataType](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmunsupporteddatatype): Responder error
- [cmNoCurrentProfile](https://developer.apple.com/documentation/coreservices/1559955-anonymous/cmnocurrentprofile): Responder error
- [cmElementTagNotFound](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmelementtagnotfound): The tag you specified is not in the specified profile
- [cmIndexRangeErr](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmindexrangeerr): Tag index out of range
- [cmCantDeleteElement](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmcantdeleteelement): Cannot delete the specified profile element
- [cmFatalProfileErr](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmfatalprofileerr): Returned from File Manager while updating a profile file in response to `CMUpdateProfile`; profile content may be corrupted
- [cmInvalidProfile](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvalidprofile): Profile reference is invalid or refers to an inappropriate profile
- [cmInvalidProfileLocation](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvalidprofilelocation): Operation not supported for this profile location
- [cmInvalidSearch](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvalidsearch): Bad search handle
- [cmSearchError](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmsearcherror): Internal error occurred during profile search
- [cmErrIncompatibleProfile](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmerrincompatibleprofile): Unspecified profile error
- [cmInvalidColorSpace](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvalidcolorspace): Profile color space does not match bitmap type
- [cmInvalidSrcMap](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvalidsrcmap): Source pixel map or bitmap was invalid
- [cmInvalidDstMap](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvaliddstmap): Destination pix/bit map was invalid
- [cmNoGDevicesError](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmnogdeviceserror): Begin matching or end matching—no graphics devices available
- [cmInvalidProfileComment](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cminvalidprofilecomment): Bad profile comment during `drawpicture`
- [cmRangeOverFlow](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmrangeoverflow): One or more output color value overflows in color conversion; all input color values will be converted and the overflow will be clipped
- [cmCantCopyModifiedV1Profile](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmcantcopymodifiedv1profile): It is illegal to copy version 1.0 profiles that have been modified
- [cmNamedColorNotFound](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmnamedcolornotfound): The specified named color was not found in the specified profile
- [cmCantGamutCheckError](https://developer.apple.com/documentation/coreservices/1559968-anonymous/cmcantgamutcheckerror): Gamut checking not supported by this color world—that is, the color world does not contain a gamut table because it was built with gamut checking turned off
- [cmDeviceDBNotFoundErr](cmdevicedbnotfounderr.md): Preferences not found or loaded; returned by a CM device integration routine.
- [cmDeviceAlreadyRegistered](cmdevicealreadyregistered.md): Device already registered; returned by a CM device integration routine.
- [cmDeviceNotRegistered](cmdevicenotregistered.md): Device not found; returned by a CM device integration routine.
- [cmInternalCFErr](cminternalcferr.md): CoreFoundation failure; returned by a CM device integration routine.
