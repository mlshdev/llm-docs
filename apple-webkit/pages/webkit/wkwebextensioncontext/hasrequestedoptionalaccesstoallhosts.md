> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasrequestedoptionalaccesstoallhosts](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasrequestedoptionalaccesstoallhosts)

# hasRequestedOptionalAccessToAllHosts (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the extension has requested optional access to all hosts.

## Declaration

```swift
var hasRequestedOptionalAccessToAllHosts: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension has asked for access to all hosts in a call to `browser.runtime.permissions.request()`, and future permission checks will present discrete hosts for approval as being implicitly requested. This value should be saved and restored as needed by the app.

# hasRequestedOptionalAccessToAllHosts (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the extension has requested optional access to all hosts.

## Declaration

```objectivec
@property (nonatomic) BOOL hasRequestedOptionalAccessToAllHosts;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension has asked for access to all hosts in a call to `browser.runtime.permissions.request()`, and future permission checks will present discrete hosts for approval as being implicitly requested. This value should be saved and restored as needed by the app.
