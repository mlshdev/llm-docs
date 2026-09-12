> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/keychain-item-attribute-constants-for-keys](https://developer.apple.com/documentation/security/keychain-item-attribute-constants-for-keys)

# Keychain Item Attribute Constants For Keys

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** API Collection

Specifies the attributes for a key item in a keychain.

<a id="overview"></a>

## Overview

For attributes for items other than keys, see [SecItemAttr](secitemattr.md).

## Topics

### Constants

- [kSecKeyKeyClass](kseckeykeyclass.md): Deprecated. Type uint32 (`CSSM_KEYCLASS`); value is one of `CSSM_KEYCLASS_PUBLIC_KEY`, `CSSM_KEYCLASS_PRIVATE_KEY` or `CSSM_KEYCLASS_SESSION_KEY`.
- [kSecKeyPrintName](kseckeyprintname.md): Deprecated. Type blob; human readable name of the key. Same as `kSecLabelItemAttr` for typical keychain items.
- [kSecKeyAlias](kseckeyalias.md): Deprecated. Type blob; currently unused.
- [kSecKeyPermanent](kseckeypermanent.md): Deprecated. Type uint32; value is nonzero. This key is permanent (stored in some keychain) and is always `1`.
- [kSecKeyPrivate](kseckeyprivate.md): Deprecated. Type uint32; value is nonzero. This key is protected by a user login, a password, or both.
- [kSecKeyModifiable](kseckeymodifiable.md): Deprecated. Type uint32; value is nonzero. Attributes of this key can be modified.
- [kSecKeyLabel](kseckeylabel.md): Deprecated.
- [kSecKeyApplicationTag](kseckeyapplicationtag.md): Deprecated. Type blob; currently unused.
- [kSecKeyKeyCreator](kseckeykeycreator.md): Deprecated. Type data. The data points to a `CSSM_GUID` structure representing the module ID of the CSP owning this key.
- [kSecKeyKeyType](kseckeykeytype.md): Deprecated. Type uint32; value is a CSSM algorithm (`CSSM_ALGORITHMS`) representing the algorithm associated with this key.
- [kSecKeyKeySizeInBits](kseckeykeysizeinbits.md): Deprecated. Type uint32; value is the number of bits in this key.
- [kSecKeyEffectiveKeySize](kseckeyeffectivekeysize.md): Deprecated. Type uint32; value is the effective number of bits in this key. For example, a DES key has a key size in bits (`kSecKeyKeySizeInBits`) of 64 but a value for `kSecKeyEffectiveKeySize` of 56.
- [kSecKeyStartDate](kseckeystartdate.md): Deprecated. Type `CSSM_DATE`. Earliest date at which this key may be used. If the value is all zeros or not present, no restriction applies.
- [kSecKeyEndDate](kseckeyenddate.md): Deprecated. Type `CSSM_DATE`. Latest date at which this key may be used. If the value is all zeros or not present, no restriction applies.
- [kSecKeySensitive](kseckeysensitive.md): Deprecated. Type uint32; value is nonzero. This key cannot be wrapped with `CSSM_ALGID_NONE`.
- [kSecKeyAlwaysSensitive](kseckeyalwayssensitive.md): Deprecated. Type uint32; value is nonzero. This key has always been marked sensitive.
- [kSecKeyExtractable](kseckeyextractable.md): Deprecated. Type uint32; value is nonzero. This key can be wrapped.
- [kSecKeyNeverExtractable](kseckeyneverextractable.md): Deprecated. Type uint32; value is nonzero. This key was never marked extractable.
- [kSecKeyEncrypt](kseckeyencrypt.md): Deprecated. Type uint32; value is nonzero. This key can be used in an encrypt operation.
- [kSecKeyDecrypt](kseckeydecrypt.md): Deprecated. Type uint32; value is nonzero. This key can be used in a decrypt operation.
- [kSecKeyDerive](kseckeyderive.md): Deprecated. Type uint32; value is nonzero. This key can be used in a key derivation operation.
- [kSecKeySign](kseckeysign.md): Deprecated. Type uint32, value is nonzero. This key can be used in a sign operation.
- [kSecKeyVerify](kseckeyverify.md): Deprecated. Type uint32, value is nonzero. This key can be used in a verify operation.
- [kSecKeySignRecover](kseckeysignrecover.md): Deprecated. Type uint32.
- [kSecKeyVerifyRecover](kseckeyverifyrecover.md): Deprecated. Type uint32. This key can unwrap other keys.
- [kSecKeyWrap](kseckeywrap.md): Deprecated. Type uint32; value is nonzero. This key can wrap other keys.
- [kSecKeyUnwrap](kseckeyunwrap.md): Deprecated. Type uint32; value is nonzero. This key can unwrap other keys.
