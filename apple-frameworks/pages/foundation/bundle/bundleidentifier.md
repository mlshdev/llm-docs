> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/bundleidentifier](https://developer.apple.com/documentation/foundation/bundle/bundleidentifier)

# bundleIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s bundle identifier.

## Declaration

```swift
var bundleIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The bundle identifier is defined by the `CFBundleIdentifier` key in the bundle’s information property list.

## See Also

### Getting bundle information

- [bundleURL](bundleurl.md): The full URL of the receiver’s bundle directory.
- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.
- [object(forInfoDictionaryKey:)](object%28forinfodictionarykey_%29.md): Returns the value associated with the specified key in the receiver’s information property list.

# bundleIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s bundle identifier.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * bundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

The bundle identifier is defined by the `CFBundleIdentifier` key in the bundle’s information property list.

## See Also

### Getting bundle information

- [bundleURL](bundleurl.md): The full URL of the receiver’s bundle directory.
- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.
- [objectForInfoDictionaryKey:](object%28forinfodictionarykey_%29.md): Returns the value associated with the specified key in the receiver’s information property list.
