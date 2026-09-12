> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/object(forkey:)](https://developer.apple.com/documentation/foundation/nslocale/object(forkey:))

# object(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of the component corresponding to the specified key.

## Declaration

```swift
func object(forKey key: NSLocale.Key) -> Any?
```

## Parameters

- `key`: The component for which to return the corresponding value. For possible values, see [NSLocale.Key](key.md).

<a id="return-value"></a>

## Return Value

The object corresponding to `key`.

## See Also

### Accessing Locale Information by Key

- [displayName(forKey:value:)](displayname%28forkey_value_%29.md): Returns the display name for the given locale component value.
- [NSLocale.Key](key.md): The keys used to access components of a locale.

# objectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of the component corresponding to the specified key.

## Declaration

```objectivec
- (id) objectForKey:(NSLocaleKey) key;
```

## Parameters

- `key`: The component for which to return the corresponding value. For possible values, see [NSLocaleKey](key.md).

<a id="return-value"></a>

## Return Value

The object corresponding to `key`.

## See Also

### Accessing Locale Information by Key

- [displayNameForKey:value:](displayname%28forkey_value_%29.md): Returns the display name for the given locale component value.
- [NSLocaleKey](key.md): The keys used to access components of a locale.
