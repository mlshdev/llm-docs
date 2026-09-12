> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/setvalue(_:forkey:)](https://developer.apple.com/documentation/foundation/nsarray/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) on each of the array’s items using the specified `value` and `key`.

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The object value.
- `key`: The key to store the value.

## See Also

### Key-Value Coding

- [value(forKey:)](value%28forkey_%29.md): Returns an array containing the results of invoking [value(forKey:)](value%28forkey_%29.md) using `key` on each of the array’s objects.

# setValue:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes [setValue:forKey:](setvalue%28__forkey_%29.md) on each of the array’s items using the specified `value` and `key`.

## Declaration

```objectivec
- (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The object value.
- `key`: The key to store the value.

## See Also

### Key-Value Coding

- [valueForKey:](value%28forkey_%29.md): Returns an array containing the results of invoking [valueForKey:](value%28forkey_%29.md) using `key` on each of the array’s objects.
