> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/version](https://developer.apple.com/documentation/storekittest/skadtestpostback/version)

# version (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The SKAdNetwork version that the postback uses.

## Declaration

```swift
var version: SKAdTestPostbackVersion { get }
```

<a id="discussion"></a>

## Discussion

For information about the SKAdNetwork versions, See [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## See Also

### Getting general information

- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.

# version (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The SKAdNetwork version that the postback uses.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) SKAdTestPostbackVersion version;
```

<a id="discussion"></a>

## Discussion

For information about the SKAdNetwork versions, See [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## See Also

### Getting general information

- [transactionIdentifier](transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.
