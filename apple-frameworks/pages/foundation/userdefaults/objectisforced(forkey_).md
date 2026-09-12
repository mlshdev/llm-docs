> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/objectisforced(forkey:)](https://developer.apple.com/documentation/foundation/userdefaults/objectisforced(forkey:))

# objectIsForced(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether an administrator provided the value for the specified key.

## Declaration

```swift
func objectIsForced(forKey key: String) -> Bool
```

## Parameters

- `key`: The name of the key to check.

<a id="return-value"></a>

## Return Value

`true` if an administrator provides a value for the key, otherwise `false`.

<a id="discussion"></a>

## Discussion

Apps can’t change the value of managed keys, so use this method to determine if you can make changes to one of your app-specific keys. If a key is managed, disable any app-specific UI you use to change the value of that key.

## See Also

### Checking for managed keys

- [objectIsForced(forKey:inDomain:)](objectisforced%28forkey_indomain_%29.md): Returns a Boolean value that indicates whether an administrator provided the value for the key in the specified domain.

# objectIsForcedForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether an administrator provided the value for the specified key.

## Declaration

```objectivec
- (BOOL) objectIsForcedForKey:(NSString *) key;
```

## Parameters

- `key`: The name of the key to check.

<a id="return-value"></a>

## Return Value

`true` if an administrator provides a value for the key, otherwise `false`.

<a id="discussion"></a>

## Discussion

Apps can’t change the value of managed keys, so use this method to determine if you can make changes to one of your app-specific keys. If a key is managed, disable any app-specific UI you use to change the value of that key.

## See Also

### Checking for managed keys

- [objectIsForcedForKey:inDomain:](objectisforced%28forkey_indomain_%29.md): Returns a Boolean value that indicates whether an administrator provided the value for the key in the specified domain.
