> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/objectisforced(forkey:indomain:)](https://developer.apple.com/documentation/foundation/userdefaults/objectisforced(forkey:indomain:))

# objectIsForced(forKey:inDomain:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether an administrator provided the value for the key in the specified domain.

## Declaration

```swift
func objectIsForced(forKey key: String, inDomain domain: String) -> Bool
```

## Parameters

- `key`: The name of the key to check.
- `domain`: The domain that contains the key.

<a id="return-value"></a>

## Return Value

`true` if an administrator provides a value for the key, otherwise `false`.

<a id="discussion"></a>

## Discussion

Apps can’t change the value of managed keys, so use this method to determine if you can make changes to a key in a specific domain. For example, you might use this method to check for overrides of settings belonging to a shared app group. If a key is managed, disable any app-specific UI you use to change the value of that key.

## See Also

### Checking for managed keys

- [objectIsForced(forKey:)](objectisforced%28forkey_%29.md): Returns a Boolean value that indicates whether an administrator provided the value for the specified key.

# objectIsForcedForKey:inDomain: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether an administrator provided the value for the key in the specified domain.

## Declaration

```objectivec
- (BOOL) objectIsForcedForKey:(NSString *) key inDomain:(NSString *) domain;
```

## Parameters

- `key`: The name of the key to check.
- `domain`: The domain that contains the key.

<a id="return-value"></a>

## Return Value

`true` if an administrator provides a value for the key, otherwise `false`.

<a id="discussion"></a>

## Discussion

Apps can’t change the value of managed keys, so use this method to determine if you can make changes to a key in a specific domain. For example, you might use this method to check for overrides of settings belonging to a shared app group. If a key is managed, disable any app-specific UI you use to change the value of that key.

## See Also

### Checking for managed keys

- [objectIsForcedForKey:](objectisforced%28forkey_%29.md): Returns a Boolean value that indicates whether an administrator provided the value for the specified key.
