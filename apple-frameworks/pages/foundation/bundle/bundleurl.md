> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/bundleurl](https://developer.apple.com/documentation/foundation/bundle/bundleurl)

# bundleURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The full URL of the receiver’s bundle directory.

## Declaration

```swift
var bundleURL: URL { get }
```

## See Also

### Getting bundle information

- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [bundleIdentifier](bundleidentifier.md): The receiver’s bundle identifier.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.
- [object(forInfoDictionaryKey:)](object%28forinfodictionarykey_%29.md): Returns the value associated with the specified key in the receiver’s information property list.

# bundleURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The full URL of the receiver’s bundle directory.

## Declaration

```objectivec
@property (copy, readonly) NSURL * bundleURL;
```

## See Also

### Getting bundle information

- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.
- [bundleIdentifier](bundleidentifier.md): The receiver’s bundle identifier.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.
- [objectForInfoDictionaryKey:](object%28forinfodictionarykey_%29.md): Returns the value associated with the specified key in the receiver’s information property list.
