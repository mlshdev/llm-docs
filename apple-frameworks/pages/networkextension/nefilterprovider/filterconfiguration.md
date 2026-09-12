> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterprovider/filterconfiguration](https://developer.apple.com/documentation/networkextension/nefilterprovider/filterconfiguration)

# filterConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the current filter configuration.

## Declaration

```swift
var filterConfiguration: NEFilterProviderConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

The Filter Provider can observe this property to be notified when the configuration changes, using KVO. See [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

# filterConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An [NEFilterProviderConfiguration](../nefilterproviderconfiguration.md) object containing the current filter configuration.

## Declaration

```objectivec
@property (readonly) NEFilterProviderConfiguration * filterConfiguration;
```

<a id="Discussion"></a>

## Discussion

The Filter Provider can observe this property to be notified when the configuration changes, using KVO. See [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).
