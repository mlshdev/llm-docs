> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalegetsystem()](https://developer.apple.com/documentation/corefoundation/cflocalegetsystem())

# CFLocaleGetSystem() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the root, canonical locale.

## Declaration

```swift
func CFLocaleGetSystem() -> CFLocale!
```

<a id="return-value"></a>

## Return Value

The root, canonical locale. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

The root locale contains fixed backstop settings for all locale information.

## See Also

### Creating a Locale

- [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreate(\_:\_:)](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleCreateCopy(\_:\_:)](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.

# CFLocaleGetSystem (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the root, canonical locale.

## Declaration

```objectivec
extern CFLocaleRefCFLocaleGetSystem();
```

<a id="return-value"></a>

## Return Value

The root, canonical locale. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

The root locale contains fixed backstop settings for all locale information.

## See Also

### Creating a Locale

- [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreate](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleCreateCopy](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
