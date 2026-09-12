> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld/page](https://developer.apple.com/documentation/webkit/wkcontentworld/page)

# page (Swift)

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The content world for the current webpage’s content.

## Declaration

```swift
class var page: WKContentWorld { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the content world for scripts that the current webpage executes. Be careful when manipulating variables in this content world. If you modify a variable with the same name as one the webpage uses, you may unintentionally disrupt the normal operation of that page.

# pageWorld (Objective-C)

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The content world for the current webpage’s content.

## Declaration

```objectivec
@property (class, nonatomic, readonly) WKContentWorld * pageWorld;
```

<a id="Discussion"></a>

## Discussion

This property contains the content world for scripts that the current webpage executes. Be careful when manipulating variables in this content world. If you modify a variable with the same name as one the webpage uses, you may unintentionally disrupt the normal operation of that page.
