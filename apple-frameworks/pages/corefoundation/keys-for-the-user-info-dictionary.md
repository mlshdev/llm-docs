> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/keys-for-the-user-info-dictionary](https://developer.apple.com/documentation/corefoundation/keys-for-the-user-info-dictionary)

# Keys for the user info dictionary

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

Keys in the `userInfo` dictionary.

<a id="overview"></a>

## Overview

When you create a user info dictionary, at a minimum you should provide values for one of `kCFErrorLocalizedDescriptionKey` and `kCFErrorLocalizedFailureReasonKey`; ideally you should provide values for `kCFErrorLocalizedDescriptionKey`, `kCFErrorLocalizedFailureReasonKey`, and  `kCFErrorLocalizedRecoverySuggestionKey`. Typically, you should provide a value for one of either `kCFErrorURLKey` or `kCFErrorFilePathKey`.

## Topics

### Constants

- [kCFErrorLocalizedDescriptionKey](kcferrorlocalizeddescriptionkey.md): Key to identify the user-presentable description in the `userInfo` dictionary.
- [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md): Key to identify the user-presentable failure reason in the `userInfo` dictionary.
- [kCFErrorLocalizedRecoverySuggestionKey](kcferrorlocalizedrecoverysuggestionkey.md): Key to identify the user-presentable recovery suggestion in the `userInfo` dictionary.
- [kCFErrorDescriptionKey](kcferrordescriptionkey.md): Key to identify the description in the `userInfo` dictionary.
- [kCFErrorUnderlyingErrorKey](kcferrorunderlyingerrorkey.md): Key to identify the underlying error in the `userInfo` dictionary.
- [kCFErrorURLKey](kcferrorurlkey.md): Key to identify associated URL in the `userInfo` dictionary.
- [kCFErrorFilePathKey](kcferrorfilepathkey.md): Key to identify associated file path in the `userInfo` dictionary.

## See Also

### Constants

- [Error domains](error-domains.md): These constants define domains for CFError objects.
