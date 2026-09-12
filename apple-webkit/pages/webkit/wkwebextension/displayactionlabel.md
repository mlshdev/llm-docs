> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/displayactionlabel](https://developer.apple.com/documentation/webkit/wkwebextension/displayactionlabel)

# displayActionLabel (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The default localized extension action label.

## Declaration

```swift
var displayActionLabel: String? { get }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if there was no default action label specified.

This label serves as a default and should be used to represent the extension in contexts like action sheets or toolbars prior to the extension being loaded into an extension context. Once the extension is loaded, use the [action(for:)](../wkwebextensioncontext/action%28for_%29.md) API to get the tab-specific label.

# displayActionLabel (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The default localized extension action label.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * displayActionLabel;
```

<a id="discussion"></a>

## Discussion

Returns `nil` if there was no default action label specified.

This label serves as a default and should be used to represent the extension in contexts like action sheets or toolbars prior to the extension being loaded into an extension context. Once the extension is loaded, use the [actionForTab:](../wkwebextensioncontext/action%28for_%29.md) API to get the tab-specific label.
