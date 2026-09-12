> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionpassentry/art](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionpassentry/art)

# art (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An image to that the system displays to the user when they add or select the card.

## Declaration

```swift
var art: CGImage { get }
```

<a id="Discussion"></a>

## Discussion

The image requirements are:

- Square corners.
- Doesn’t include an account number.
- Doesn’t include the user name.

## See Also

### Information for displaying an addable card

- [title](title.md): A name for the pass that the system displays to the user when they add or select the card.
- [identifier](identifier.md): A developer-defined value you use to identify the card.

# art (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An image to that the system displays to the user when they add or select the card.

## Declaration

```objectivec
@property (nonatomic, readonly) CGImageRef art;
```

<a id="Discussion"></a>

## Discussion

The image requirements are:

- Square corners.
- Doesn’t include an account number.
- Doesn’t include the user name.

## See Also

### Information for displaying an addable card

- [title](title.md): A name for the pass that the system displays to the user when they add or select the card.
- [identifier](identifier.md): A developer-defined value you use to identify the card.
