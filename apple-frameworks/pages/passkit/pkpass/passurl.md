> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/passurl](https://developer.apple.com/documentation/passkit/pkpass/passurl)

# passURL (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The URL that opens the pass in the Wallet app.

## Declaration

```swift
var passURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

Use the [openURL(\_:)](../../uikit/uiapplication/openurl%28__%29.md) method to open the pass in the Wallet app.

# passURL (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The URL that opens the pass in the Wallet app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * passURL;
```

<a id="Discussion"></a>

## Discussion

Use the [openURL:](../../uikit/uiapplication/openurl%28__%29.md) method to open the pass in the Wallet app.
