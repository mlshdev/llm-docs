> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/configuration-swift.class/nonpersistent()](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/configuration-swift.class/nonpersistent())

# nonPersistent() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a new non-persistent configuration.

## Declaration

```swift
class func nonPersistent() -> Self
```

<a id="discussion"></a>

## Discussion

If a [WKWebExtensionController](../../wkwebextensioncontroller.md) is associated with a non-persistent configuration, no data will be written to the file system. This is useful for extensions in “private browsing” situations.

# nonPersistentConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a new non-persistent configuration.

## Declaration

```objectivec
+ (instancetype) nonPersistentConfiguration;
```

<a id="discussion"></a>

## Discussion

If a [WKWebExtensionController](../../wkwebextensioncontroller.md) is associated with a non-persistent configuration, no data will be written to the file system. This is useful for extensions in “private browsing” situations.
