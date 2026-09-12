> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecreatecopy(_:_:))

# CFLocaleCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of a locale.

## Declaration

```swift
func CFLocaleCreateCopy(_ allocator: CFAllocator!, _ locale: CFLocale!) -> CFLocale!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `locale`: The locale object to copy.

<a id="return-value"></a>

## Return Value

A new locale that is a copy of `locale`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Locale

- [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreate(\_:\_:)](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleGetSystem()](cflocalegetsystem%28%29.md): Returns the root, canonical locale.

# CFLocaleCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of a locale.

## Declaration

```objectivec
extern CFLocaleRefCFLocaleCreateCopy(CFAllocatorRef allocator, CFLocaleRef locale);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `locale`: The locale object to copy.

<a id="return-value"></a>

## Return Value

A new locale that is a copy of `locale`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Locale

- [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreate](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleGetSystem](cflocalegetsystem%28%29.md): Returns the root, canonical locale.
