> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/setvalue(_:forkey:)](https://developer.apple.com/documentation/foundation/nsorderedset/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes `setValue:forKey:` on each of the receiver’s members using the specified value and key

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The object value.
- `key`: The key to store the value.

## See Also

### Key-Value Coding Support

- [value(forKey:)](value%28forkey_%29.md): Returns an ordered set containing the results of invoking `valueForKey:` using key on each of the ordered set’s objects.

# setValue:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes `setValue:forKey:` on each of the receiver’s members using the specified value and key

## Declaration

```objectivec
- (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The object value.
- `key`: The key to store the value.

## See Also

### Key-Value Coding Support

- [valueForKey:](value%28forkey_%29.md): Returns an ordered set containing the results of invoking `valueForKey:` using key on each of the ordered set’s objects.
