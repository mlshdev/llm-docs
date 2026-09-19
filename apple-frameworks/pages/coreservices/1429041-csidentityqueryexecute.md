> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1429041-csidentityqueryexecute

# CSIdentityQueryExecute(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func CSIdentityQueryExecute(_ query: CSIdentityQuery!, _ flags: CSIdentityQueryFlags, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

# CSIdentityQueryExecute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
Boolean CSIdentityQueryExecute(CSIdentityQueryRef query, CSIdentityQueryFlags flags, CFErrorRef *error);
```
