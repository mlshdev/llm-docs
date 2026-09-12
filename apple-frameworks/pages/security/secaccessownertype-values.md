> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccessownertype-values](https://developer.apple.com/documentation/security/secaccessownertype-values)

# SecAccessOwnerType Values

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** API Collection  
**Availability:** Mac Catalyst 16.0+ · macOS 10.7+

Flags that enable you to configure ACL ownership.

## Topics

### Constants

- [kSecUseOnlyUID](ksecuseonlyuid.md): The access control list should be owned by the user matching the specified user ID parameter.
- [kSecUseOnlyGID](ksecuseonlygid.md): The access control list should be owned by users that are members of a group matching the specified group ID parameter.
- [kSecHonorRoot](ksechonorroot.md): The access control list should treat the root user as a typical user for ownership purposes.
- [kSecMatchBits](ksecmatchbits.md): The access control list should be owned by users whose ID matches the specified user ID or who are members of a group whose ID matches the specified group ID parameter.
