> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/datadetectortypes](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/datadetectortypes)

# dataDetectorTypes (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of data detectors to apply to the web view’s content.

## Declaration

```swift
var dataDetectorTypes: WKDataDetectorTypes { get set }
```

<a id="Discussion"></a>

## Discussion

Data detectors add interactivity to web content by creating links for specially formatted text. For example, the `WKDataDetectorTypeLink` type causes the `apple.com` portion of the text “Visit apple.com” to become a link to the Apple website.

The default value of this property is [WKDataDetectorTypeNone](../wkdatadetectortypes/wkdatadetectortypenone.md). For other possible values, see [WKDataDetectorTypes](../wkdatadetectortypes.md).

## See Also

### Identifying data types

- [WKDataDetectorTypes](../wkdatadetectortypes.md): The data detector types.

# dataDetectorTypes (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of data detectors to apply to the web view’s content.

## Declaration

```objectivec
@property (nonatomic) WKDataDetectorTypes dataDetectorTypes;
```

<a id="Discussion"></a>

## Discussion

Data detectors add interactivity to web content by creating links for specially formatted text. For example, the `WKDataDetectorTypeLink` type causes the `apple.com` portion of the text “Visit apple.com” to become a link to the Apple website.

The default value of this property is [WKDataDetectorTypeNone](../wkdatadetectortypes/wkdatadetectortypenone.md). For other possible values, see [WKDataDetectorTypes](../wkdatadetectortypes.md).

## See Also

### Identifying data types

- [WKDataDetectorTypes](../wkdatadetectortypes.md): The data detector types.
