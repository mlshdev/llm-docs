> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/infodictionary](https://developer.apple.com/documentation/foundation/bundle/infodictionary)

# infoDictionary (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.

## Declaration

```swift
var infoDictionary: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

If the bundle does not contain an `Info.plist` file, this dictionary contains only private keys that are used internally by the [Bundle](../bundle.md) class. The [Bundle](../bundle.md) class may add extra keys to this dictionary for its own use. Common keys for accessing the values of the dictionary are `CFBundleIdentifier`, `NSMainNibFile`, and `NSPrincipalClass`.

## See Also

### Related Documentation

- [principalClass](principalclass.md): The bundle’s principal class.

### Getting bundle information

- [bundleURL](bundleurl.md): The full URL of the receiver’s bundle directory.
- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [bundleIdentifier](bundleidentifier.md): The receiver’s bundle identifier.
- [object(forInfoDictionaryKey:)](object%28forinfodictionarykey_%29.md): Returns the value associated with the specified key in the receiver’s information property list.

# infoDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * infoDictionary;
```

<a id="Discussion"></a>

## Discussion

If the bundle does not contain an `Info.plist` file, this dictionary contains only private keys that are used internally by the [NSBundle](../bundle.md) class. The [NSBundle](../bundle.md) class may add extra keys to this dictionary for its own use. Common keys for accessing the values of the dictionary are `CFBundleIdentifier`, `NSMainNibFile`, and `NSPrincipalClass`.

## See Also

### Related Documentation

- [principalClass](principalclass.md): The bundle’s principal class.
- [dictionaryWithContentsOfFile:](../nsdictionary/dictionarywithcontentsoffile_.md): Deprecated. Creates a dictionary using the keys and values found in a file specified by a given path.

### Getting bundle information

- [bundleURL](bundleurl.md): The full URL of the receiver’s bundle directory.
- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [bundleIdentifier](bundleidentifier.md): The receiver’s bundle identifier.
- [objectForInfoDictionaryKey:](object%28forinfodictionarykey_%29.md): Returns the value associated with the specified key in the receiver’s information property list.
