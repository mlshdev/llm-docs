> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpass/webserviceurl

# webServiceURL (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The URL for the web service.

## Declaration

```swift
var webServiceURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The web service is for updating passes. For information about the web service protocol, see [PassKit Web Service Reference](https://developer.apple.com/library/archive/documentation/PassKit/Reference/PassKit_WebService/WebService.html#//apple_ref/doc/uid/TP40011988).

## See Also

### Getting the web service information

- [authenticationToken](authenticationtoken.md): The token for authenticating update requests.

# webServiceURL (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The URL for the web service.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * webServiceURL;
```

<a id="Discussion"></a>

## Discussion

The web service is for updating passes. For information about the web service protocol, see [PassKit Web Service Reference](https://developer.apple.com/library/archive/documentation/PassKit/Reference/PassKit_WebService/WebService.html#//apple_ref/doc/uid/TP40011988).

## See Also

### Getting the web service information

- [authenticationToken](authenticationtoken.md): The token for authenticating update requests.
