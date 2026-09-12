> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/postbacksequenceindex](https://developer.apple.com/documentation/storekittest/skadtestpostback/postbacksequenceindex)

# postbackSequenceIndex (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The position of this postback among all postbacks for an ad impression.

## Declaration

```swift
var postbackSequenceIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

For more information about receiving time-delayed postbacks for an ad impression, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.

# postbackSequenceIndex (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The position of this postback among all postbacks for an ad impression.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger postbackSequenceIndex;
```

<a id="discussion"></a>

## Discussion

For more information about receiving time-delayed postbacks for an ad impression, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.
