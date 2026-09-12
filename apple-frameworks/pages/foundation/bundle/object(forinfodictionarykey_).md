> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/object(forinfodictionarykey:)](https://developer.apple.com/documentation/foundation/bundle/object(forinfodictionarykey:))

# object(forInfoDictionaryKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with the specified key in the receiver’s information property list.

## Declaration

```swift
func object(forInfoDictionaryKey key: String) -> Any?
```

## Parameters

- `key`: A key in the receiver’s property list.

<a id="return-value"></a>

## Return Value

The value associated with `key` in the receiver’s property list (`Info.plist`). The localized value of a key is returned when one is available.

<a id="Discussion"></a>

## Discussion

Use of this method is preferred over other access methods because it returns the localized value of a key when one is available.

## See Also

### Getting bundle information

- [bundleURL](bundleurl.md): The full URL of the receiver’s bundle directory.
- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [bundleIdentifier](bundleidentifier.md): The receiver’s bundle identifier.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.

# objectForInfoDictionaryKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with the specified key in the receiver’s information property list.

## Declaration

```objectivec
- (id) objectForInfoDictionaryKey:(NSString *) key;
```

## Parameters

- `key`: A key in the receiver’s property list.

<a id="return-value"></a>

## Return Value

The value associated with `key` in the receiver’s property list (`Info.plist`). The localized value of a key is returned when one is available.

<a id="Discussion"></a>

## Discussion

Use of this method is preferred over other access methods because it returns the localized value of a key when one is available.

## See Also

### Getting bundle information

- [bundleURL](bundleurl.md): The full URL of the receiver’s bundle directory.
- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [bundleIdentifier](bundleidentifier.md): The receiver’s bundle identifier.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.
