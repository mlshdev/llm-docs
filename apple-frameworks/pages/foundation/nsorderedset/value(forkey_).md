> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/value(forkey:)](https://developer.apple.com/documentation/foundation/nsorderedset/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an ordered set containing the results of invoking `valueForKey:` using key on each of the ordered set’s objects.

## Declaration

```swift
func value(forKey key: String) -> Any
```

## Parameters

- `key`: The key to retrieve.

<a id="return-value"></a>

## Return Value

The ordered set of the values for the retrieved key. The returned ordered set might not have the same number of members as the receiver.

<a id="Discussion"></a>

## Discussion

The returned ordered set will not contain any elements corresponding to instances of `valueForKey:` returning `nil`, nor will it contain duplicates.

## See Also

### Key-Value Coding Support

- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the receiver’s members using the specified value and key

# valueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an ordered set containing the results of invoking `valueForKey:` using key on each of the ordered set’s objects.

## Declaration

```objectivec
- (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The key to retrieve.

<a id="return-value"></a>

## Return Value

The ordered set of the values for the retrieved key. The returned ordered set might not have the same number of members as the receiver.

<a id="Discussion"></a>

## Discussion

The returned ordered set will not contain any elements corresponding to instances of `valueForKey:` returning `nil`, nor will it contain duplicates.

## See Also

### Key-Value Coding Support

- [setValue:forKey:](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the receiver’s members using the specified value and key
