> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/ignoresviewportscalelimits](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/ignoresviewportscalelimits)

# ignoresViewportScaleLimits (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether a web view allows scaling of the webpage.

## Declaration

```swift
var ignoresViewportScaleLimits: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), this property overrides the `user-scalable` HTML property in a webpage, and lets the web view scale its webpage content regardless of the author’s intent. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the rendering behavior

- [suppressesIncrementalRendering](suppressesincrementalrendering.md): A Boolean value that indicates whether the web view suppresses content rendering until the content is fully loaded into memory.

# ignoresViewportScaleLimits (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether a web view allows scaling of the webpage.

## Declaration

```objectivec
@property (nonatomic) BOOL ignoresViewportScaleLimits;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), this property overrides the `user-scalable` HTML property in a webpage, and lets the web view scale its webpage content regardless of the author’s intent. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the rendering behavior

- [suppressesIncrementalRendering](suppressesincrementalrendering.md): A Boolean value that indicates whether the web view suppresses content rendering until the content is fully loaded into memory.
