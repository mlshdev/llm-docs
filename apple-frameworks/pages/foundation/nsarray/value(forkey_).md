> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/value(forkey:)](https://developer.apple.com/documentation/foundation/nsarray/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the results of invoking [value(forKey:)](value%28forkey_%29.md) using `key` on each of the array’s objects.

## Declaration

```swift
func value(forKey key: String) -> Any
```

## Parameters

- `key`: The key to retrieve.

<a id="return-value"></a>

## Return Value

The value of the retrieved key.

<a id="Discussion"></a>

## Discussion

The returned array contains `NSNull` elements for each object that returns `nil`.

## See Also

### Key-Value Coding

- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Invokes [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) on each of the array’s items using the specified `value` and `key`.

# valueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the results of invoking [valueForKey:](value%28forkey_%29.md) using `key` on each of the array’s objects.

## Declaration

```objectivec
- (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The key to retrieve.

<a id="return-value"></a>

## Return Value

The value of the retrieved key.

<a id="Discussion"></a>

## Discussion

The returned array contains `NSNull` elements for each object that returns `nil`.

## See Also

### Key-Value Coding

- [setValue:forKey:](setvalue%28__forkey_%29.md): Invokes [setValue:forKey:](setvalue%28__forkey_%29.md) on each of the array’s items using the specified `value` and `key`.
