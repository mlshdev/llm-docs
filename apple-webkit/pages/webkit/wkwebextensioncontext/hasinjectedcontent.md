> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasinjectedcontent](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasinjectedcontent)

# hasInjectedContent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has script or stylesheet content that can be injected into webpages.

## Declaration

```swift
var hasInjectedContent: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension has content that can be injected by matching against the extension’s requested match patterns.

## See Also

### Related Documentation

- [hasInjectedContent(for:)](hasinjectedcontent%28for_%29.md): Checks if the extension has script or stylesheet content that can be injected into the specified URL.

# hasInjectedContent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has script or stylesheet content that can be injected into webpages.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasInjectedContent;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension has content that can be injected by matching against the extension’s requested match patterns.

## See Also

### Related Documentation

- [hasInjectedContentForURL:](hasinjectedcontent%28for_%29.md): Checks if the extension has script or stylesheet content that can be injected into the specified URL.
