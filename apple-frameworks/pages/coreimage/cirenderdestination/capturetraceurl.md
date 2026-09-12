> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/capturetraceurl](https://developer.apple.com/documentation/coreimage/cirenderdestination/capturetraceurl)

# captureTraceURL (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tell the next render using this destination to capture a Metal trace.

## Declaration

```swift
var captureTraceURL: URL? { get set }
```

<a id="discussion"></a>

## Discussion

If this property is set to a file-based URL, then the next render using this destination will capture a Metal trace, deleting any existing file if present. This property is nil by default.

# captureTraceURL (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tell the next render using this destination to capture a Metal trace.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSURL * captureTraceURL;
```

<a id="discussion"></a>

## Discussion

If this property is set to a file-based URL, then the next render using this destination will capture a Metal trace, deleting any existing file if present. This property is nil by default.
