> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1429041-csidentityqueryexecute](https://developer.apple.com/documentation/coreservices/1429041-csidentityqueryexecute)

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
