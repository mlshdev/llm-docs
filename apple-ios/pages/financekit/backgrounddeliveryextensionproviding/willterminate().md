> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/backgrounddeliveryextensionproviding/willterminate()](https://developer.apple.com/documentation/financekit/backgrounddeliveryextensionproviding/willterminate())

# willTerminate()

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Get alerted when a `BackgroundDeliveryExtension` is about to close.

## Declaration

```swift
func willTerminate() async
```

<a id="Discussion"></a>

## Discussion

This is called when the extension approaches the end of its time window and is about to be terminated by the system. It provides an opportunity to safely end any ongoing operations and save changes to data. When the time window is exceeded, the extension terminates even if execution is within `willTerminate`.

> **Important**

>  For certain system events, `willTerminate` may not be called before the extension is terminated.

## See Also

### Instance Methods

- [didReceiveData(for:)](didreceivedata%28for_%29.md): Handle changes to data within the finance store.
