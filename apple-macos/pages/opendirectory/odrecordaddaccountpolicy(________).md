> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecordaddaccountpolicy(_:_:_:_:)](https://developer.apple.com/documentation/opendirectory/odrecordaddaccountpolicy(_:_:_:_:))

# ODRecordAddAccountPolicy(\_:\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.10+

## Declaration

```swift
func ODRecordAddAccountPolicy(_ record: ODRecordRef!, _ policy: CFDictionary!, _ category: String!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## See Also

### Functions

- [ODNodeAddAccountPolicy(\_:\_:\_:\_:)](odnodeaddaccountpolicy%28________%29.md)
- [ODNodeCopyAccountPolicies(\_:\_:)](odnodecopyaccountpolicies%28____%29.md)
- [ODNodeCopyPolicies(\_:\_:)](odnodecopypolicies%28____%29.md): Deprecated.
- [ODNodeCopySupportedPolicies(\_:\_:)](odnodecopysupportedpolicies%28____%29.md): Deprecated.
- [ODNodeCustomFunction(\_:\_:\_:\_:)](odnodecustomfunction%28________%29.md)
- [ODNodePasswordContentCheck(\_:\_:\_:\_:)](odnodepasswordcontentcheck%28________%29.md)
- [ODNodeRemoveAccountPolicy(\_:\_:\_:\_:)](odnoderemoveaccountpolicy%28________%29.md)
- [ODNodeRemovePolicy(\_:\_:\_:)](odnoderemovepolicy%28______%29.md): Deprecated.
- [ODNodeSetAccountPolicies(\_:\_:\_:)](odnodesetaccountpolicies%28______%29.md)
- [ODNodeSetPolicies(\_:\_:\_:)](odnodesetpolicies%28______%29.md): Deprecated.
- [ODNodeSetPolicy(\_:\_:\_:\_:)](odnodesetpolicy%28________%29.md): Deprecated.
- [ODRecordAuthenticationAllowed(\_:\_:)](odrecordauthenticationallowed%28____%29.md)
- [ODRecordCopyAccountPolicies(\_:\_:)](odrecordcopyaccountpolicies%28____%29.md)
- [ODRecordCopyEffectivePolicies(\_:\_:)](odrecordcopyeffectivepolicies%28____%29.md): Deprecated.
- [ODRecordCopyPolicies(\_:\_:)](odrecordcopypolicies%28____%29.md): Deprecated.

# ODRecordAddAccountPolicy (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.10+

## Declaration

```objectivec
extern bool ODRecordAddAccountPolicy(ODRecordRef record, CFDictionaryRef policy, ODPolicyCategoryType category, CFErrorRef*error);
```

## See Also

### Functions

- [ODNodeAddAccountPolicy](odnodeaddaccountpolicy%28________%29.md)
- [ODNodeCopyAccountPolicies](odnodecopyaccountpolicies%28____%29.md)
- [ODNodeCopyPolicies](odnodecopypolicies%28____%29.md): Deprecated.
- [ODNodeCopySupportedPolicies](odnodecopysupportedpolicies%28____%29.md): Deprecated.
- [ODNodeCustomFunction](odnodecustomfunction%28________%29.md)
- [ODNodePasswordContentCheck](odnodepasswordcontentcheck%28________%29.md)
- [ODNodeRemoveAccountPolicy](odnoderemoveaccountpolicy%28________%29.md)
- [ODNodeRemovePolicy](odnoderemovepolicy%28______%29.md): Deprecated.
- [ODNodeSetAccountPolicies](odnodesetaccountpolicies%28______%29.md)
- [ODNodeSetPolicies](odnodesetpolicies%28______%29.md): Deprecated.
- [ODNodeSetPolicy](odnodesetpolicy%28________%29.md): Deprecated.
- [ODRecordAuthenticationAllowed](odrecordauthenticationallowed%28____%29.md)
- [ODRecordCopyAccountPolicies](odrecordcopyaccountpolicies%28____%29.md)
- [ODRecordCopyEffectivePolicies](odrecordcopyeffectivepolicies%28____%29.md): Deprecated.
- [ODRecordCopyPolicies](odrecordcopypolicies%28____%29.md): Deprecated.
