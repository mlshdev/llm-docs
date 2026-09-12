> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/restrictedsandboxrevision/revision2](https://developer.apple.com/documentation/browserenginekit/restrictedsandboxrevision/revision2)

# RestrictedSandboxRevision.revision2

**Framework:** BrowserEngineKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

Second revision of the restricted sandbox rules.

## Declaration

```swift
case revision2
```

<a id="discussion"></a>

## Discussion

You can apply this revision to any of your app’s extensions but the system only enforces its restrictions for the web content and rendering extensions.

For more information, see [Limiting resource access in web content extensions](../limiting-resource-access-in-content-extensions.md).

## See Also

### Sandbox restriction revisions

- [RestrictedSandboxRevision.revision1](revision1.md): First revision of the restricted sandbox rules.
