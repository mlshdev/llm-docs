> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/search-attribute-keys-and-values](https://developer.apple.com/documentation/security/search-attribute-keys-and-values)

# Search attribute keys and values (Swift)

**Framework:** Security  
**Kind:** API Collection

Filter a keychain item search.

<a id="overview"></a>

## Overview

When looking for items using any of the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md), [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md), or [SecItemDelete(\_:)](secitemdelete%28__%29.md) functions, you specify a `query` dictionary containing both the item attributes to look for (see [Item attribute keys and values](item-attribute-keys-and-values.md)) and additional search attributes that condition the search. For example, you can use the matching key [kSecMatchLimit](ksecmatchlimit.md) with value [kSecMatchLimitOne](ksecmatchlimitone.md) to restrict the output to include only the first result even when more than one item matches.

## Topics

### Item search matching keys

Keys used to condition a keychain item search.

- [kSecMatchPolicy](ksecmatchpolicy.md): A key whose value indicates a policy with which a matching certificate or identity must verify.
- [kSecMatchItemList](ksecmatchitemlist.md): A key whose value indicates a list of items to search.
- [kSecMatchSearchList](ksecmatchsearchlist.md): A key whose value indicates a list of items to search.
- [kSecMatchIssuers](ksecmatchissuers.md): A key whose value is a string to match against a certificate or identity’s issuers.
- [kSecMatchEmailAddressIfPresent](ksecmatchemailaddressifpresent.md): A key whose value is a string to match against a certificate or identity’s email address.
- [kSecMatchSubjectContains](ksecmatchsubjectcontains.md): A key whose value is a string to look for in a certificate or identity’s subject.
- [kSecMatchSubjectStartsWith](ksecmatchsubjectstartswith.md): A key whose value is a string to match against the beginning of a certificate or identity’s subject.
- [kSecMatchSubjectEndsWith](ksecmatchsubjectendswith.md): A key whose value is a string to match against the end of a certificate or identity’s subject.
- [kSecMatchSubjectWholeString](ksecmatchsubjectwholestring.md): A key whose value is a string to exactly match a certificate or identity’s subject.
- [kSecMatchCaseInsensitive](ksecmatchcaseinsensitive.md): A key whose value is a Boolean indicating whether case-insensitive matching is performed.
- [kSecMatchDiacriticInsensitive](ksecmatchdiacriticinsensitive.md): A key whose value is a Boolean indicating whether diacritic-insensitive matching is performed.
- [kSecMatchWidthInsensitive](ksecmatchwidthinsensitive.md): A key whose value is a Boolean indicating whether width-insensitive matching is performed.
- [kSecMatchTrustedOnly](ksecmatchtrustedonly.md): A key whose value is a Boolean indicating whether untrusted certificates should be returned.
- [kSecMatchValidOnDate](ksecmatchvalidondate.md): A key whose value indicates the validity date.
- [kSecMatchLimit](ksecmatchlimit.md): A key whose value indicates the match limit.

### Match limit values

Keys used to limit the number of results returned.

- [kSecMatchLimitOne](ksecmatchlimitone.md): A value that corresponds to matching exactly one item.
- [kSecMatchLimitAll](ksecmatchlimitall.md): A value that corresponds to matching an unlimited number of items.

### Additional item search keys

Keys used to specify additional keychain item search options.

- [kSecUseItemList](ksecuseitemlist.md): Deprecated. A key whose value is an array of items to search.
- [kSecUseKeychain](ksecusekeychain.md): A key whose value is a keychain to operate on.
- [kSecUseOperationPrompt](ksecuseoperationprompt.md): Deprecated. A key whose value is an operation prompt.
- [kSecUseNoAuthenticationUI](ksecusenoauthenticationui.md): Deprecated. A key whose value is a Boolean indicating whether to disallow UI authentication.
- [kSecUseAuthenticationUI](ksecuseauthenticationui.md): A key whose value indicates whether the user is prompted for authentication.
- [kSecUseAuthenticationContext](ksecuseauthenticationcontext.md): A key whose value indicates a local authentication context to use.
- [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md): A key whose value indicates whether to treat macOS keychain items like iOS keychain items.

### UI authentication values

Values you use to indicate whether to allow UI authentication.

- [kSecUseAuthenticationUIAllow](ksecuseauthenticationuiallow.md): Deprecated. A value that indicates user authentication is allowed.
- [kSecUseAuthenticationUIFail](ksecuseauthenticationuifail.md): Deprecated. A value that indicates user authentication is disallowed.
- [kSecUseAuthenticationUISkip](ksecuseauthenticationuiskip.md): A value that indicates items requiring user authentication should be skipped.

