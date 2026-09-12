> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/instanceaid](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/instanceaid)

# instanceAID

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The unique identifier for the applet instance.

## Declaration

```swift
let instanceAID: Data
```

<a id="discussion"></a>

## Discussion

Use this identifier in [performWiredTransaction(using:over:instanceAID:)](../../performwiredtransaction%28using_over_instanceaid_%29.md) for UIKit or [performTransactionInWiredMode(using:instanceAID:)](../../../credentialtransaction/performtransactioninwiredmode%28using_instanceaid_%29.md) for SwiftUI, and when selecting this instance to perform data transceiving.

## See Also

### Inspecting instance identifiers

- [packageAID](packageaid.md): The unique identifier of the package you use to install the instance.
- [moduleAID](moduleaid.md): The module identifier of the package with which this instance is associated.
