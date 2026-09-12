> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdialogresult/handled](https://developer.apple.com/documentation/webkit/wkdialogresult/handled)

# WKDialogResult.handled (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A result that indicates the delegate displayed the first use message.

## Declaration

```swift
case handled
```

<a id="Discussion"></a>

## Discussion

This result tells the system that it does not need to check any more whether it needs to display the Lockdown Mode first use message.

## See Also

### First use dialog results

- [WKDialogResult.askAgain](askagain.md): A result that indicates the delegate didn’t display a message, so other web views should check again.
- [WKDialogResult.showDefault](showdefault.md): A result that indicates the delegate didn’t display a message, so the web view should show the default Lockdown Mode message.

# WKDialogResultHandled (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A result that indicates the delegate displayed the first use message.

## Declaration

```objectivec
WKDialogResultHandled
```

<a id="Discussion"></a>

## Discussion

This result tells the system that it does not need to check any more whether it needs to display the Lockdown Mode first use message.

## See Also

### First use dialog results

- [WKDialogResultAskAgain](askagain.md): A result that indicates the delegate didn’t display a message, so other web views should check again.
- [WKDialogResultShowDefault](showdefault.md): A result that indicates the delegate didn’t display a message, so the web view should show the default Lockdown Mode message.
