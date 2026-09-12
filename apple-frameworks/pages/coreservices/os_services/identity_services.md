> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/os_services/identity_services](https://developer.apple.com/documentation/coreservices/os_services/identity_services)

# Identity Services (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Access the system's user and group database and manage access controls.

<a id="overview"></a>

## Overview

The Core Services Identity Reference allows developers to support user and group creation, enumeration, attribute inspection, credential management as well as group membership management in their applications.

## Topics

### Classes

- [CSIdentity](../csidentity.md)
- [CSIdentityAuthority](../csidentityauthority.md)
- [CSIdentityQuery](../csidentityquery.md)

### Functions

- [CSDiskSpaceCancelRecovery(\_:)](../1448335-csdiskspacecancelrecovery.md)
- [CSDiskSpaceGetRecoveryEstimate(\_:)](../1448439-csdiskspacegetrecoveryestimate.md)
- [CSDiskSpaceStartRecovery(\_:\_:\_:\_:\_:\_:)](../1447968-csdiskspacestartrecovery.md)
- [CSGetDefaultIdentityAuthority()](../1448826-csgetdefaultidentityauthority.md)
- [CSGetLocalIdentityAuthority()](../1444814-csgetlocalidentityauthority.md)
- [CSGetManagedIdentityAuthority()](../1446750-csgetmanagedidentityauthority.md)
- [CSIdentityAddAlias(\_:\_:)](../1443062-csidentityaddalias.md)
- [CSIdentityAddMember(\_:\_:)](../1447513-csidentityaddmember.md)
- [CSIdentityAuthenticateUsingPassword(\_:\_:)](../1449855-csidentityauthenticateusingpassw.md)
- [CSIdentityAuthorityCopyLocalizedName(\_:)](../1448990-csidentityauthoritycopylocalized.md)
- [CSIdentityAuthorityGetTypeID()](../1449199-csidentityauthoritygettypeid.md)
- [CSIdentityCommit(\_:\_:\_:)](../1449575-csidentitycommit.md)
- [CSIdentityCommitAsynchronously(\_:\_:\_:\_:\_:)](../1447936-csidentitycommitasynchronously.md)
- [CSIdentityCreate(\_:\_:\_:\_:\_:\_:)](../1447616-csidentitycreate.md)
- [CSIdentityCreateCopy(\_:\_:)](../1443553-csidentitycreatecopy.md)
- [CSIdentityCreateGroupMembershipQuery(\_:\_:)](../1448605-csidentitycreategroupmembershipq.md)
- [CSIdentityCreatePersistentReference(\_:\_:)](../1444037-csidentitycreatepersistentrefere.md)
- [CSIdentityDelete(\_:)](../1442616-csidentitydelete.md)
- [CSIdentityGetAliases(\_:)](../1446455-csidentitygetaliases.md)
- [CSIdentityGetAuthority(\_:)](../1446828-csidentitygetauthority.md)
- [CSIdentityGetCertificate(\_:)](../1448582-csidentitygetcertificate.md)
- [CSIdentityGetClass(\_:)](../1447194-csidentitygetclass.md)
- [CSIdentityGetEmailAddress(\_:)](../1446211-csidentitygetemailaddress.md)
- [CSIdentityGetFullName(\_:)](../1447315-csidentitygetfullname.md)
- [CSIdentityGetImageData(\_:)](../1444544-csidentitygetimagedata.md)
- [CSIdentityGetImageDataType(\_:)](../1447478-csidentitygetimagedatatype.md)
- [CSIdentityGetImageURL(\_:)](../1446099-csidentitygetimageurl.md)
- [CSIdentityGetPosixID(\_:)](../1443230-csidentitygetposixid.md)
- [CSIdentityGetPosixName(\_:)](../1447210-csidentitygetposixname.md)
- [CSIdentityGetTypeID()](../1444732-csidentitygettypeid.md)
- [CSIdentityGetUUID(\_:)](../1447987-csidentitygetuuid.md)
- [CSIdentityIsCommitting(\_:)](../1449734-csidentityiscommitting.md)
- [CSIdentityIsEnabled(\_:)](../1443379-csidentityisenabled.md)
- [CSIdentityIsHidden(\_:)](../1449476-csidentityishidden.md)
- [CSIdentityIsMemberOfGroup(\_:\_:)](../1449237-csidentityismemberofgroup.md)
- [CSIdentityQueryCopyResults(\_:)](../1429035-csidentityquerycopyresults.md)
- [CSIdentityQueryCreate(\_:\_:\_:)](../1429003-csidentityquerycreate.md)
- [CSIdentityQueryCreateForCurrentUser(\_:)](../1429037-csidentityquerycreateforcurrentu.md)
- [CSIdentityQueryCreateForName(\_:\_:\_:\_:\_:)](../1428997-csidentityquerycreateforname.md)
- [CSIdentityQueryCreateForPersistentReference(\_:\_:)](../1428991-csidentityquerycreateforpersiste.md)
- [CSIdentityQueryCreateForPosixID(\_:\_:\_:\_:)](../1428990-csidentityquerycreateforposixid.md)
- [CSIdentityQueryCreateForUUID(\_:\_:\_:)](../1429007-csidentityquerycreateforuuid.md)
- [CSIdentityQueryExecute(\_:\_:\_:)](../1429041-csidentityqueryexecute.md)
- [CSIdentityQueryExecuteAsynchronously(\_:\_:\_:\_:\_:)](../1429011-csidentityqueryexecuteasynchrono.md)
- [CSIdentityQueryGetTypeID()](../1429012-csidentityquerygettypeid.md)
- [CSIdentityQueryStop(\_:)](../1429047-csidentityquerystop.md)
- [CSIdentityRemoveAlias(\_:\_:)](../1442114-csidentityremovealias.md)
- [CSIdentityRemoveClient(\_:)](../1448933-csidentityremoveclient.md)
- [CSIdentityRemoveMember(\_:\_:)](../1448796-csidentityremovemember.md)
- [CSIdentitySetCertificate(\_:\_:)](../1447691-csidentitysetcertificate.md)
- [CSIdentitySetEmailAddress(\_:\_:)](../1443235-csidentitysetemailaddress.md)
- [CSIdentitySetFullName(\_:\_:)](../1446623-csidentitysetfullname.md)
- [CSIdentitySetImageData(\_:\_:\_:)](../1441866-csidentitysetimagedata.md)
- [CSIdentitySetImageURL(\_:\_:)](../1446717-csidentitysetimageurl.md)
- [CSIdentitySetIsEnabled(\_:\_:)](../1443028-csidentitysetisenabled.md)
- [CSIdentitySetPassword(\_:\_:)](../1443568-csidentitysetpassword.md)

### Structures

- [CSIdentityClientContext](../csidentityclientcontext.md)
- [CSIdentityQueryClientContext](../csidentityqueryclientcontext.md)

### Constants

- [kCSIdentityErrorDomain](../kcsidentityerrordomain.md)
- [kCSIdentityGeneratePosixName](../kcsidentitygenerateposixname.md)

# Identity Services (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Access the system's user and group database and manage access controls.

<a id="overview"></a>

## Overview

The Core Services Identity Reference allows developers to support user and group creation, enumeration, attribute inspection, credential management as well as group membership management in their applications.

## Topics

### Classes

- [CSIdentityRef](../csidentityref.md)
- [CSIdentityAuthorityRef](../csidentityauthorityref.md)
- [CSIdentityQueryRef](../csidentityqueryref.md)

### Functions

- [CSCopyMachineName](../1533316-cscopymachinename.md): Deprecated.
- [CSCopyUserName](../1533406-cscopyusername.md): Deprecated.
- [CSDiskSpaceCancelRecovery](../1448335-csdiskspacecancelrecovery.md)
- [CSDiskSpaceGetRecoveryEstimate](../1448439-csdiskspacegetrecoveryestimate.md)
- [CSDiskSpaceStartRecovery](../1447968-csdiskspacestartrecovery.md)
- [CSGetDefaultIdentityAuthority](../1448826-csgetdefaultidentityauthority.md)
- [CSGetLocalIdentityAuthority](../1444814-csgetlocalidentityauthority.md)
- [CSGetManagedIdentityAuthority](../1446750-csgetmanagedidentityauthority.md)
- [CSIdentityAddAlias](../1443062-csidentityaddalias.md)
- [CSIdentityAddMember](../1447513-csidentityaddmember.md)
- [CSIdentityAuthenticateUsingPassword](../1449855-csidentityauthenticateusingpassw.md)
- [CSIdentityAuthorityCopyLocalizedName](../1448990-csidentityauthoritycopylocalized.md)
- [CSIdentityAuthorityGetTypeID](../1449199-csidentityauthoritygettypeid.md)
- [CSIdentityCommit](../1449575-csidentitycommit.md)
- [CSIdentityCommitAsynchronously](../1447936-csidentitycommitasynchronously.md)
- [CSIdentityCreate](../1447616-csidentitycreate.md)
- [CSIdentityCreateCopy](../1443553-csidentitycreatecopy.md)
- [CSIdentityCreateGroupMembershipQuery](../1448605-csidentitycreategroupmembershipq.md)
- [CSIdentityCreatePersistentReference](../1444037-csidentitycreatepersistentrefere.md)
- [CSIdentityDelete](../1442616-csidentitydelete.md)
- [CSIdentityGetAliases](../1446455-csidentitygetaliases.md)
- [CSIdentityGetAuthority](../1446828-csidentitygetauthority.md)
- [CSIdentityGetCertificate](../1448582-csidentitygetcertificate.md)
- [CSIdentityGetClass](../1447194-csidentitygetclass.md)
- [CSIdentityGetEmailAddress](../1446211-csidentitygetemailaddress.md)
- [CSIdentityGetFullName](../1447315-csidentitygetfullname.md)
- [CSIdentityGetImageData](../1444544-csidentitygetimagedata.md)
- [CSIdentityGetImageDataType](../1447478-csidentitygetimagedatatype.md)
- [CSIdentityGetImageURL](../1446099-csidentitygetimageurl.md)
- [CSIdentityGetPosixID](../1443230-csidentitygetposixid.md)
- [CSIdentityGetPosixName](../1447210-csidentitygetposixname.md)
- [CSIdentityGetTypeID](../1444732-csidentitygettypeid.md)
- [CSIdentityGetUUID](../1447987-csidentitygetuuid.md)
- [CSIdentityIsCommitting](../1449734-csidentityiscommitting.md)
- [CSIdentityIsEnabled](../1443379-csidentityisenabled.md)
- [CSIdentityIsHidden](../1449476-csidentityishidden.md)
- [CSIdentityIsMemberOfGroup](../1449237-csidentityismemberofgroup.md)
- [CSIdentityQueryCopyResults](../1429035-csidentityquerycopyresults.md)
- [CSIdentityQueryCreate](../1429003-csidentityquerycreate.md)
- [CSIdentityQueryCreateForCurrentUser](../1429037-csidentityquerycreateforcurrentu.md)
- [CSIdentityQueryCreateForName](../1428997-csidentityquerycreateforname.md)
- [CSIdentityQueryCreateForPersistentReference](../1428991-csidentityquerycreateforpersiste.md)
- [CSIdentityQueryCreateForPosixID](../1428990-csidentityquerycreateforposixid.md)
- [CSIdentityQueryCreateForUUID](../1429007-csidentityquerycreateforuuid.md)
- [CSIdentityQueryExecute](../1429041-csidentityqueryexecute.md)
- [CSIdentityQueryExecuteAsynchronously](../1429011-csidentityqueryexecuteasynchrono.md)
- [CSIdentityQueryGetTypeID](../1429012-csidentityquerygettypeid.md)
- [CSIdentityQueryStop](../1429047-csidentityquerystop.md)
- [CSIdentityRemoveAlias](../1442114-csidentityremovealias.md)
- [CSIdentityRemoveClient](../1448933-csidentityremoveclient.md)
- [CSIdentityRemoveMember](../1448796-csidentityremovemember.md)
- [CSIdentitySetCertificate](../1447691-csidentitysetcertificate.md)
- [CSIdentitySetEmailAddress](../1443235-csidentitysetemailaddress.md)
- [CSIdentitySetFullName](../1446623-csidentitysetfullname.md)
- [CSIdentitySetImageData](../1441866-csidentitysetimagedata.md)
- [CSIdentitySetImageURL](../1446717-csidentitysetimageurl.md)
- [CSIdentitySetIsEnabled](../1443028-csidentitysetisenabled.md)
- [CSIdentitySetPassword](../1443568-csidentitysetpassword.md)

### Structures

- [CSIdentityClientContext](../csidentityclientcontext.md)
- [CSIdentityQueryClientContext](../csidentityqueryclientcontext.md)

### Constants

- [kCSIdentityErrorDomain](../kcsidentityerrordomain.md)
- [kCSIdentityGeneratePosixName](../kcsidentitygenerateposixname.md)
