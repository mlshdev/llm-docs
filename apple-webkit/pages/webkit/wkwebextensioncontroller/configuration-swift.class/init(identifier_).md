> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/configuration-swift.class/init(identifier:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/configuration-swift.class/init(identifier:))

# init(identifier:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a new configuration that is persistent and unique for the specified identifier.

## Declaration

```swift
convenience init(identifier: UUID)
```

<a id="discussion"></a>

## Discussion

If a [WKWebExtensionController](../../wkwebextensioncontroller.md) is associated with a unique persistent configuration, data will be written to the file system in a unique location based on the specified identifier.

## See Also

### Related Documentation

- [default()](default%28%29.md): Returns a new default configuration that is persistent and not unique.

# configurationWithIdentifier: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a new configuration that is persistent and unique for the specified identifier.

## Declaration

```objectivec
+ (instancetype) configurationWithIdentifier:(NSUUID *) identifier;
```

<a id="discussion"></a>

## Discussion

If a [WKWebExtensionController](../../wkwebextensioncontroller.md) is associated with a unique persistent configuration, data will be written to the file system in a unique location based on the specified identifier.

## See Also

### Related Documentation

- [defaultConfiguration](default%28%29.md): Returns a new default configuration that is persistent and not unique.
