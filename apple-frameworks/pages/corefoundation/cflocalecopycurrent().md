> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecopycurrent()](https://developer.apple.com/documentation/corefoundation/cflocalecopycurrent())

# CFLocaleCopyCurrent() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of the logical locale for the current user.

## Declaration

```swift
func CFLocaleCopyCurrent() -> CFLocale!
```

<a id="return-value"></a>

## Return Value

The logical locale for the current user that is formed from the settings for the current user’s chosen system locale overlaid with any custom settings the user has specified in System Preferences. May return a retained cached object, not a new object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Settings you get from this locale do not change as a user’s preferences are changed so that your operations are consistent. Typically you perform some operations on the returned object and then release it. Since the returned object may be cached, you do not need to hold on to it indefinitely.

Note that locale settings are independent of the user’s language setting. The language of the current locale may not correspond to the language at the first index in the `AppleLanguages` array from user defaults. For more details, see Locale Concepts in Locales Programming Guide; see also [CFLocaleCopyPreferredLanguages()](cflocalecopypreferredlanguages%28%29.md).

## See Also

### Creating a Locale

- [CFLocaleCreate(\_:\_:)](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleCreateCopy(\_:\_:)](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
- [CFLocaleGetSystem()](cflocalegetsystem%28%29.md): Returns the root, canonical locale.

# CFLocaleCopyCurrent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of the logical locale for the current user.

## Declaration

```objectivec
extern CFLocaleRefCFLocaleCopyCurrent();
```

<a id="return-value"></a>

## Return Value

The logical locale for the current user that is formed from the settings for the current user’s chosen system locale overlaid with any custom settings the user has specified in System Preferences. May return a retained cached object, not a new object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Settings you get from this locale do not change as a user’s preferences are changed so that your operations are consistent. Typically you perform some operations on the returned object and then release it. Since the returned object may be cached, you do not need to hold on to it indefinitely.

Note that locale settings are independent of the user’s language setting. The language of the current locale may not correspond to the language at the first index in the `AppleLanguages` array from user defaults. For more details, see Locale Concepts in Locales Programming Guide; see also [CFLocaleCopyPreferredLanguages](cflocalecopypreferredlanguages%28%29.md).

## See Also

### Creating a Locale

- [CFLocaleCreate](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleCreateCopy](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
- [CFLocaleGetSystem](cflocalegetsystem%28%29.md): Returns the root, canonical locale.
