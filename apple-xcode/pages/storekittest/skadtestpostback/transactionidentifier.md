> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/transactionidentifier](https://developer.apple.com/documentation/storekittest/skadtestpostback/transactionidentifier)

# transactionIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A unique transaction identifier that the system generates.

## Declaration

```swift
var transactionIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

The system generates this value when you call [setPostbacks(\_:)](../skadtestsession/setpostbacks%28__%29.md). This value is an empty string otherwise.

Use this value to match the test postback with the response you receive from [flushPostbacks(responses:)](../skadtestsession/flushpostbacks%28responses_%29.md).

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.

# transactionIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A unique transaction identifier that the system generates.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * transactionIdentifier;
```

<a id="discussion"></a>

## Discussion

The system generates this value when you call [setPostbacks:error:](../skadtestsession/setpostbacks%28__%29.md). This value is an empty string otherwise.

Use this value to match the test postback with the response you receive from [flushPostbacksWithResponses:](../skadtestsession/flushpostbacks%28responses_%29.md).

## See Also

### Getting general information

- [version](version.md): The SKAdNetwork version that the postback uses.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.
