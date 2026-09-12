> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/configuration-swift.class/default()](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/configuration-swift.class/default())

# default() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a new default configuration that is persistent and not unique.

## Declaration

```swift
class func `default`() -> Self
```

<a id="discussion"></a>

## Discussion

If a [WKWebExtensionController](../../wkwebextensioncontroller.md) is associated with a persistent configuration, data will be written to the file system in a common location. When using multiple extension controllers, each controller should use a unique configuration to avoid conflicts.

## See Also

### Related Documentation

- [init(identifier:)](init%28identifier_%29.md): Returns a new configuration that is persistent and unique for the specified identifier.

# defaultConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a new default configuration that is persistent and not unique.

## Declaration

```objectivec
+ (instancetype) defaultConfiguration;
```

<a id="discussion"></a>

## Discussion

If a [WKWebExtensionController](../../wkwebextensioncontroller.md) is associated with a persistent configuration, data will be written to the file system in a common location. When using multiple extension controllers, each controller should use a unique configuration to avoid conflicts.

## See Also

### Related Documentation

- [configurationWithIdentifier:](init%28identifier_%29.md): Returns a new configuration that is persistent and unique for the specified identifier.
