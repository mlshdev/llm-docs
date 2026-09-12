> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/isregistered](https://developer.apple.com/documentation/storekittest/skadtestpostback/isregistered)

# isRegistered (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A Boolean value that indicates whether the postback is registered in the testing environment.

## Declaration

```swift
var isRegistered: Bool { get }
```

<a id="discussion"></a>

## Discussion

To register a postback, call [updatePostbackConversionValue(\_:completionHandler:)](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue%28_:completionhandler:%29), or [registerAppForAdNetworkAttribution()](https://developer.apple.com/documentation/storekit/skadnetwork/registerappforadnetworkattribution%28%29).

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.

# isRegistered (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A Boolean value that indicates whether the postback is registered in the testing environment.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isRegistered;
```

<a id="discussion"></a>

## Discussion

To register a postback, call [updatePostbackConversionValue:completionHandler:](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue%28_:completionhandler:%29), or [registerAppForAdNetworkAttribution](https://developer.apple.com/documentation/storekit/skadnetwork/registerappforadnetworkattribution%28%29).

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.
