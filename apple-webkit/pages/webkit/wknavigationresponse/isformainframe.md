> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationresponse/isformainframe](https://developer.apple.com/documentation/webkit/wknavigationresponse/isformainframe)

# isForMainFrame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the response targets the web view’s main frame.

## Declaration

```swift
var isForMainFrame: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the response targets the main frame. The value is [false](https://developer.apple.com/documentation/swift/false) if the response targets a different frame, such as the frame in a new window.

## See Also

### Getting Additional Response Information

- [canShowMIMEType](canshowmimetype.md): A Boolean value that indicates whether WebKit is capable of displaying the response’s MIME type natively.

# forMainFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the response targets the web view’s main frame.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isForMainFrame) BOOL forMainFrame;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the response targets the main frame. The value is [false](https://developer.apple.com/documentation/swift/false) if the response targets a different frame, such as the frame in a new window.

## See Also

### Getting Additional Response Information

- [canShowMIMEType](canshowmimetype.md): A Boolean value that indicates whether WebKit is capable of displaying the response’s MIME type natively.
