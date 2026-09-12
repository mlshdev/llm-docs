> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/startsystemextensionmode()](https://developer.apple.com/documentation/networkextension/neprovider/startsystemextensionmode())

# startSystemExtensionMode() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Starts the Network Extension machinery from inside a System Extension.

## Declaration

```swift
class func startSystemExtensionMode()
```

<a id="Discussion"></a>

## Discussion

Call this method as early as possible after your system extension starts.

Once called, this class method causes your system extension to start handling requests from the Network Extension session manager daemon to instantiate appropriate [NEProvider](../neprovider.md) subclass instances. The system extension must declare a mapping of Network Extension extension points to [NEProvider](../neprovider.md) subclass instances in its `Info.plist`. The following example shows this mapping:

```xml
<key>NetworkExtension</key><dict>
    <key>NEProviderClasses</key>
    <dict>
        <key>com.apple.networkextension.app-proxy</key>
        <string>$(PRODUCT_MODULE_NAME).AppProxyProvider</string>
        <key>com.apple.networkextension.filter-data</key>
        <string>$(PRODUCT_MODULE_NAME).FilterDataProvider</string>
    </dict>
</dict>

```

# startSystemExtensionMode (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Starts the Network Extension machinery from inside a System Extension.

## Declaration

```objectivec
+ (void) startSystemExtensionMode;
```

<a id="Discussion"></a>

## Discussion

Call this method as early as possible after your system extension starts.

Once called, this class method causes your system extension to start handling requests from the Network Extension session manager daemon to instantiate appropriate [NEProvider](../neprovider.md) subclass instances. The system extension must declare a mapping of Network Extension extension points to [NEProvider](../neprovider.md) subclass instances in its `Info.plist`. The following example shows this mapping:

```xml
<key>NetworkExtension</key><dict>
    <key>NEProviderClasses</key>
    <dict>
        <key>com.apple.networkextension.app-proxy</key>
        <string>$(PRODUCT_MODULE_NAME).AppProxyProvider</string>
        <key>com.apple.networkextension.filter-data</key>
        <string>$(PRODUCT_MODULE_NAME).FilterDataProvider</string>
    </dict>
</dict>

```
