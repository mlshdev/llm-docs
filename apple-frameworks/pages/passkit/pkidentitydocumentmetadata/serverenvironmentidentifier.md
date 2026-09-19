> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkidentitydocumentmetadata/serverenvironmentidentifier

# serverEnvironmentIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

An identifier that references the target server environment Apple Pay servers need to connect with to provision the pass.

## Declaration

```swift
var serverEnvironmentIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

If `serverEnvironmentIdentifier` isn’t present, the system uses the default Apply Pay server and returns an empty string.

# serverEnvironmentIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

An identifier that references the target server environment Apple Pay servers need to connect with to provision the pass.

## Declaration

```objectivec
@property (nonatomic, strong, nonnull) NSString * serverEnvironmentIdentifier;
```

<a id="Discussion"></a>

## Discussion

If `serverEnvironmentIdentifier` isn’t present, the system uses the default Apply Pay server and returns an empty string.
