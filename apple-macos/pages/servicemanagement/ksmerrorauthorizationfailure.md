> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/ksmerrorauthorizationfailure](https://developer.apple.com/documentation/servicemanagement/ksmerrorauthorizationfailure)

# kSMErrorAuthorizationFailure (Swift)

**Framework:** Service Management  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The authorization requested failed.

## Declaration

```swift
var kSMErrorAuthorizationFailure: Int { get }
```

<a id="Discussion"></a>

## Discussion

The request requires authorization (such as, adding a job to the [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)), but the `AuthorizationRef` doesn’t contain the required right.

## See Also

### Constants

- [kSMErrorAlreadyRegistered](ksmerroralreadyregistered.md): The application is already registered.
- [kSMErrorInternalFailure](ksmerrorinternalfailure.md): An internal failure has occurred.
- [kSMErrorInvalidPlist](ksmerrorinvalidplist.md): The app’s property list is invalid.
- [kSMErrorInvalidSignature](ksmerrorinvalidsignature.md): The app’s code signature doesn’t meet the requirements to perform the operation.
- [kSMErrorJobMustBeEnabled](ksmerrorjobmustbeenabled.md)
- [kSMErrorJobNotFound](ksmerrorjobnotfound.md): The system can’t find the specified job.
- [kSMErrorJobPlistNotFound](ksmerrorjobplistnotfound.md)
- [kSMErrorLaunchDeniedByUser](ksmerrorlaunchdeniedbyuser.md): The user denied the app’s launch request.
- [kSMErrorServiceUnavailable](ksmerrorserviceunavailable.md): The service necessary to perform this operation is unavailable or is no longer accepting requests.
- [kSMErrorToolNotValid](ksmerrortoolnotvalid.md): The specified path doesn’t exist or the helper tool at the specified path isn’t valid.

# kSMErrorAuthorizationFailure (Objective-C)

**Framework:** Service Management  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The authorization requested failed.

## Declaration

```objectivec
kSMErrorAuthorizationFailure
```

<a id="Discussion"></a>

## Discussion

The request requires authorization (such as, adding a job to the [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)), but the `AuthorizationRef` doesn’t contain the required right.

## See Also

### Constants

- [kSMErrorAlreadyRegistered](ksmerroralreadyregistered.md): The application is already registered.
- [kSMErrorInternalFailure](ksmerrorinternalfailure.md): An internal failure has occurred.
- [kSMErrorInvalidPlist](ksmerrorinvalidplist.md): The app’s property list is invalid.
- [kSMErrorInvalidSignature](ksmerrorinvalidsignature.md): The app’s code signature doesn’t meet the requirements to perform the operation.
- [kSMErrorJobMustBeEnabled](ksmerrorjobmustbeenabled.md)
- [kSMErrorJobNotFound](ksmerrorjobnotfound.md): The system can’t find the specified job.
- [kSMErrorJobPlistNotFound](ksmerrorjobplistnotfound.md)
- [kSMErrorLaunchDeniedByUser](ksmerrorlaunchdeniedbyuser.md): The user denied the app’s launch request.
- [kSMErrorServiceUnavailable](ksmerrorserviceunavailable.md): The service necessary to perform this operation is unavailable or is no longer accepting requests.
- [kSMErrorToolNotValid](ksmerrortoolnotvalid.md): The specified path doesn’t exist or the helper tool at the specified path isn’t valid.
