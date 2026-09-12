> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/keychain-items](https://developer.apple.com/documentation/security/keychain-items)

# Keychain items (Swift)

**Framework:** Security  
**Kind:** API Collection

Embed confidential information in items that you store in a keychain.

<a id="overview"></a>

## Overview

When you want to store a secret such as a password or cryptographic key, you package it as a keychain item. Along with the data itself, you provide a set of publicly visible attributes both to control the item’s accessibility and to make it searchable. As shown in Figure 1, keychain services handles data encryption and storage (including data attributes) in a keychain, which is an encrypted database stored on disk. Later, authorized processes use keychain services to find the item and decrypt its data.

![Diagram showing data being encrypted and then combined with attributes into a keychain item before being stored in a keychain.](https://developer.apple.com/images/com.apple.security/media-2891903@2x.png)

## Topics

### Essentials

- [Using the keychain to manage user secrets](using-the-keychain-to-manage-user-secrets.md): Relieve the user of remembering small secrets by storing them in the keychain.
- [TN3137: On Mac keychain APIs and implementations](https://developer.apple.com/documentation/technotes/tn3137-on-mac-keychains): Learn how the keychain on macOS differs from other Apple platforms.
- [SecKeychainItem](seckeychainitem.md): An opaque type that represents a keychain item.
- [SecKeychainItemGetTypeID()](seckeychainitemgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a keychain item object belongs.

### Adding keychain items

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md): Add network credentials to the keychain on behalf of the user.
- [SecItemAdd(\_:\_:)](secitemadd%28____%29.md): Adds one or more items to a keychain.
- [Item class keys and values](item-class-keys-and-values.md): Specify the class of a keychain item.
- [Item attribute keys and values](item-attribute-keys-and-values.md): Specify the attributes of keychain items.

### Keychain item search

- [Searching for keychain items](searching-for-keychain-items.md): Find keychain items based on search criteria that you specify.
- [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md): Returns one or more keychain items that match a search query, or copies attributes of specific keychain items.
- [Search attribute keys and values](search-attribute-keys-and-values.md): Filter a keychain item search.
- [Item return result keys](item-return-result-keys.md): Specify how you want returned keychain item data formatted.

### Keychain item modification

- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md): Modify items in the keychain when the user’s data changes.
- [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md): Modifies items that match a search query.
- [SecItemDelete(\_:)](secitemdelete%28__%29.md): Deletes items that match a search query.

### Keychain item access

- [Sharing access to keychain items among a collection of apps](sharing-access-to-keychain-items-among-a-collection-of-apps.md): Enable apps to share keychain items with each other by adding the apps to an access group.
- [Keychain Access Groups Entitlement](../bundleresources/entitlements/keychain-access-groups.md): The identifiers for the keychain groups that the app may share items with.
- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md): Set the conditions under which an app can access a keychain item such as a password.
- [SecAccessControlCreateWithFlags(\_:\_:\_:\_:)](secaccesscontrolcreatewithflags%28________%29.md): Creates a new access control object with the specified protection type and flags.
- [SecAccessControlCreateFlags](secaccesscontrolcreateflags.md): Access control constants that dictate how a keychain item may be used.
- [SecAccessControl](secaccesscontrol.md): An opaque type that contains information about how a keychain item may be used.
- [SecAccessControlGetTypeID()](secaccesscontrolgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a keychain item access control object belongs.

### Import and export

- [SecItemImport(\_:\_:\_:\_:\_:\_:\_:\_:)](secitemimport%28________________%29.md): Imports one or more certificates, keys, or identities and optionally adds them to a keychain.
- [SecItemExport(\_:\_:\_:\_:\_:)](secitemexport%28__________%29.md): Exports one or more certificates, keys, or identities.
- [SecExternalFormat](secexternalformat.md): The external format of a keychain item.
- [SecExternalItemType](secexternalitemtype.md): The import item type.
- [SecItemImportExportFlags](secitemimportexportflags.md): The import and export function flags.
- [SecItemImportExportKeyParameters](secitemimportexportkeyparameters.md): The import/export parameter structure.
- [SecKeyImportExportFlags](seckeyimportexportflags.md): The import/export parameter structure flags.
- [SEC_KEY_IMPORT_EXPORT_PARAMS_VERSION](sec_key_import_export_params_version.md): The import/export parameter structure version.
- [SecKeyImportExportParameters](seckeyimportexportparameters.md): Deprecated. The legacy import/export parameter structure.

### Legacy keychain item creation

Use the functions in [Adding keychain items](keychain-items.md#Adding-keychain-items) instead.

- [SecKeychainItemCreateFromContent(\_:\_:\_:\_:\_:\_:\_:)](seckeychainitemcreatefromcontent%28______________%29.md): Deprecated. Creates a new keychain item from the supplied parameters.
- [SecKeychainItemCreateCopy(\_:\_:\_:\_:)](seckeychainitemcreatecopy%28________%29.md): Deprecated. Copies a keychain item from one keychain to another.
- [SecKeychainItemCreatePersistentReference(\_:\_:)](seckeychainitemcreatepersistentreference%28____%29.md): Deprecated. Creates a persistent reference for a keychain item.
- [SecKeychainItemCopyFromPersistentReference(\_:\_:)](seckeychainitemcopyfrompersistentreference%28____%29.md): Deprecated. Provides a keychain item reference, given a persistent reference.
- [SecItemClass](secitemclass.md): Specifies a keychain item’s class code.

### Legacy keychain item management

Use the functions in [Keychain item search](keychain-items.md#Keychain-item-search) instead.

- [SecKeychainItemCopyAttributesAndData(\_:\_:\_:\_:\_:\_:)](seckeychainitemcopyattributesanddata%28____________%29.md): Deprecated. Retrieves the data and/or attributes stored in the given keychain item.
- [SecKeychainItemModifyAttributesAndData(\_:\_:\_:\_:)](seckeychainitemmodifyattributesanddata%28________%29.md): Deprecated. Updates an existing keychain item after changing its attributes or data.
- [SecKeychainItemFreeAttributesAndData(\_:\_:)](seckeychainitemfreeattributesanddata%28____%29.md): Deprecated. Releases the memory used by the keychain attribute list and/or the keychain data retrieved in a call to `SecKeychainItemCopyAttributesAndData`.
- [SecKeychainItemCopyContent(\_:\_:\_:\_:\_:)](seckeychainitemcopycontent%28__________%29.md): Deprecated. Copies the data and attributes stored in the given keychain item.
- [SecKeychainItemModifyContent(\_:\_:\_:\_:)](seckeychainitemmodifycontent%28________%29.md): Deprecated. Updates an existing keychain item after changing its attributes and/or data.
- [SecKeychainItemFreeContent(\_:\_:)](seckeychainitemfreecontent%28____%29.md): Deprecated. Releases the memory used by the keychain attribute list and the keychain data retrieved in a call to the [SecKeychainItemCopyContent(\_:\_:\_:\_:\_:)](seckeychainitemcopycontent%28__________%29.md) function.
- [SecKeychainItemCopyKeychain(\_:\_:)](seckeychainitemcopykeychain%28____%29.md): Deprecated. Returns the keychain object of a given keychain item.
- [SecKeychainItemDelete(\_:)](seckeychainitemdelete%28__%29.md): Deprecated. Deletes a keychain item from the default keychain’s permanent data store.
- [SecKeychainAttrType](seckeychainattrtype.md): The keychain attribute type.
- [SecKeychainAttribute](seckeychainattribute.md): A structure that holds a single keychain attribute.
- [SecKeychainAttributePtr](seckeychainattributeptr.md): A pointer to a keychain attribute structure.
- [SecKeychainAttributeList](seckeychainattributelist.md): A list of keychain attributes.

### Legacy attribute info

Use the functions in [Adding keychain items](keychain-items.md#Adding-keychain-items) and [Keychain item search](keychain-items.md#Keychain-item-search) instead.

- [SecKeychainAttributeInfoForItemID(\_:\_:\_:)](seckeychainattributeinfoforitemid%28______%29.md): Deprecated. Obtains tags for all possible attributes of a given item class.
- [SecKeychainFreeAttributeInfo(\_:)](seckeychainfreeattributeinfo%28__%29.md): Deprecated. Releases the memory acquired by calling the `SecKeychainAttributeInfoForItemID` function.
- [SecKeychainAttributeInfo](seckeychainattributeinfo.md): A structure that represents an attribute.
- [SecItemAttr](secitemattr.md): Specifies a keychain item’s attributes.
- [Keychain Item Attribute Constants For Keys](keychain-item-attribute-constants-for-keys.md): Specifies the attributes for a key item in a keychain.
- [SecAFPServerSignature](secafpserversignature.md): Deprecated. Represents a 16-byte Apple File Protocol server signature block.

### Legacy password storage

Use the functions in [Adding keychain items](keychain-items.md#Adding-keychain-items) and [Keychain item search](keychain-items.md#Keychain-item-search) instead.

- [SecKeychainAddInternetPassword(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainaddinternetpassword%28______________________________%29.md): Deprecated. Adds a new Internet password to a keychain.
- [SecKeychainFindInternetPassword(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindinternetpassword%28______________________________%29.md): Deprecated. Finds the first Internet password based on the attributes passed.
- [SecKeychainAddGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainaddgenericpassword%28________________%29.md): Deprecated. Adds a new generic password to a keychain.
- [SecKeychainFindGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindgenericpassword%28________________%29.md): Deprecated. Finds the first generic password based on the attributes passed.
- [SecProtocolType](secprotocoltype.md): The protocol type associated with an Internet password.
- [SecAuthenticationType](secauthenticationtype.md): The authentication type to use for an Internet password.
- [SecPassword](secpassword.md): Contains information about a password.

# Keychain items (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Embed confidential information in items that you store in a keychain.

<a id="overview"></a>

## Overview

When you want to store a secret such as a password or cryptographic key, you package it as a keychain item. Along with the data itself, you provide a set of publicly visible attributes both to control the item’s accessibility and to make it searchable. As shown in Figure 1, keychain services handles data encryption and storage (including data attributes) in a keychain, which is an encrypted database stored on disk. Later, authorized processes use keychain services to find the item and decrypt its data.

![Diagram showing data being encrypted and then combined with attributes into a keychain item before being stored in a keychain.](https://developer.apple.com/images/com.apple.security/media-2891903@2x.png)

## Topics

### Essentials

- [Using the keychain to manage user secrets](using-the-keychain-to-manage-user-secrets.md): Relieve the user of remembering small secrets by storing them in the keychain.
- [TN3137: On Mac keychain APIs and implementations](https://developer.apple.com/documentation/technotes/tn3137-on-mac-keychains): Learn how the keychain on macOS differs from other Apple platforms.
- [SecKeychainItemRef](seckeychainitem.md): An opaque type that represents a keychain item.
- [SecKeychainItemGetTypeID](seckeychainitemgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a keychain item object belongs.

### Adding keychain items

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md): Add network credentials to the keychain on behalf of the user.
- [SecItemAdd](secitemadd%28____%29.md): Adds one or more items to a keychain.
- [Item class keys and values](item-class-keys-and-values.md): Specify the class of a keychain item.
- [Item attribute keys and values](item-attribute-keys-and-values.md): Specify the attributes of keychain items.

### Keychain item search

- [Searching for keychain items](searching-for-keychain-items.md): Find keychain items based on search criteria that you specify.
- [SecItemCopyMatching](secitemcopymatching%28____%29.md): Returns one or more keychain items that match a search query, or copies attributes of specific keychain items.
- [Search attribute keys and values](search-attribute-keys-and-values.md): Filter a keychain item search.
- [Item return result keys](item-return-result-keys.md): Specify how you want returned keychain item data formatted.

### Keychain item modification

- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md): Modify items in the keychain when the user’s data changes.
- [SecItemUpdate](secitemupdate%28____%29.md): Modifies items that match a search query.
- [SecItemDelete](secitemdelete%28__%29.md): Deletes items that match a search query.

### Keychain item access

- [Sharing access to keychain items among a collection of apps](sharing-access-to-keychain-items-among-a-collection-of-apps.md): Enable apps to share keychain items with each other by adding the apps to an access group.
- [Keychain Access Groups Entitlement](../bundleresources/entitlements/keychain-access-groups.md): The identifiers for the keychain groups that the app may share items with.
- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md): Set the conditions under which an app can access a keychain item such as a password.
- [SecAccessControlCreateWithFlags](secaccesscontrolcreatewithflags%28________%29.md): Creates a new access control object with the specified protection type and flags.
- [SecAccessControlCreateFlags](secaccesscontrolcreateflags.md): Access control constants that dictate how a keychain item may be used.
- [SecAccessControlRef](secaccesscontrol.md): An opaque type that contains information about how a keychain item may be used.
- [SecAccessControlGetTypeID](secaccesscontrolgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a keychain item access control object belongs.

### Import and export

- [SecItemImport](secitemimport%28________________%29.md): Imports one or more certificates, keys, or identities and optionally adds them to a keychain.
- [SecItemExport](secitemexport%28__________%29.md): Exports one or more certificates, keys, or identities.
- [SecExternalFormat](secexternalformat.md): The external format of a keychain item.
- [SecExternalItemType](secexternalitemtype.md): The import item type.
- [SecItemImportExportFlags](secitemimportexportflags.md): The import and export function flags.
- [SecItemImportExportKeyParameters](secitemimportexportkeyparameters.md): The import/export parameter structure.
- [SecKeyImportExportFlags](seckeyimportexportflags.md): The import/export parameter structure flags.
- [SEC_KEY_IMPORT_EXPORT_PARAMS_VERSION](sec_key_import_export_params_version.md): The import/export parameter structure version.
- [SecKeychainItemImport](seckeychainitemimport.md): Deprecated. Imports one or more certificates, keys, or identities and adds them to a keychain.
- [SecKeychainItemExport](seckeychainitemexport.md): Deprecated. Exports one or more certificates, keys, or identities.
- [SecKeyImportExportParameters](seckeyimportexportparameters.md): Deprecated. The legacy import/export parameter structure.

### Legacy keychain item creation

Use the functions in [Adding keychain items](keychain-items.md#Adding-keychain-items) instead.

- [SecKeychainItemCreateFromContent](seckeychainitemcreatefromcontent%28______________%29.md): Deprecated. Creates a new keychain item from the supplied parameters.
- [SecKeychainItemCreateCopy](seckeychainitemcreatecopy%28________%29.md): Deprecated. Copies a keychain item from one keychain to another.
- [SecKeychainItemCreatePersistentReference](seckeychainitemcreatepersistentreference%28____%29.md): Deprecated. Creates a persistent reference for a keychain item.
- [SecKeychainItemCopyFromPersistentReference](seckeychainitemcopyfrompersistentreference%28____%29.md): Deprecated. Provides a keychain item reference, given a persistent reference.
- [SecItemClass](secitemclass.md): Specifies a keychain item’s class code.

### Legacy keychain item management

Use the functions in [Keychain item search](keychain-items.md#Keychain-item-search) instead.

- [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md): Deprecated. Retrieves the data and/or attributes stored in the given keychain item.
- [SecKeychainItemModifyAttributesAndData](seckeychainitemmodifyattributesanddata%28________%29.md): Deprecated. Updates an existing keychain item after changing its attributes or data.
- [SecKeychainItemFreeAttributesAndData](seckeychainitemfreeattributesanddata%28____%29.md): Deprecated. Releases the memory used by the keychain attribute list and/or the keychain data retrieved in a call to `SecKeychainItemCopyAttributesAndData`.
- [SecKeychainItemCopyContent](seckeychainitemcopycontent%28__________%29.md): Deprecated. Copies the data and attributes stored in the given keychain item.
- [SecKeychainItemModifyContent](seckeychainitemmodifycontent%28________%29.md): Deprecated. Updates an existing keychain item after changing its attributes and/or data.
- [SecKeychainItemFreeContent](seckeychainitemfreecontent%28____%29.md): Deprecated. Releases the memory used by the keychain attribute list and the keychain data retrieved in a call to the [SecKeychainItemCopyContent](seckeychainitemcopycontent%28__________%29.md) function.
- [SecKeychainItemCopyKeychain](seckeychainitemcopykeychain%28____%29.md): Deprecated. Returns the keychain object of a given keychain item.
- [SecKeychainItemDelete](seckeychainitemdelete%28__%29.md): Deprecated. Deletes a keychain item from the default keychain’s permanent data store.
- [SecKeychainAttrType](seckeychainattrtype.md): The keychain attribute type.
- [SecKeychainAttribute](seckeychainattribute.md): A structure that holds a single keychain attribute.
- [SecKeychainAttributePtr](seckeychainattributeptr.md): A pointer to a keychain attribute structure.
- [SecKeychainAttributeList](seckeychainattributelist.md): A list of keychain attributes.

### Legacy attribute info

Use the functions in [Adding keychain items](keychain-items.md#Adding-keychain-items) and [Keychain item search](keychain-items.md#Keychain-item-search) instead.

- [SecKeychainAttributeInfoForItemID](seckeychainattributeinfoforitemid%28______%29.md): Deprecated. Obtains tags for all possible attributes of a given item class.
- [SecKeychainFreeAttributeInfo](seckeychainfreeattributeinfo%28__%29.md): Deprecated. Releases the memory acquired by calling the `SecKeychainAttributeInfoForItemID` function.
- [SecKeychainAttributeInfo](seckeychainattributeinfo.md): A structure that represents an attribute.
- [SecItemAttr](secitemattr.md): Specifies a keychain item’s attributes.
- [Keychain Item Attribute Constants For Keys](keychain-item-attribute-constants-for-keys.md): Specifies the attributes for a key item in a keychain.
- [SecAFPServerSignature](secafpserversignature.md): Deprecated. Represents a 16-byte Apple File Protocol server signature block.

### Legacy password storage

Use the functions in [Adding keychain items](keychain-items.md#Adding-keychain-items) and [Keychain item search](keychain-items.md#Keychain-item-search) instead.

- [SecKeychainAddInternetPassword](seckeychainaddinternetpassword%28______________________________%29.md): Deprecated. Adds a new Internet password to a keychain.
- [SecKeychainFindInternetPassword](seckeychainfindinternetpassword%28______________________________%29.md): Deprecated. Finds the first Internet password based on the attributes passed.
- [SecKeychainAddGenericPassword](seckeychainaddgenericpassword%28________________%29.md): Deprecated. Adds a new generic password to a keychain.
- [SecKeychainFindGenericPassword](seckeychainfindgenericpassword%28________________%29.md): Deprecated. Finds the first generic password based on the attributes passed.
- [SecProtocolType](secprotocoltype.md): The protocol type associated with an Internet password.
- [SecAuthenticationType](secauthenticationtype.md): The authentication type to use for an Internet password.
- [SecPasswordRef](secpassword.md): Contains information about a password.
