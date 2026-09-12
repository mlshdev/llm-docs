> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/access-control-lists](https://developer.apple.com/documentation/security/access-control-lists)

# Access Control Lists (Swift)

**Framework:** Security  
**Kind:** API Collection

Control which apps have access to keychain items in macOS.

<a id="overview"></a>

## Overview

In macOS, for items not stored on the iCloud keychain, each protected keychain item—like a password or private key—has an associated access instance that contains an access control list (ACL). The entries in this list in turn each contain an array of operations and an array of apps trusted to carry out those operations with the item. The collection of ACL entries govern the accessibility of the corresponding keychain item.

![Diagram showing the detailed contents of access attribute of a kechain item, namely an access control list composed of entries for different operations and trusted apps.](https://developer.apple.com/images/com.apple.security/media-2983146@2x.png)

When an app attempts to access a keychain item for a particular purpose—like using a private key to sign a document—the system looks for an entry in the item’s ACL containing the operation. If there’s no entry that lists the operation, then the system denies access and it’s up to the calling app to try something else or to notify the user.

If there is an entry that lists the operation, the system checks whether the calling app is among the entry’s trusted apps. If so, the system grants access. Otherwise, the system prompts the user for confirmation. The user may choose to Deny, Allow, or Always Allow the access. In the latter case, the system adds the app to the list of trusted apps for that entry, enabling the app to gain access in the future without prompting the user again.

> **Important**

>  ACLs are not available in iOS or in macOS apps that use the iCloud keychain. For keychain item sharing in those environments, use access groups instead. See [Sharing access to keychain items among a collection of apps](sharing-access-to-keychain-items-among-a-collection-of-apps.md).

## Topics

### Access Creation

- [SecAccessCreate(\_:\_:\_:)](secaccesscreate%28______%29.md): Deprecated. Creates a new access instance associated with a given protected keychain item.
- [SecAccessCreateWithOwnerAndACL(\_:\_:\_:\_:\_:)](secaccesscreatewithownerandacl%28__________%29.md): Deprecated. Creates a new access instance using the owner and ACL entries you provide.
- [SecAccessOwnerType](secaccessownertype.md): A type for flags that enable you to configure ACL ownership.
- [SecAccessOwnerType Values](secaccessownertype-values.md): Flags that enable you to configure ACL ownership.
- [SecAccess](secaccess.md): An opaque type that identifies a keychain item’s access information.
- [SecAccessGetTypeID()](secaccessgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which an access instance belongs.

### Access Query

- [SecAccessCopyACLList(\_:\_:)](secaccesscopyacllist%28____%29.md): Deprecated. Retrieves all the ACL entries of a given access instance.
- [SecAccessCopyMatchingACLList(\_:\_:)](secaccesscopymatchingacllist%28____%29.md): Deprecated. Retrieves selected ACL entries from a given access instance.
- [SecAccessCopyOwnerAndACL(\_:\_:\_:\_:\_:)](secaccesscopyownerandacl%28__________%29.md): Deprecated. Retrieves the owner and the ACL entries of a given access instance.

### Access Control List Entries

- [SecACLCreateWithSimpleContents(\_:\_:\_:\_:\_:)](secaclcreatewithsimplecontents%28__________%29.md): Deprecated. Creates a new ACL entry with the given characteristics, and adds it to an access instance.
- [SecACLRemove(\_:)](secaclremove%28__%29.md): Deprecated. Removes the specified ACL entry from the access instance that contains it.
- [ACL Authorization Keys](acl-authorization-keys.md): The operations an access control list entry applies to.
- [SecKeychainPromptSelector](seckeychainpromptselector.md): Bits that define when a keychain should require a passphrase.
- [SecACL](secacl.md): An opaque type that represents information about an ACL entry.
- [SecACLGetTypeID()](secaclgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which an ACL entry belongs.

### Access Control List Configuration

- [SecACLCopyContents(\_:\_:\_:\_:)](secaclcopycontents%28________%29.md): Deprecated. Returns the application list, description, and prompt selector for a given ACL entry.
- [SecACLSetContents(\_:\_:\_:\_:)](secaclsetcontents%28________%29.md): Deprecated. Sets the application list, description, and prompt selector for a given ACL entry.
- [SecACLCopyAuthorizations(\_:)](secaclcopyauthorizations%28__%29.md): Deprecated. Retrieves the authorization tags of a given ACL entry.
- [SecACLUpdateAuthorizations(\_:\_:)](secaclupdateauthorizations%28____%29.md): Deprecated. Sets the authorization tags for a given ACL.

### Trusted Applications

- [SecTrustedApplicationCreateFromPath(\_:\_:)](sectrustedapplicationcreatefrompath%28____%29.md): Deprecated. Creates a trusted app instance based on the app at the given path in the file system.
- [SecTrustedApplicationCopyData(\_:\_:)](sectrustedapplicationcopydata%28____%29.md): Deprecated. Retrieves the data of a trusted app instance.
- [SecTrustedApplicationSetData(\_:\_:)](sectrustedapplicationsetdata%28____%29.md): Deprecated. Sets the data of a given trusted app instance.
- [SecTrustedApplication](sectrustedapplication.md): An opaque type that contains information about a trusted app.
- [SecTrustedApplicationGetTypeID()](sectrustedapplicationgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a trusted app instance belongs.

### Keychain Item Access

- [SecKeychainItemSetAccess(\_:\_:)](seckeychainitemsetaccess%28____%29.md): Deprecated. Sets the access of a given keychain item.
- [SecKeychainItemCopyAccess(\_:\_:)](seckeychainitemcopyaccess%28____%29.md): Deprecated. Retrieves the access of a given keychain item.

# Access Control Lists (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Control which apps have access to keychain items in macOS.

<a id="overview"></a>

## Overview

In macOS, for items not stored on the iCloud keychain, each protected keychain item—like a password or private key—has an associated access instance that contains an access control list (ACL). The entries in this list in turn each contain an array of operations and an array of apps trusted to carry out those operations with the item. The collection of ACL entries govern the accessibility of the corresponding keychain item.

![Diagram showing the detailed contents of access attribute of a kechain item, namely an access control list composed of entries for different operations and trusted apps.](https://developer.apple.com/images/com.apple.security/media-2983146@2x.png)

When an app attempts to access a keychain item for a particular purpose—like using a private key to sign a document—the system looks for an entry in the item’s ACL containing the operation. If there’s no entry that lists the operation, then the system denies access and it’s up to the calling app to try something else or to notify the user.

If there is an entry that lists the operation, the system checks whether the calling app is among the entry’s trusted apps. If so, the system grants access. Otherwise, the system prompts the user for confirmation. The user may choose to Deny, Allow, or Always Allow the access. In the latter case, the system adds the app to the list of trusted apps for that entry, enabling the app to gain access in the future without prompting the user again.

> **Important**

>  ACLs are not available in iOS or in macOS apps that use the iCloud keychain. For keychain item sharing in those environments, use access groups instead. See [Sharing access to keychain items among a collection of apps](sharing-access-to-keychain-items-among-a-collection-of-apps.md).

## Topics

### Access Creation

- [SecAccessCreate](secaccesscreate%28______%29.md): Deprecated. Creates a new access instance associated with a given protected keychain item.
- [SecAccessCreateWithOwnerAndACL](secaccesscreatewithownerandacl%28__________%29.md): Deprecated. Creates a new access instance using the owner and ACL entries you provide.
- [SecAccessOwnerType](secaccessownertype.md): A type for flags that enable you to configure ACL ownership.
- [SecAccessOwnerType Values](secaccessownertype-values.md): Flags that enable you to configure ACL ownership.
- [SecAccessRef](secaccess.md): An opaque type that identifies a keychain item’s access information.
- [SecAccessGetTypeID](secaccessgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which an access instance belongs.

### Access Query

- [SecAccessCopyACLList](secaccesscopyacllist%28____%29.md): Deprecated. Retrieves all the ACL entries of a given access instance.
- [SecAccessCopyMatchingACLList](secaccesscopymatchingacllist%28____%29.md): Deprecated. Retrieves selected ACL entries from a given access instance.
- [SecAccessCopyOwnerAndACL](secaccesscopyownerandacl%28__________%29.md): Deprecated. Retrieves the owner and the ACL entries of a given access instance.

### Access Control List Entries

- [SecACLCreateWithSimpleContents](secaclcreatewithsimplecontents%28__________%29.md): Deprecated. Creates a new ACL entry with the given characteristics, and adds it to an access instance.
- [SecACLRemove](secaclremove%28__%29.md): Deprecated. Removes the specified ACL entry from the access instance that contains it.
- [ACL Authorization Keys](acl-authorization-keys.md): The operations an access control list entry applies to.
- [SecKeychainPromptSelector](seckeychainpromptselector.md): Bits that define when a keychain should require a passphrase.
- [SecACLRef](secacl.md): An opaque type that represents information about an ACL entry.
- [SecACLGetTypeID](secaclgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which an ACL entry belongs.

### Access Control List Configuration

- [SecACLCopyContents](secaclcopycontents%28________%29.md): Deprecated. Returns the application list, description, and prompt selector for a given ACL entry.
- [SecACLSetContents](secaclsetcontents%28________%29.md): Deprecated. Sets the application list, description, and prompt selector for a given ACL entry.
- [SecACLCopyAuthorizations](secaclcopyauthorizations%28__%29.md): Deprecated. Retrieves the authorization tags of a given ACL entry.
- [SecACLUpdateAuthorizations](secaclupdateauthorizations%28____%29.md): Deprecated. Sets the authorization tags for a given ACL.

### Trusted Applications

- [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md): Deprecated. Creates a trusted app instance based on the app at the given path in the file system.
- [SecTrustedApplicationCopyData](sectrustedapplicationcopydata%28____%29.md): Deprecated. Retrieves the data of a trusted app instance.
- [SecTrustedApplicationSetData](sectrustedapplicationsetdata%28____%29.md): Deprecated. Sets the data of a given trusted app instance.
- [SecTrustedApplicationRef](sectrustedapplication.md): An opaque type that contains information about a trusted app.
- [SecTrustedApplicationGetTypeID](sectrustedapplicationgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a trusted app instance belongs.

### Keychain Item Access

- [SecKeychainItemSetAccess](seckeychainitemsetaccess%28____%29.md): Deprecated. Sets the access of a given keychain item.
- [SecKeychainItemCopyAccess](seckeychainitemcopyaccess%28____%29.md): Deprecated. Retrieves the access of a given keychain item.

### Legacy Access Control Operations

- [SecACLCreateFromSimpleContents](secaclcreatefromsimplecontents.md): Deprecated. Creates a new access control list entry from the application list, description, and prompt selector provided and adds it to an item’s access object.
- [SecACLCopySimpleContents](secaclcopysimplecontents.md): Deprecated. Returns the application list, description, and CSSM prompt selector for a given access control list entry.
- [SecACLSetSimpleContents](secaclsetsimplecontents.md): Deprecated. Sets the application list, description, and prompt selector for a given access control list entry.
- [SecACLGetAuthorizations](secaclgetauthorizations.md): Deprecated. Retrieves the CSSM authorization tags of a given access control list entry.
- [SecACLSetAuthorizations](secaclsetauthorizations.md): Deprecated. Sets the CSSM authorization tags for a given access control list entry.
- [SecAccessCopySelectedACLList](secaccesscopyselectedacllist.md): Deprecated. Retrieves selected access control lists from a given access object.
- [SecAccessCreateFromOwnerAndACL](secaccesscreatefromownerandacl.md): Deprecated. Creates a new access object using the owner and access control list you provide.
- [SecAccessGetOwnerAndACL](secaccessgetownerandacl.md): Deprecated. Retrieves the owner and the access control list of a given access object.
- [OpaqueSecAccessRef](opaquesecaccessref.md)
