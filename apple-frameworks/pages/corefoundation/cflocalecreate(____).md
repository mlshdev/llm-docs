> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecreate(_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecreate(_:_:))

# CFLocaleCreate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a locale for the given arbitrary locale identifier.

## Declaration

```swift
func CFLocaleCreate(_ allocator: CFAllocator!, _ localeIdentifier: CFLocaleIdentifier!) -> CFLocale!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `localeIdentifier`: A string representation of an arbitrary locale identifier.

<a id="return-value"></a>

## Return Value

A new locale that corresponds to the arbitrary locale identifier `localeIdentifier`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Locale

- [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreateCopy(\_:\_:)](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
- [CFLocaleGetSystem()](cflocalegetsystem%28%29.md): Returns the root, canonical locale.

# CFLocaleCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a locale for the given arbitrary locale identifier.

## Declaration

```objectivec
extern CFLocaleRefCFLocaleCreate(CFAllocatorRef allocator, CFLocaleIdentifier localeIdentifier);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `localeIdentifier`: A string representation of an arbitrary locale identifier.

<a id="return-value"></a>

## Return Value

A new locale that corresponds to the arbitrary locale identifier `localeIdentifier`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Locale

- [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreateCopy](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
- [CFLocaleGetSystem](cflocalegetsystem%28%29.md): Returns the root, canonical locale.
