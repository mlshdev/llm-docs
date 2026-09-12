> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcferrordescriptionkey](https://developer.apple.com/documentation/corefoundation/kcferrordescriptionkey)

# kCFErrorDescriptionKey (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key to identify the description in the `userInfo` dictionary.

## Declaration

```swift
let kCFErrorDescriptionKey: CFString!
```

<a id="Discussion"></a>

## Discussion

When you create a CFError object, you can provide a value for this key if you do not have localizable error strings. The description should be a complete sentence if possible, and should not contain the domain name or error code.

## See Also

### Constants

- [kCFErrorLocalizedDescriptionKey](kcferrorlocalizeddescriptionkey.md): Key to identify the user-presentable description in the `userInfo` dictionary.
- [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md): Key to identify the user-presentable failure reason in the `userInfo` dictionary.
- [kCFErrorLocalizedRecoverySuggestionKey](kcferrorlocalizedrecoverysuggestionkey.md): Key to identify the user-presentable recovery suggestion in the `userInfo` dictionary.
- [kCFErrorUnderlyingErrorKey](kcferrorunderlyingerrorkey.md): Key to identify the underlying error in the `userInfo` dictionary.
- [kCFErrorURLKey](kcferrorurlkey.md): Key to identify associated URL in the `userInfo` dictionary.
- [kCFErrorFilePathKey](kcferrorfilepathkey.md): Key to identify associated file path in the `userInfo` dictionary.

# kCFErrorDescriptionKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key to identify the description in the `userInfo` dictionary.

## Declaration

```objectivec
extern CFStringRef const kCFErrorDescriptionKey;
```

<a id="Discussion"></a>

## Discussion

When you create a CFError object, you can provide a value for this key if you do not have localizable error strings. The description should be a complete sentence if possible, and should not contain the domain name or error code.

## See Also

### Constants

- [kCFErrorLocalizedDescriptionKey](kcferrorlocalizeddescriptionkey.md): Key to identify the user-presentable description in the `userInfo` dictionary.
- [kCFErrorLocalizedFailureReasonKey](kcferrorlocalizedfailurereasonkey.md): Key to identify the user-presentable failure reason in the `userInfo` dictionary.
- [kCFErrorLocalizedRecoverySuggestionKey](kcferrorlocalizedrecoverysuggestionkey.md): Key to identify the user-presentable recovery suggestion in the `userInfo` dictionary.
- [kCFErrorUnderlyingErrorKey](kcferrorunderlyingerrorkey.md): Key to identify the underlying error in the `userInfo` dictionary.
- [kCFErrorURLKey](kcferrorurlkey.md): Key to identify associated URL in the `userInfo` dictionary.
- [kCFErrorFilePathKey](kcferrorfilepathkey.md): Key to identify associated file path in the `userInfo` dictionary.
