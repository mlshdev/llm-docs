> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/hasbackgroundcontent](https://developer.apple.com/documentation/webkit/wkwebextension/hasbackgroundcontent)

# hasBackgroundContent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has background content that can run when needed.

## Declaration

```swift
var hasBackgroundContent: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension can run in the background even when no webpages are open.

# hasBackgroundContent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has background content that can run when needed.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasBackgroundContent;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension can run in the background even when no webpages are open.
