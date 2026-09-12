> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/configuration-swift.property](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/configuration-swift.property)

# configuration (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A copy of the configuration with which the web extension controller was initialized.

## Declaration

```swift
@NSCopying var configuration: WKWebExtensionController.Configuration { get }
```

<a id="discussion"></a>

## Discussion

Mutating the configuration has no effect on the web extension controller.

# configuration (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A copy of the configuration with which the web extension controller was initialized.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) WKWebExtensionControllerConfiguration * configuration;
```

<a id="discussion"></a>

## Discussion

Mutating the configuration has no effect on the web extension controller.
