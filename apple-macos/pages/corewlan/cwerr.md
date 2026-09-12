> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwerr](https://developer.apple.com/documentation/corewlan/cwerr)

# CWErr (Swift)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

## Declaration

```swift
enum CWErr
```

## Topics

### Constants

- [CWErr.cwapFullErr](cwerr/cwapfullerr.md)
- [CWErr.cwAssociationDeniedErr](cwerr/cwassociationdeniederr.md)
- [CWErr.cwAuthenticationAlgorithmUnsupportedErr](cwerr/cwauthenticationalgorithmunsupportederr.md)
- [CWErr.cwChallengeFailureErr](cwerr/cwchallengefailureerr.md)
- [CWErr.cwCipherSuiteRejectedErr](cwerr/cwciphersuiterejectederr.md)
- [CWErr.cwdsssofdmUnsupportedErr](cwerr/cwdsssofdmunsupportederr.md)
- [CWErr.cweapolErr](cwerr/cweapolerr.md)
- [CWErr.cwErr](cwerr/cwerr.md)
- [CWErr.cwhtFeaturesNotSupportedErr](cwerr/cwhtfeaturesnotsupportederr.md)
- [CWErr.cwipcFailureErr](cwerr/cwipcfailureerr.md)
- [CWErr.cwInvalidAKMPErr](cwerr/cwinvalidakmperr.md)
- [CWErr.cwInvalidAuthenticationSequenceNumberErr](cwerr/cwinvalidauthenticationsequencenumbererr.md)
- [CWErr.cwInvalidFormatErr](cwerr/cwinvalidformaterr.md)
- [CWErr.cwInvalidGroupCipherErr](cwerr/cwinvalidgroupciphererr.md)
- [CWErr.cwInvalidInformationElementErr](cwerr/cwinvalidinformationelementerr.md)
- [CWErr.cwInvalidPMKErr](cwerr/cwinvalidpmkerr.md)
- [CWErr.cwInvalidPairwiseCipherErr](cwerr/cwinvalidpairwiseciphererr.md)
- [CWErr.cwInvalidParameterErr](cwerr/cwinvalidparametererr.md)
- [CWErr.cwInvalidRSNCapabilitiesErr](cwerr/cwinvalidrsncapabilitieserr.md)
- [CWErr.cwNoErr](cwerr/cwnoerr.md)
- [CWErr.cwNoMemoryErr](cwerr/cwnomemoryerr.md)
- [CWErr.cwNotSupportedErr](cwerr/cwnotsupportederr.md)
- [CWErr.cwOperationNotPermittedErr](cwerr/cwoperationnotpermittederr.md)
- [CWErr.cwpcoTransitionTimeNotSupportedErr](cwerr/cwpcotransitiontimenotsupportederr.md)
- [CWErr.cwReassociationDeniedErr](cwerr/cwreassociationdeniederr.md)
- [CWErr.cwReferenceNotBoundErr](cwerr/cwreferencenotbounderr.md)
- [CWErr.cwShortSlotUnsupportedErr](cwerr/cwshortslotunsupportederr.md)
- [CWErr.cwSupplicantTimeoutErr](cwerr/cwsupplicanttimeouterr.md)
- [CWErr.cwTimeoutErr](cwerr/cwtimeouterr.md)
- [CWErr.cwUnknownErr](cwerr/cwunknownerr.md)
- [CWErr.cwUnspecifiedFailureErr](cwerr/cwunspecifiedfailureerr.md)
- [CWErr.cwUnsupportedCapabilitiesErr](cwerr/cwunsupportedcapabilitieserr.md)
- [CWErr.cwUnsupportedRSNVersionErr](cwerr/cwunsupportedrsnversionerr.md)
- [CWErr.cwUnsupportedRateSetErr](cwerr/cwunsupportedrateseterr.md)

### Initializers

- [init(rawValue:)](cwerr/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWEventType](cweventtype.md): Wi-Fi event types.
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.

# CWErr (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

## Declaration

```objectivec
enum CWErr : NSInteger;
```

## Topics

### Constants

- [kCWAPFullErr](cwerr/cwapfullerr.md)
- [kCWAssociationDeniedErr](cwerr/cwassociationdeniederr.md)
- [kCWAuthenticationAlgorithmUnsupportedErr](cwerr/cwauthenticationalgorithmunsupportederr.md)
- [kCWChallengeFailureErr](cwerr/cwchallengefailureerr.md)
- [kCWCipherSuiteRejectedErr](cwerr/cwciphersuiterejectederr.md)
- [kCWDSSSOFDMUnsupportedErr](cwerr/cwdsssofdmunsupportederr.md)
- [kCWEAPOLErr](cwerr/cweapolerr.md)
- [kCWErr](cwerr/cwerr.md)
- [kCWHTFeaturesNotSupportedErr](cwerr/cwhtfeaturesnotsupportederr.md)
- [kCWIPCFailureErr](cwerr/cwipcfailureerr.md)
- [kCWInvalidAKMPErr](cwerr/cwinvalidakmperr.md)
- [kCWInvalidAuthenticationSequenceNumberErr](cwerr/cwinvalidauthenticationsequencenumbererr.md)
- [kCWInvalidFormatErr](cwerr/cwinvalidformaterr.md)
- [kCWInvalidGroupCipherErr](cwerr/cwinvalidgroupciphererr.md)
- [kCWInvalidInformationElementErr](cwerr/cwinvalidinformationelementerr.md)
- [kCWInvalidPMKErr](cwerr/cwinvalidpmkerr.md)
- [kCWInvalidPairwiseCipherErr](cwerr/cwinvalidpairwiseciphererr.md)
- [kCWInvalidParameterErr](cwerr/cwinvalidparametererr.md)
- [kCWInvalidRSNCapabilitiesErr](cwerr/cwinvalidrsncapabilitieserr.md)
- [kCWNoErr](cwerr/cwnoerr.md)
- [kCWNoMemoryErr](cwerr/cwnomemoryerr.md)
- [kCWNotSupportedErr](cwerr/cwnotsupportederr.md)
- [kCWOperationNotPermittedErr](cwerr/cwoperationnotpermittederr.md)
- [kCWPCOTransitionTimeNotSupportedErr](cwerr/cwpcotransitiontimenotsupportederr.md)
- [kCWReassociationDeniedErr](cwerr/cwreassociationdeniederr.md)
- [kCWReferenceNotBoundErr](cwerr/cwreferencenotbounderr.md)
- [kCWShortSlotUnsupportedErr](cwerr/cwshortslotunsupportederr.md)
- [kCWSupplicantTimeoutErr](cwerr/cwsupplicanttimeouterr.md)
- [kCWTimeoutErr](cwerr/cwtimeouterr.md)
- [kCWUnknownErr](cwerr/cwunknownerr.md)
- [kCWUnspecifiedFailureErr](cwerr/cwunspecifiedfailureerr.md)
- [kCWUnsupportedCapabilitiesErr](cwerr/cwunsupportedcapabilitieserr.md)
- [kCWUnsupportedRSNVersionErr](cwerr/cwunsupportedrsnversionerr.md)
- [kCWUnsupportedRateSetErr](cwerr/cwunsupportedrateseterr.md)

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWEventType](cweventtype.md): Wi-Fi event types.
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.
