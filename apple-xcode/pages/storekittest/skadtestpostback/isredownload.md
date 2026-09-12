> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/isredownload](https://developer.apple.com/documentation/storekittest/skadtestpostback/isredownload)

# isRedownload (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A Boolean value that indicates whether the user redownloaded and reinstalled the app.

## Declaration

```swift
var isRedownload: Bool { get }
```

<a id="discussion"></a>

## Discussion

In the production environment, this value is `true` when the user redownloaded and reinstalled the app. In the testing environment, you set the value of this property when you create the test postback.

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.

# isRedownload (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A Boolean value that indicates whether the user redownloaded and reinstalled the app.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isRedownload;
```

<a id="discussion"></a>

## Discussion

In the production environment, this value is `true` when the user redownloaded and reinstalled the app. In the testing environment, you set the value of this property when you create the test postback.

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
