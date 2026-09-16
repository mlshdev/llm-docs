> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webdatasource/unreachableurl

# unreachableURL (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data source’s unreachable URL.

## Declaration

```swift
var unreachableURL: URL! { get }
```

<a id="Discussion"></a>

## Discussion

The data source has an unreachable URL if it was created using the \`\`WebFrame/loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)\`\`\`WebFrame\` method.

# unreachableURL (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data source’s unreachable URL.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSURL * unreachableURL;
```

<a id="Discussion"></a>

## Discussion

The data source has an unreachable URL if it was created using the \`\`WebFrame/loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)\`\`\`WebFrame\` method.