# Search attribute keys and values (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Filter a keychain item search.

<a id="overview"></a>

## Overview

When looking for items using any of the [SecItemCopyMatching](secitemcopymatching%28____%29.md), [SecItemUpdate](secitemupdate%28____%29.md), or [SecItemDelete](secitemdelete%28__%29.md) functions, you specify a `query` dictionary containing both the item attributes to look for (see [Item attribute keys and values](item-attribute-keys-and-values.md)) and additional search attributes that condition the search. For example, you can use the matching key [kSecMatchLimit](ksecmatchlimit.md) with value [kSecMatchLimitOne](ksecmatchlimitone.md) to restrict the output to include only the first result even when more than one item matches.

## Topics

### Item search matching keys

Keys used to condition a keychain item search.

- [kSecMatchPolicy](ksecmatchpolicy.md): A key whose value indicates a policy with which a matching certificate or identity must verify.
- [kSecMatchItemList](ksecmatchitemlist.md): A key whose value indicates a list of items to search.
- [kSecMatchSearchList](ksecmatchsearchlist.md): A key whose value indicates a list of items to search.
- [kSecMatchIssuers](ksecmatchissuers.md): A key whose value is a string to match against a certificate or identity’s issuers.
- [kSecMatchEmailAddressIfPresent](ksecmatchemailaddressifpresent.md): A key whose value is a string to match against a certificate or identity’s email address.
- [kSecMatchSubjectContains](ksecmatchsubjectcontains.md): A key whose value is a string to look for in a certificate or identity’s subject.
- [kSecMatchSubjectStartsWith](ksecmatchsubjectstartswith.md): A key whose value is a string to match against the beginning of a certificate or identity’s subject.
- [kSecMatchSubjectEndsWith](ksecmatchsubjectendswith.md): A key whose value is a string to match against the end of a certificate or identity’s subject.
- [kSecMatchSubjectWholeString](ksecmatchsubjectwholestring.md): A key whose value is a string to exactly match a certificate or identity’s subject.
- [kSecMatchCaseInsensitive](ksecmatchcaseinsensitive.md): A key whose value is a Boolean indicating whether case-insensitive matching is performed.
- [kSecMatchDiacriticInsensitive](ksecmatchdiacriticinsensitive.md): A key whose value is a Boolean indicating whether diacritic-insensitive matching is performed.
- [kSecMatchWidthInsensitive](ksecmatchwidthinsensitive.md): A key whose value is a Boolean indicating whether width-insensitive matching is performed.
- [kSecMatchTrustedOnly](ksecmatchtrustedonly.md): A key whose value is a Boolean indicating whether untrusted certificates should be returned.
- [kSecMatchValidOnDate](ksecmatchvalidondate.md): A key whose value indicates the validity date.
- [kSecMatchLimit](ksecmatchlimit.md): A key whose value indicates the match limit.

### Match limit values

Keys used to limit the number of results returned.

- [kSecMatchLimitOne](ksecmatchlimitone.md): A value that corresponds to matching exactly one item.
- [kSecMatchLimitAll](ksecmatchlimitall.md): A value that corresponds to matching an unlimited number of items.

### Additional item search keys

Keys used to specify additional keychain item search options.

- [kSecUseItemList](ksecuseitemlist.md): Deprecated. A key whose value is an array of items to search.
- [kSecUseKeychain](ksecusekeychain.md): A key whose value is a keychain to operate on.
- [kSecUseOperationPrompt](ksecuseoperationprompt.md): Deprecated. A key whose value is an operation prompt.
- [kSecUseNoAuthenticationUI](ksecusenoauthenticationui.md): Deprecated. A key whose value is a Boolean indicating whether to disallow UI authentication.
- [kSecUseAuthenticationUI](ksecuseauthenticationui.md): A key whose value indicates whether the user is prompted for authentication.
- [kSecUseAuthenticationContext](ksecuseauthenticationcontext.md): A key whose value indicates a local authentication context to use.
- [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md): A key whose value indicates whether to treat macOS keychain items like iOS keychain items.

### UI authentication values

Values you use to indicate whether to allow UI authentication.

- [kSecUseAuthenticationUIAllow](ksecuseauthenticationuiallow.md): Deprecated. A value that indicates user authentication is allowed.
- [kSecUseAuthenticationUIFail](ksecuseauthenticationuifail.md): Deprecated. A value that indicates user authentication is disallowed.
- [kSecUseAuthenticationUISkip](ksecuseauthenticationuiskip.md): A value that indicates items requiring user authentication should be skipped.
