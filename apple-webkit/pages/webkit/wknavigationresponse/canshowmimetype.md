> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationresponse/canshowmimetype](https://developer.apple.com/documentation/webkit/wknavigationresponse/canshowmimetype)

# canShowMIMEType (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether WebKit is capable of displaying the response’s MIME type natively.

## Declaration

```swift
var canShowMIMEType: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if WebKit is able to display the MIME type.

## See Also

### Getting Additional Response Information

- [isForMainFrame](isformainframe.md): A Boolean value that indicates whether the response targets the web view’s main frame.

# canShowMIMEType (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether WebKit is capable of displaying the response’s MIME type natively.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canShowMIMEType;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if WebKit is able to display the MIME type.

## See Also

### Getting Additional Response Information

- [forMainFrame](isformainframe.md): A Boolean value that indicates whether the response targets the web view’s main frame.
