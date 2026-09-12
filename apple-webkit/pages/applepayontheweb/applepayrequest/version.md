> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequest/version](https://developer.apple.com/documentation/applepayontheweb/applepayrequest/version)

# version

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The Apple Pay version supported on your website.

## Declaration

```
required long version;
```

<a id="Discussion"></a>

## Discussion

The version number you provide here represents the minimum Apple Pay version that the user’s browser must support. You can check which API version the browser supports by calling [supportsVersion](../applepaysession/supportsversion.md).

Always check [supportsVersion](../applepaysession/supportsversion.md) before using an Apple Pay feature that isn’t available in all versions. See [Apple Pay on the Web version history](../apple-pay-on-the-web-version-history.md) for information about the features available in each version.

## See Also

### Identifier and version information

- [merchantIdentifier](merchantidentifier.md): The merchant identifier you registered with Apple for use with Apple Pay.
